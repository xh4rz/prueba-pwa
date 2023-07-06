const withPWA = require('next-pwa');

module.exports = withPWA({
	reactStrictMode: true,
	pwa: {
		dest: 'public',
		register: true,
		skipWaiting: true,
		disable: process.env.NODE_ENV === 'development'
	},
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					// {
					// 	key: 'Content-Security-Policy',
					// 	value: "default-src 'none';"
					// },
					{
						key: 'X-Frame-Options',
						value: 'SAMEORIGIN'
					}
				]
			}
		];
	}
});
