/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		//emerald, halloween ?
		themes: ["dark", "retro", "forest", "coffe", "garden", "corporate", "emerald", "halloween", "dracula", "business", "night"],
		darkTheme: "forest",
		lightTheme: "retro",
	},
};
