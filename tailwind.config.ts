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
        "bright-gray": "#E9E9E9",
        "dark-gray": "#333333",
        "dark-gray-1": "#242223",
        "dark-gray-2": "#262626",
        "dark-gray-3": "#A2A1A833",
        "dark-gray-4": "#A2A1A81A",
      },
      dropShadow: {
        sm: "1px 1px 3px 0px #CACACA26",
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
};
export default config;
