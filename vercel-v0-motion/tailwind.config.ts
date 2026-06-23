import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1c1917",
        paper: "#fbfaf7",
        wine: "#7f263d",
        gold: "#b9852f",
        teal: "#0f5d5e",
        rose: "#f7edf0",
        line: "#ded7cb"
      },
      boxShadow: {
        soft: "0 18px 46px rgba(28,25,23,0.12)"
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["Arial", "Helvetica", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
