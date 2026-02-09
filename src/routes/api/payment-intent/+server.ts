import { json, error } from '@sveltejs/kit';
import Stripe from 'stripe';
import { env } from '$env/dynamic/private';
import type { RequestHandler } from './$types';

const STRIPE_SECRET_KEY = env.STRIPE_SECRET_KEY;

const stripe = STRIPE_SECRET_KEY ? new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: '2025-11-17.clover' as any,
    httpClient: Stripe.createFetchHttpClient(),
}) : null;

/**
 * POST /api/payment-intent
 * 
 * Creates a Stripe PaymentIntent for the reservation flow.
 * Calculates the amount (hardcoded to €1.00 for now) and sets up metadata.
 * 
 * @param request - Contains the user's email in the JSON body.
 * @returns JSON response with the clientSecret.
 */
export const POST: RequestHandler = async ({ request }) => {
    if (!stripe) {
        console.error('Stripe Secret Key is missing');
        return error(500, 'Payment configuration error');
    }

    try {
        const { email } = await request.json();

        if (!email) {
            return error(400, 'Email is required');
        }

        // Create a PaymentIntent with the order amount and currency
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 100, // 1.00 EUR
            currency: 'eur',
            receipt_email: email,
            automatic_payment_methods: {
                enabled: true,
            },
            metadata: {
                integration_check: 'accept_a_payment',
                signup_type: 'reservation'
            },
        });

        return json({
            clientSecret: paymentIntent.client_secret,
        });

    } catch (err: any) {
        console.error('Payment Intent Error:', err);
        return error(500, `Internal Server Error: ${err.message}`);
    }
};
