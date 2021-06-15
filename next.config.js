/* eslint-disable */
const { withPlugins } = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([[optimizedImages, { optimizeImages: false }]], {
	cssModules: true,
	async redirects() {
		return [
			{
				source: "/github",
				destination: "https://github.com/loom4k",
				permanent: true,
			},
			{
				source: "/discord",
				destination: "https://discord.gg/9uUSJeK933",
				permanent: true,
			},
		];
	},
	future: {
		webpack5: true,
	},
});
