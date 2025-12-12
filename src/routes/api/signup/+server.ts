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
const stripe = STRIPE_SECRET_KEY ? new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: '2025-11-17.clover' as any, // Verify type match
    httpClient: Stripe.createFetchHttpClient(), // Important for Edge/Workers
}) : null;

export const POST: RequestHandler = async ({ request, url }) => {
    try {
        const { email, type } = await request.json();

        if (!email || !type) {
            return error(400, 'Email and type are required');
        }

        if (type === 'standard') {
            // 1. Add to MailerLite Standard Group
            await addSubscriber(email, STANDARD_GROUP_ID);

            return json({ success: true, message: 'Standard signup successful' });
        }

        else if (type === 'reservation') {
            if (!stripe) {
                console.error('Stripe Secret Key is missing');
                return error(500, 'Payment configuration error: STRIPE_SECRET_KEY is missing');
            }

            // Create Stripe Checkout Session
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: [
                    {
                        price_data: {
                            currency: 'eur',
                            product: STRIPE_PRODUCT_ID,
                            unit_amount: 100, // 1.00 EUR in cents
                        },
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                success_url: `${url.origin}/reserve-complete?session_id={CHECKOUT_SESSION_ID}&email=${encodeURIComponent(email)}`,
                cancel_url: `${url.origin}/#reserve-signup`,
                customer_email: email,
                metadata: {
                    signup_type: 'reservation',
                }
            });

            if (!session.url) {
                return error(500, 'Failed to create Stripe Checkout Session');
            }

            return json({ success: true, url: session.url });
        }

        else {
            return error(400, 'Invalid signup type');
        }
    } catch (err: any) {
        console.error('Signup API Error:', err);
        return error(500, `Internal Server Error: ${err.message || err}`);
    }
};
