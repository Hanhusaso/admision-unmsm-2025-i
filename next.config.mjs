/** @type {import('next').NextConfig} */
const nextConfig = {
	distDir: 'admision-2025-i',
	output: 'standalone',
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.ytimg.com',
			},
			{
				protocol: 'https',
				hostname: 'd20cra10nhu74a.cloudfront.net',
			},
		],
	},
};

export default nextConfig;
