import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(301, 'https://donate.stripe.com/aEU6pH82vd2M1aM9AA');
}
