// Logs datasheet-download leads to a Google Sheet via a free Apps Script web app.
//
// Why this shape: GitHub Pages serves only static files — there is no server to
// run nodemailer/SMTP. Instead the browser POSTs the capture to a Google Apps
// Script web app, which appends a row to your Sheet (and can email you). The
// endpoint URL lives in src/lib/apps-script.ts; the script to deploy lives in
// scripts/download-log.gs.

import { APPS_SCRIPT_ENDPOINT, isAppsScriptConfigured } from '@/lib/apps-script';

interface DownloadNotification {
  readonly name: string;
  readonly email: string;
  readonly product: string;
  readonly timestamp: string;
}

export async function sendDownloadNotification(
  data: DownloadNotification
): Promise<{ success: boolean; error?: string }> {
  // Not configured yet — no-op so downloads still work during development.
  if (!isAppsScriptConfigured()) {
    return { success: false, error: 'Download logging not configured.' };
  }

  try {
    // Apps Script web apps don't return CORS headers, so a normal cross-origin
    // fetch would be blocked from reading the response. We use `no-cors`: the
    // POST still reaches the script, we just can't read what it returns (which
    // is fine — this is best-effort and the caller ignores the result). A
    // "simple" text/plain content type avoids a CORS preflight that `no-cors`
    // would reject; the script reads the JSON from e.postData.contents.
    await fetch(APPS_SCRIPT_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        type: 'download',
        name: data.name,
        email: data.email,
        product: data.product,
        timestamp: data.timestamp,
        page: typeof window !== 'undefined' ? window.location.href : '',
      }),
    });

    // Response is opaque under no-cors, so a completed request counts as sent.
    return { success: true };
  } catch {
    return { success: false, error: 'Network error.' };
  }
}
