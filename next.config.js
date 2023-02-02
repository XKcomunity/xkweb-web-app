const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		swcMinify: true,
	},

	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
};

module.exports = nextConfig;
