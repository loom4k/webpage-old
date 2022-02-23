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
				destination: "https://discord.gg/y4a5CwPHNE",
				permanent: true,
			},
			{
				source: "/fiverr",
				destination: "https://www.fiverr.com/lokmallat/code-a-custom-minecraft-plugin",
				permanent: true,
			},
		];
	},
	future: {
		webpack5: true,
	},
});
