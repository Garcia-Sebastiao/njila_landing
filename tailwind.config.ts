import { Pallette } from "@/utils/pallette";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orangeFruit: "#FC9C01",
        textColor: "#213745",
        purpleColor: "#662ABC",
        blueOcean: "#1883E9",
      },
    },
  },
  plugins: [],
};
export default config;
