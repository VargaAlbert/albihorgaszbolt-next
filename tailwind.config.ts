import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
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
        primary: {
        "50":"rgb(253 242 248)",
        "100":"rgb(252 231 243)",
        "200":"rgb(251 207 232)",
        "300":"rgb(249 168 212)",
        "400":"rgb(244 114 182)",
        "500":"rgb(236 72 153)",
        "600":"rgb(219 39 119)",
        "700":"rgb(190 24 93)",
        "800":"rgb(157 23 77)",
        "900":"rgb(131 24 67)",
        "950":"rgb(80 7 36)"
        },
        text: {
          "primary": "rgb(255, 255, 255)",
          "secondary": "rgb(102, 102, 102);",
        },
        background: {
          "primary": "rgb(0, 0, 0)",
          "secondary": "rgb(39, 39, 39)",
        }
      }
    },
  },
  plugins: [],
};
export default config;
