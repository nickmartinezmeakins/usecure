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
          light: '#F5F6F8',
          lightest: '#EBEDF1',
          dark: '#A0AABE'
        },
        green: {
          DEFAULT: '#B4DDC9',
          light: '#ECF6F1',
          dark: '#0C7D44'
        },
        blue: {
          DEFAULT: '#1550C2'
        },
        red: {
          lightest: '#F7C1BC',
          light: '#FDEFEE',
          DEFAULT: '#CC2414'
        },
        orange: {
          lightest: '#EFD2B1',
          light: '#FBF4EB',
          DEFAULT: '#BA5C00'
        },
        border: {
          neuteral: '#CED3DD',
          dark: '#A7B0C3',
        }
      },
      backgroundImage: {
        'correct': "url('/correct.svg')",
        'incorrect': "url('/incorrect.svg')",
        'info': "url('/info.svg')",
        'grid': "url('/background.svg')",
      }
    },
  },
  plugins: [],
} satisfies Config;
