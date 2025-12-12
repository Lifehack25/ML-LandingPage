import { error } from '@sveltejs/kit';
import Stripe from 'stripe';
import { env } from '$env/dynamic/private';
import { addSubscriber } from '$lib/server/mailerlite';
import type { PageServerLoad } from './$types';

const STRIPE_SECRET_KEY = env.STRIPE_SECRET_KEY;
const VIP_GROUP_ID = '158995496381187854';

const stripe = STRIPE_SECRET_KEY ? new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: '2025-11-17.clover' as any,
    httpClient: Stripe.createFetchHttpClient(),
}) : null;

export const load: PageServerLoad = async ({ url }) => {
    const sessionId = url.searchParams.get('session_id');
    const emailParam = url.searchParams.get('email'); // Fallback/Check

    if (!sessionId) {
        return {
            status: 'error',
            message: 'Missing session ID'
        };
    }

    if (!stripe) {
        return {
            status: 'error',
            message: 'Server configuration error'
        };
    }

    try {
        // 1. Retrieve the session to verify payment status
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        if (session.payment_status !== 'paid') {
            return {
                status: 'error',
                message: 'Payment not completed'
            };
        }

        const email = session.customer_details?.email || emailParam; // Prefer stripe verified email

        if (!email) {
            return { status: 'error', message: 'No email found in session' };
        }

        // 2. Add to MailerLite (VIP/Reservation Group)
        try {
            await addSubscriber(email, VIP_GROUP_ID);
        } catch (mlError) {
            console.error("MailerLite processing failed despite payment success:", mlError);
            // We still return success to the user because they PAID. 
        }

        return {
            status: 'success',
            email: email,
            customerName: session.customer_details?.name
        };

    } catch (err) {
        console.error('Stripe Verification Error:', err);
        return {
            status: 'error',
            message: 'Failed to verify session'
        };
    }
};
