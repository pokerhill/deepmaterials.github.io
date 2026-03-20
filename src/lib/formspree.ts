// EmailJS integration for download notifications
// Setup: https://www.emailjs.com/
// 1. Create a free account
// 2. Add an email service (Gmail, Outlook, etc.) → copy the Service ID
// 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{product}}, {{timestamp}}, {{message}}
//    Set the template's "To Email" to pokharna@deep-materials.com
// 4. Copy your Public Key from Account > General
// 5. Replace the three IDs below

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

const EMAILJS_API = 'https://api.emailjs.com/api/v1.0/email/send';

interface DownloadNotification {
  readonly name: string;
  readonly email: string;
  readonly product: string;
  readonly timestamp: string;
}

export async function sendDownloadNotification(
  data: DownloadNotification
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(EMAILJS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        template_params: {
          from_name: data.name,
          from_email: data.email,
          product: data.product,
          timestamp: data.timestamp,
          message: `${data.name} (${data.email}) downloaded the datasheet for ${data.product} on ${data.timestamp}.`,
        },
      }),
    });

    if (!response.ok) {
      return { success: false, error: 'Failed to send notification.' };
    }

    return { success: true };
  } catch {
    return { success: false, error: 'Network error.' };
  }
}
