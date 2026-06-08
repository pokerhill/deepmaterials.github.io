/**
 * Google Apps Script — backs the Deep Material website's datasheet-download
 * logging AND contact form. Free, no monthly cap. It receives POSTs from
 * src/lib/download-log.ts (downloads) and src/app/contact/page.tsx (contact),
 * told apart by the payload's "type" field, and writes each to its own tab.
 *
 * Setup (one-time):
 *   1. Create / open a Google Sheet.
 *   2. Extensions → Apps Script. Delete the default code, paste this file, Save.
 *   3. Set the recipients below (NOTIFY_EMAILS for downloads, CONTACT_EMAIL for
 *      contact messages).
 *   4. Deploy → New deployment → gear icon → "Web app":
 *        - Execute as:        Me
 *        - Who has access:    Anyone
 *      Click Deploy, authorize when prompted, and copy the "Web app URL".
 *   5. Paste that URL into src/lib/apps-script.ts as APPS_SCRIPT_ENDPOINT.
 *
 * After ANY change to this script, re-deploy:
 *   Deploy → Manage deployments → edit (pencil) → Version: New version → Deploy.
 *   (The Web app URL stays the same.)
 */

// --- Datasheet downloads -------------------------------------------------
// Who to email on each download. Add as many addresses as you like; leave the
// array empty ([]) to disable download emails (downloads are still logged).
const NOTIFY_EMAILS = [
  // 'you@deep-materials.com',
];
const DOWNLOADS_SHEET = 'Downloads';

// --- Contact form --------------------------------------------------------
// Where contact-form messages are sent. Set to '' to disable the email
// (messages are still logged to the Contact tab).
const CONTACT_EMAIL = 'sales@deep-materials.com';
const CONTACT_SHEET = 'Contact';

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    if (data.type === 'contact') {
      return handleContact(data);
    }
    return handleDownload(data);
  } catch (err) {
    return jsonOut({ ok: false, error: String(err) });
  }
}

function handleDownload(data) {
  var sheet = getOrCreateSheet(DOWNLOADS_SHEET, [
    'Received', 'Name', 'Email', 'Product', 'Client time', 'Page',
  ]);
  sheet.appendRow([
    new Date(),
    data.name || '',
    data.email || '',
    data.product || '',
    data.timestamp || '',
    data.page || '',
  ]);

  if (NOTIFY_EMAILS.length > 0) {
    MailApp.sendEmail({
      // Comma-separated recipients all go on the To line. Prefer 'bcc' here
      // instead if recipients shouldn't see each other's addresses.
      to: NOTIFY_EMAILS.join(','),
      subject: 'Datasheet download: ' + (data.product || 'unknown'),
      body:
        (data.name || 'Someone') + ' (' + (data.email || 'no email') + ') ' +
        'downloaded "' + (data.product || 'unknown') + '".\n\n' +
        'Client time: ' + (data.timestamp || '') + '\n' +
        'Page: ' + (data.page || ''),
    });
  }
  return jsonOut({ ok: true });
}

function handleContact(data) {
  var sheet = getOrCreateSheet(CONTACT_SHEET, [
    'Received', 'Name', 'Email', 'Company', 'Subject', 'Message', 'Page',
  ]);
  sheet.appendRow([
    new Date(),
    data.name || '',
    data.email || '',
    data.company || '',
    data.subject || '',
    data.message || '',
    data.page || '',
  ]);

  if (CONTACT_EMAIL) {
    var options = {
      to: CONTACT_EMAIL,
      name: 'Deep Material Website',
      subject: 'Contact form: ' + (data.subject || '(no subject)'),
      body:
        'New message from the website contact form:\n\n' +
        'Name:    ' + (data.name || '') + '\n' +
        'Email:   ' + (data.email || '') + '\n' +
        'Company: ' + (data.company || '') + '\n' +
        'Subject: ' + (data.subject || '') + '\n\n' +
        (data.message || ''),
    };
    // So a "Reply" from sales goes straight to the customer, not to this script.
    if (data.email) {
      options.replyTo = data.email;
    }
    MailApp.sendEmail(options);
  }
  return jsonOut({ ok: true });
}

function getOrCreateSheet(name, header) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(header);
  }
  return sheet;
}

function jsonOut(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// Lets you sanity-check the deployment: open the Web app URL in a browser.
function doGet() {
  return ContentService.createTextOutput('Deep Material logger is live.');
}
