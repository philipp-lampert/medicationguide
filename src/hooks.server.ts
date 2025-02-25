// Redirect /interactive to /quiz
export async function handle({ event, resolve }) {
	if (event.url.pathname === '/interactive') {
		return new Response(null, {
			status: 301,
			headers: { location: '/quiz' }
		});
	}

	return resolve(event);
}
