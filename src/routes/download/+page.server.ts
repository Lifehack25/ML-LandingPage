import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const APP_STORE_URL = 'https://apps.apple.com/no/app/memory-locks/id6757601396';
const PLAY_STORE_URL = 'https://placeholder'; // swap when Google Play listing is live

export const load: PageServerLoad = async ({ request }) => {
	const ua = request.headers.get('user-agent') ?? '';

	if (/iPhone|iPad|iPod/i.test(ua)) {
		redirect(302, APP_STORE_URL);
	}

	if (/Android/i.test(ua)) {
		redirect(302, PLAY_STORE_URL);
	}

	return { appStoreUrl: APP_STORE_URL };
};
