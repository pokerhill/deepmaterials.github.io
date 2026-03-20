const RATE_LIMIT_KEY = 'dm_download_attempts';
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

interface RateLimitEntry {
  readonly timestamps: ReadonlyArray<number>;
}

function getEntries(): RateLimitEntry {
  if (typeof window === 'undefined') return { timestamps: [] };

  try {
    const raw = localStorage.getItem(RATE_LIMIT_KEY);
    if (!raw) return { timestamps: [] };
    return JSON.parse(raw) as RateLimitEntry;
  } catch {
    return { timestamps: [] };
  }
}

function setEntries(entry: RateLimitEntry): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(entry));
}

export function checkRateLimit(): { allowed: boolean; remainingAttempts: number; resetInMs: number } {
  const now = Date.now();
  const entry = getEntries();

  // Filter to only timestamps within the current window
  const validTimestamps = entry.timestamps.filter((t) => now - t < WINDOW_MS);

  if (validTimestamps.length >= MAX_ATTEMPTS) {
    const oldestInWindow = Math.min(...validTimestamps);
    const resetInMs = WINDOW_MS - (now - oldestInWindow);
    return {
      allowed: false,
      remainingAttempts: 0,
      resetInMs,
    };
  }

  return {
    allowed: true,
    remainingAttempts: MAX_ATTEMPTS - validTimestamps.length,
    resetInMs: 0,
  };
}

export function recordDownloadAttempt(): void {
  const now = Date.now();
  const entry = getEntries();
  const validTimestamps = entry.timestamps.filter((t) => now - t < WINDOW_MS);

  setEntries({ timestamps: [...validTimestamps, now] });
}

export function formatResetTime(ms: number): string {
  const minutes = Math.ceil(ms / 60000);
  if (minutes <= 1) return 'less than a minute';
  if (minutes < 60) return `${minutes} minutes`;
  return `${Math.ceil(minutes / 60)} hour(s)`;
}
