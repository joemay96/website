/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		//emerald, halloween ?
		themes: ["retro", "forest", "coffe", "garden", "emerald", "halloween"],
		darkTheme: "forest",
		lightTheme: "retro",
	},
};
