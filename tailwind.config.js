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
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#4A4A4A', // Texto gris oscuro para mejor contraste
            h1: {
              color: '#333333', // Encabezado más oscuro pero amigable
            },
            h2: {
              color: '#555555', // Subtítulos en gris medio
            },
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {
        disabledOpacity: "0.3",
        radius: {
          small: "4px",
          medium: "6px",
          large: "8px",
        },
        borderWidth: {
          small: "1px",
          medium: "1px",
          large: "1px",
        },
      },
      themes: {
        light: {
          colors: {
            primary: "#FF6F61", // Un coral suave, alegre y cálido
            secondary: "#FFB74D", // Naranja cálido para detalles
            background: "#FFF8E1", // Amarillo pálido, cálido y agradable
            accent: "#4DB6AC", // Verde agua para contrastar de forma amigable
            text: "#374151", // Gris oscuro para un buen contraste de texto
          }
        },
        dark: {
          colors: {
            primary: "#81E6D9", // Verde agua suave
            secondary: "#D6BCFA", // Morado claro
            background: "#1A202C", // Gris oscuro
            accent: "#F6AD55", // Naranja suave
            text: "#E2E8F0", // Gris claro
          }
        },
      },
    }),
  ],
}
