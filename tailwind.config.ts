import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        'international-klein-blue': {
          'base-300': '#ebf5ff',
          'base-200': '#dbebff',
          'base-100': '#bfd9ff',
          'neutral-content': '#98beff',
          'neutral': '#6f97ff',
          'accent-content': '#4d71ff',
          'accent': '#2e49fd',
          'secondary-content': '#2237e0',
          'secondary': '#1e30b3',
          'primary-content': '#21318e',
          'primary': '#141b52',
        },

        'indigo': {
          'base-300': '#f0f5fd',
          'base-200': '#e4edfb',
          'base-100': '#cdddf8',
          'neutral-content': '#afc5f2',
          'neutral': '#8fa5ea',
          'accent-content': '#7487e0',
          'accent': '#6671d6',
          'secondary-content': '#4951b9',
          'secondary': '#3d4596',
          'primary-content': '#384077',
          'primary': '#212545',
        },
        'tangerine': {
          'base-300': '#fff9ed',
          'base-200': '#fff2d5',
          'base-100': '#fee1aa',
          'neutral-content': '#fecb73',
          'neutral': '#fcaa3b',
          'accent-content': '#fa8a0a',
          'accent': '#eb740b',
          'secondary-content': '#c3580b',
          'secondary': '#9b4511',
          'primary-content': '#7d3a11',
          'primary': '#431b07',
        },

        'lochmara': {
          'base-300': '#f1f8fe', //50
          'base-200': '#e1effd', //100
          'base-100': '#bcdefb', //200
          'neutral-content': '#81c4f8', //300
          'neutral': '#3fa6f1', //400
          'accent-content': '#168be1', //500
          'accent': '#0a7ad6', //600
          'secondary-content': '#09579b', //700
          'secondary': '#0b4b81', //800
          'primary-content': '#0f3f6b', //900
          'primary': '#0a2847', //950
          'black': '#000000', //000
        },
        'lavender': {
          'base-300': '#faf6fe',
          'base-200': '#f2ebfc',
          'base-100': '#e8dafa',
          'neutral-content': '#d6bef4',
          'neutral': '#b385ea',
          'accent-content': '#a26ae2',
          'accent': '#8c4bd2',
          'secondary-content': '#7638b8',
          'secondary': '#643297',
          'primary-content': '#522a79',
          'primary': '#371358',
        },
        'lilac-bush': {
          'base-300': '#faf7fd',
          'base-200': '#f2ecfb',
          'base-100': '#e7dbf9',
          'neutral-content': '#d5bff3',
          'neutral': '#bb96ea',
          'accent-content': '#a372df',
          'accent': '#8a4fce',
          'secondary-content': '#743cb4',
          'secondary': '#633693',
          'primary-content': '#512c77',
          'primary': '#351556',
        },
        'domino': {
          'base-300': '#f6f5f0',
          'base-200': '#e9e4d8',
          'base-100': '#d5c9b3',
          'neutral-content': '#bda887',
          'neutral': '#aa8b65',
          'accent-content': '#997856',
          'accent': '#856349',
          'secondary-content': '#6b4d3d',
          'secondary': '#5b4238',
          'primary-content': '#503a33',
          'primary': '#2d1f1b',
        },
        'conifer': {
          'base-300': '#f4fbea',
          'base-200': '#e6f5d2',
          'base-100': '#ceeda9',
          'neutral-content': '#aedf77',
          'neutral': '#9bd35f',
          'accent-content': '#71b32f',
          'accent': '#568f21',
          'secondary-content': '#436d1e',
          'secondary': '#38571d',
          'primary-content': '#304a1d',
          'primary': '#17280b',
        },

      },
    ],
  },
};
export default config;
