import posthog from 'posthog-js';
import { browser } from '$app/environment';

export const load = async () => {
	if (browser) {
		posthog.init('phc_oePQBY38qt4aW7IYU9HIAPgzWTKH8FiK23h052qDTHf', {
			api_host: 'https://eu.i.posthog.com',
			person_profiles: 'identified_only',
			persistence: 'memory',
			capture_pageview: false,
			capture_pageleave: false
		});
	}
	return;
};
