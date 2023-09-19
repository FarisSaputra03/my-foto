import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],

  theme: {
    colors: {
      ungu: "#732C80",
      dary: "#FF9C99",
      tertiary: "#FDE356 ",
      kuning: "#FDE356",
      merah: "#FF0000",
      ning: "#F9E555",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },

  plugins: [require("flowbite/plugin"), require("daisyui")],
  daisyui: {
    themes: false,
  },
};
export default config;
