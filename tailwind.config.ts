import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },
      colors: {
        brand: {
          standard: '#185ADB',
          light: '#EDF2FC',
        },
        text: {
          neuteral: '#0C0D0D',
        },
        gray: {
          DEFAULT: '#D6DBE3',
          light: '#F5F6F8'
        },
        border: {
          neuteral: '#CED3DD'
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
