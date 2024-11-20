import type { Config } from "tailwindcss";

import flowbitePlugin from "flowbite/plugin";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#003F62",
        secondary: "#EDA415",
      },
    },
  },
  plugins: [flowbitePlugin],
} satisfies Config;
