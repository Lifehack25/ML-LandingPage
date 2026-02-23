import { json, error } from '@sveltejs/kit';
import Stripe from 'stripe';
import { env } from '$env/dynamic/private';
import { addSubscriber } from '$lib/server/mailerlite';
import type { RequestHandler } from './$types';

// Constants
const STRIPE_SECRET_KEY = env.STRIPE_SECRET_KEY;
const STRIPE_PRODUCT_ID = 'prod_SdBiU33uojWUVb'; // User provided
const STANDARD_GROUP_ID = '158904110692697978';

// Initialize Stripe
// Note: We use a lazy initialization or a check to prevent errors at build time if env is missing
const stripe = STRIPE_SECRET_KEY
	? new Stripe(STRIPE_SECRET_KEY, {
			apiVersion: '2025-11-17.clover' as any, // Verify type match
			httpClient: Stripe.createFetchHttpClient() // Important for Edge/Workers
		})
	: null;

/**
 * POST /api/signup
 *
 * Handles user signups for both the standard waitlist and the reservation flow.
 * - 'standard': Adds user to MailerLite standard group.
 * - 'reservation': Creates a Stripe Checkout Session for payment.
 *
 * @param request - JSON body containing 'email' and 'type'.
 * @returns JSON response indicating success/failure or providing a redirect URL.
 */
export const POST: RequestHandler = async ({ request, url }) => {
	try {
		const { email, type, turnstileToken } = await request.json();

		if (!email || !type) {
			return json(
				{ success: false, message: 'Email and signup type are required.' },
				{ status: 400 }
			);
		}

		// Basic Email Validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return json(
				{ success: false, message: 'Please enter a valid email address.' },
				{ status: 400 }
			);
		}

		if (type === 'standard') {
			if (!turnstileToken) {
				return json(
					{ success: false, message: 'Turnstile verification is required.' },
					{ status: 400 }
				);
			}

			// Verify Turnstile Token
			const turnstileSecret = env.TURNSTILE_SECRET_KEY;

			if (!turnstileSecret) {
				console.error('Turnstile Secret Key is missing');
				return json({ success: false, message: 'Server configuration error.' }, { status: 500 });
			}

			const turnstileFormData = new FormData();
			turnstileFormData.append('secret', turnstileSecret);
			turnstileFormData.append('response', turnstileToken);

			try {
				const turnstileRes = await fetch(
					'https://challenges.cloudflare.com/turnstile/v0/siteverify',
					{
						method: 'POST',
						body: turnstileFormData
					}
				);
				const turnstileData = await turnstileRes.json();
				if (!turnstileData.success) {
					console.error('Turnstile verification failed:', turnstileData);
					return json(
						{ success: false, message: 'Security verification failed. Please try again.' },
						{ status: 403 }
					);
				}
			} catch (err) {
				console.error('Turnstile API connection error:', err);
				return json(
					{ success: false, message: 'Unable to connect to verification service.' },
					{ status: 502 }
				);
			}

			try {
				// 1. Add to MailerLite Standard Group
				await addSubscriber(email, STANDARD_GROUP_ID);
				return json({ success: true, message: 'Welcome to the club! Check your inbox soon.' });
			} catch (mlError: any) {
				console.error('MailerLite Integration Error:', mlError);
				// Return a generic error to the user, but log the specific one
				return json(
					{ success: false, message: 'We couldn’t sign you up right now. Please try again later.' },
					{ status: 503 }
				);
			}
		} else if (type === 'reservation') {
			if (!stripe) {
				console.error('Stripe Secret Key is missing');
				return json(
					{
						success: false,
						message: 'Payments are currently unavailable. Please try again later.'
					},
					{ status: 503 }
				);
			}

			try {
				// Create Stripe Checkout Session
				const session = await stripe.checkout.sessions.create({
					payment_method_types: ['card'],
					line_items: [
						{
							price_data: {
								currency: 'eur',
								product: STRIPE_PRODUCT_ID,
								unit_amount: 100 // 1.00 EUR in cents
							},
							quantity: 1
						}
					],
					mode: 'payment',
					success_url: `${url.origin}/reserve-complete?session_id={CHECKOUT_SESSION_ID}&email=${encodeURIComponent(email)}`,
					cancel_url: `${url.origin}/#reserve-signup`,
					customer_email: email,
					metadata: {
						signup_type: 'reservation'
					}
				});

				if (!session.url) {
					throw new Error('Stripe session URL missing');
				}

				return json({ success: true, url: session.url });
			} catch (stripeError: any) {
				console.error('Stripe Integration Error:', stripeError);
				return json(
					{ success: false, message: 'Unable to start payment. Please try again.' },
					{ status: 502 }
				);
			}
		} else {
			return json({ success: false, message: 'Invalid signup type specified.' }, { status: 400 });
		}
	} catch (err: any) {
		console.error('Unexpected Signup API Error:', err);
		return json(
			{ success: false, message: 'An unexpected error occurred. Please refresh and try again.' },
			{ status: 500 }
		);
	}
};
