// 301 redirects
export async function handle({ event, resolve }) {
	if (event.url.pathname === '/interactive') {
		return new Response(null, {
			status: 301,
			headers: { location: '/quiz' }
		});
	}
	if (event.url.pathname === '/about') {
		return new Response(null, {
			status: 301,
			headers: { location: '/' }
		});
	}
	return resolve(event);
}
