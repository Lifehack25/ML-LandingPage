import { env } from '$env/dynamic/private';

// Placeholder constants as requested by the user
const SENDGRID_API_KEY = env.SENDGRID_API_KEY || 'PLACEHOLDER_KEY';
const SENDGRID_STANDARD_TEMPLATE_ID = env.SENDGRID_STANDARD_TEMPLATE_ID || 'd-placeholder-standard';
const SENDGRID_RESERVATION_TEMPLATE_ID = env.SENDGRID_RESERVATION_TEMPLATE_ID || 'd-placeholder-reservation';
const SENDGRID_FROM_EMAIL = 'hello@memorylocks.com'; // Change this if you have a specific sender

// Types
export type SignupType = 'standard' | 'reservation';

/**
 * Adds a contact to SendGrid Marketing Contacts
 */
export async function addContactToSendGrid(email: string, type: SignupType) {
    if (SENDGRID_API_KEY.includes('PLACEHOLDER')) {
        console.log(`[MOCK] Adding ${email} to SendGrid as ${type}`);
        return;
    }

    const url = 'https://api.sendgrid.com/v3/marketing/contacts';

    // You might want to have different lists for different types, 
    // but for now we'll just add them as contacts with a custom field or similar if needed.
    // The user requirement said: "visitors email and their type of signup gets stored"
    // We can store the type in a custom field if one exists, or just dump them in.
    // For simplicity and robustness without knowing the user's field IDs, 
    // we will just add the contact. If the user provided specific List IDs, we'd use them.

    const data = {
        contacts: [
            {
                email: email,
                custom_fields: {
                    // specific custom fields would go here if we had their IDs.
                    // e.g. w1_T: type
                }
            }
        ]
    };

    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${SENDGRID_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error('SendGrid Add Contact Error:', errorText);
        throw new Error('Failed to add contact to SendGrid');
    }
}

/**
 * Sends a transactional welcome email using a dynamic template
 */
export async function sendWelcomeEmail(email: string, type: SignupType) {
    if (SENDGRID_API_KEY.includes('PLACEHOLDER')) {
        console.log(`[MOCK] Sending ${type} welcome email to ${email}`);
        return;
    }

    const templateId =
        type === 'reservation' ? SENDGRID_RESERVATION_TEMPLATE_ID : SENDGRID_STANDARD_TEMPLATE_ID;

    const url = 'https://api.sendgrid.com/v3/mail/send';

    const data = {
        personalizations: [
            {
                to: [{ email: email }],
                dynamic_template_data: {
                    // Add any dynamic data here if needed
                    email: email,
                    type: type
                }
            }
        ],
        from: { email: SENDGRID_FROM_EMAIL },
        template_id: templateId
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${SENDGRID_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error('SendGrid Send Email Error:', errorText);
        throw new Error('Failed to send email via SendGrid');
    }
}
