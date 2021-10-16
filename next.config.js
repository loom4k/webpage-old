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
				source: "/twitch",
				destination: "https://twitch.tv/loom4k",
				permanent: true,
			},
			{
				source: "/discord",
				destination: "https://discord.gg/UEpXxAw8nP",
				permanent: true,
			},
			{
				source: "/exchange",
				destination: "https://discord.gg/9zj8sWsKzW",
				permanent: true,
			},
		];
	},
	future: {
		webpack5: true,
	},
});
