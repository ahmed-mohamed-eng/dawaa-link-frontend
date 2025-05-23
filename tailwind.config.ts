import type { Config } from "tailwindcss";

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
      fontFamily: { 
        poppins: ["poppins", "mono", "ui-sans-serif"],
        alexandria: ["alexandria", "sans-serif"],
        handcrafts: ["var(--font-handcrafts)", "cursive"],
        // effraArabic: ["var(--font-effra-arabic)", "alexandria", "sans-serif"]
      },
    },
  },
  plugins: [
    function({ addComponents, theme }: { addComponents: Function; theme: Function }) {
      addComponents({
        '[dir="rtl"] h1, [dir="rtl"] h2, [dir="rtl"] h3, [dir="rtl"] h4, [dir="rtl"] h5, [dir="rtl"] h6': {
          fontFamily: theme('fontFamily.handcrafts')
        },
        // '[dir="rtl"] p, [dir="rtl"] span, [dir="rtl"] div': {
        //   fontFamily: theme('fontFamily.effraArabic')
        // },
      });
    },
  ],
} satisfies Config;
