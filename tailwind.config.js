import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: "#1B0140",
          secondary: "#6CD9D9",
          background:"#53A6A6"
        }
      },
      dark: {
        colors: {
          primary: "#53A6A6",
          secondary: "#6CD9D9",
          background: "#1B0140"
        }
      },
    },
  })],
}
