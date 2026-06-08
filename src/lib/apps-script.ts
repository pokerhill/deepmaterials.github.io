// The single Google Apps Script web app that backs both the datasheet-download
// logging (src/lib/download-log.ts) and the contact form (src/app/contact).
// Deploy/setup instructions live in scripts/download-log.gs.
//
// To point at a different deployment, replace this one URL.
export const APPS_SCRIPT_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbz-5Ki-B39X9bUoXwgCUosMnXPQrY5JN6c5QRs0M8G9Evk-UBVz8Inmj9HfZQIXbq9wLQ/exec';

export function isAppsScriptConfigured(): boolean {
  return (
    !!APPS_SCRIPT_ENDPOINT &&
    APPS_SCRIPT_ENDPOINT.startsWith('https://script.google.com/')
  );
}
