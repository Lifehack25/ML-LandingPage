import { error } from '@sveltejs/kit';
import Stripe from 'stripe';
import { env } from '$env/dynamic/private';
import { addContactToSendGrid, sendWelcomeEmail } from '$lib/server/sendgrid';
import type { PageServerLoad } from './$types';

const STRIPE_SECRET_KEY = env.STRIPE_SECRET_KEY;

const stripe = STRIPE_SECRET_KEY ? new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: '2025-01-27.acacia',
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

        // 2. Add to SendGrid (Reservation Type)
        // We do this here to ensure it only happens after payment
        try {
            await addContactToSendGrid(email, 'reservation');
            await sendWelcomeEmail(email, 'reservation');
        } catch (sgError) {
            console.error("SendGrid processing failed despite payment success:", sgError);
            // We still return success to the user because they PAID. 
            // We should ideally have a robust retry queue, but for this task,
            // logging the error is the minimum.
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
