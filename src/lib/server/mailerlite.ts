import { env } from '$env/dynamic/private';

const MAILERLITE_API_TOKEN = env.MAILERLITE_API_TOKEN;
const MAILERLITE_API_URL = 'https://connect.mailerlite.com/api/subscribers';

/**
 * Adds a subscriber to MailerLite and assigns them to a specific group.
 *
 * @param email - The email address of the subscriber.
 * @param groupId - The ID of the MailerLite group to assign the subscriber to.
 * @returns The JSON response from the MailerLite API.
 * @throws Error if the API token is missing or if the request fails.
 */
export async function addSubscriber(email: string, groupId: string) {
	if (!MAILERLITE_API_TOKEN) {
		console.error('MAILERLITE_API_TOKEN is not set');
		throw new Error('Server configuration error: MAILERLITE_API_TOKEN is missing');
	}

	const data = {
		email: email,
		groups: [groupId]
	};

	const response = await fetch(MAILERLITE_API_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${MAILERLITE_API_TOKEN}`,
			Accept: 'application/json'
		},
		body: JSON.stringify(data)
	});

	if (!response.ok) {
		const errorText = await response.text();
		console.error('MailerLite API Error:', errorText);
		throw new Error(`Failed to add subscriber to MailerLite: ${response.statusText}`);
	}

	return await response.json();
}
