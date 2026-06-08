// Strict email validation - checks format and common disposable domains
const DISPOSABLE_DOMAINS = new Set([
  'mailinator.com',
  'guerrillamail.com',
  'tempmail.com',
  'throwaway.email',
  'yopmail.com',
  'sharklasers.com',
  'guerrillamailblock.com',
  'grr.la',
  'dispostable.com',
  'trashmail.com',
  'fakeinbox.com',
  '10minutemail.com',
  'temp-mail.org',
  'emailondeck.com',
  'getnada.com',
]);

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;

export interface EmailValidationResult {
  readonly valid: boolean;
  readonly error?: string;
}

export function validateEmail(email: string): EmailValidationResult {
  const trimmed = email.trim().toLowerCase();

  if (!trimmed) {
    return { valid: false, error: 'Email is required' };
  }

  if (!EMAIL_REGEX.test(trimmed)) {
    return { valid: false, error: 'Please enter a valid email address' };
  }

  const domain = trimmed.split('@')[1];
  if (DISPOSABLE_DOMAINS.has(domain)) {
    return { valid: false, error: 'Please use a non-disposable email address' };
  }

  return { valid: true };
}

export function validateName(name: string): { valid: boolean; error?: string } {
  const trimmed = name.trim();

  if (!trimmed) {
    return { valid: false, error: 'Name is required' };
  }

  if (trimmed.length < 2) {
    return { valid: false, error: 'Name must be at least 2 characters' };
  }

  if (trimmed.length > 100) {
    return { valid: false, error: 'Name must be under 100 characters' };
  }

  return { valid: true };
}

// Queries Google's free public DNS-over-HTTPS resolver. CORS-enabled, no key,
// works on a static site. Returns the DNS response code (0 = ok, 3 = NXDOMAIN)
// and whether a record of the requested type was returned. Aborts after 4s.
async function resolveDns(
  domain: string,
  type: 'MX' | 'A'
): Promise<{ status: number; hasAnswer: boolean }> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 4000);
  try {
    const res = await fetch(
      `https://dns.google/resolve?name=${encodeURIComponent(domain)}&type=${type}`,
      { headers: { Accept: 'application/dns-json' }, signal: controller.signal }
    );
    if (!res.ok) throw new Error(`DNS ${type} lookup failed`);
    const json = (await res.json()) as {
      Status?: number;
      Answer?: ReadonlyArray<{ type: number }>;
    };
    const wantType = type === 'MX' ? 15 : 1; // DNS record type numbers
    return {
      status: typeof json.Status === 'number' ? json.Status : -1,
      hasAnswer:
        Array.isArray(json.Answer) && json.Answer.some((a) => a.type === wantType),
    };
  } finally {
    clearTimeout(timer);
  }
}

// Confirms the email's domain can actually receive mail (has MX records, or an
// A record per RFC 5321's implicit-MX rule). Catches fake and typo'd domains
// like "flkjsdf.com" — but NOT whether the specific mailbox exists.
//
// Fails OPEN: any uncertain result (network error, timeout, odd response) is
// treated as valid so a DNS hiccup never blocks a legitimate download. Only a
// clear "domain doesn't exist / can't receive mail" answer is rejected.
export async function validateEmailDomain(
  email: string
): Promise<EmailValidationResult> {
  const domain = email.trim().toLowerCase().split('@')[1];
  if (!domain) {
    return { valid: false, error: 'Please enter a valid email address' };
  }

  try {
    const mx = await resolveDns(domain, 'MX');
    if (mx.status === 0 && mx.hasAnswer) {
      return { valid: true }; // has mail servers
    }
    if (mx.status === 3) {
      return { valid: false, error: 'That email domain doesn’t exist — check for typos' };
    }

    // No MX record — a domain can still receive mail via its A record.
    const a = await resolveDns(domain, 'A');
    if (a.status === 0 && a.hasAnswer) {
      return { valid: true };
    }
    if (a.status === 3) {
      return { valid: false, error: 'That email domain doesn’t exist — check for typos' };
    }

    // Domain resolves but has neither MX nor A — it can't receive mail.
    if (mx.status === 0 && a.status === 0) {
      return { valid: false, error: 'That email domain can’t receive mail — check for typos' };
    }

    return { valid: true }; // ambiguous → fail open
  } catch {
    return { valid: true }; // network error / timeout → fail open
  }
}
