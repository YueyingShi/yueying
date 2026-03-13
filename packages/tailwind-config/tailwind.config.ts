import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "../../apps/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000", // Define your personal brand colors here
      },
    },
  },
  plugins: [],
};
export default config;