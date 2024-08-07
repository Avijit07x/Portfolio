/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				port: "",
				pathname: "/**",
			},
		],
	},
	async headers() {
		return [
			{
				source: "/api/:path*",
				headers: [
					{
						key: "Access-Control-Allow-Origin",
						value: process.env.NEXT_PUBLIC_BASE_URL, // <-- location the request will be allowed to be sent from
					},
					{
						key: "Access-Control-Allow-Methods",
						value: "GET,POST,PUT,DELETE,OPTIONS",
					},
					{
						key: "Access-Control-Allow-Headers",
						value: "X-Requested-With, Content-Type, Authorization",
					},
				],
			},
		];
	},
};

export default nextConfig;
