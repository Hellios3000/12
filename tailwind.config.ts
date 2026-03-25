import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f4f8",
          100: "#d1dae5",
          500: "#1a365d",
          600: "#152c4a",
          700: "#0f1f34",
          800: "#0a1422",
          900: "#050a11",
        },
        gold: {
          500: "#c5a059",
          600: "#b08e4d",
        }
      },
    },
  },
  plugins: [],
};
export default config;