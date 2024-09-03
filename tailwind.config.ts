import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // define frequently used colors here
        "light-gray": "#E9E9E9",
        "light-gray-1": "#7B7B7B",
        "light-red-1": "#F9EAEB",
        "light-red-2": "#EE232F",
        "light-red-3": "#EC232B",
        "dark-gray": "#333333",
        "dark-gray-1": "#242223",
        "dark-gray-2": "#262626",
        "dark-gray-3": "#A2A1A833",
        "dark-gray-4": "#A2A1A81A",
        "dark-gray-5": "#A2A1A8",
        "dark-blue-1": "#16151C",
      },
      dropShadow: {
        sm: "1px 1px 3px 0px #CACACA26",
      },
      keyframes: {
        "enter-t": {
          "0%": { transform: "translateY(-100%)", opacity: "0.5" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "enter-b": {
          "0%": { transform: "translateY(100%)", opacity: "0.5" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [
    function ({ addBase }: PluginAPI) {
      addBase({
        label: { display: "block" },
        input: { display: "block", width: "100%" },
      });
    },
  ],
  safelist: [
    "light-gray",
    "light-gray-1",
    "light-red-1",
    "light-red-2",
    "light-red-3",
    "dark-gray",
    "dark-gray-1",
    "dark-gray-2",
    "dark-gray-3",
    "dark-gray-4",
    "dark-gray-5",
    "dark-blue-1",
  ],
};
export default config;
