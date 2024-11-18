const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      colors: {
        blue: '#0d6efd',
        blue: {
          5: "#EAF5FF",
          25: "#B4DAEC",
          50: "#7EC0D9",
          100: "#47A5C5",
          200: "#118AB2",
          300: "#0F7A9D",
          400: "#0C6A87",
          500: "#0A5A72",
          600: "#074B5D",
          700: "#053B48",
          800: "#022B32",
          900: "#001B1D",
        },
        indigo: '#6610f2',
        purple: '#6f42c1',
        pink: '#d63384',
        red: '#dc3545',
        red: {
          5: "#FFE5E5",
          25: "#FFB3B3",
          50: "#FF7F7F",
          100: "#FF4C4C",
          200: "#FF0000",
          300: "#DB0000",
          400: "#B70000",
          500: "#A00000",
          600: "#8A0000",
          700: "#740000",
          800: "#5E0000",
          900: "#480000",
        },
        orange: '#fd7e14',
        yellow: '#ffc107',
        yellow: {
          5: "#FFF970",
          25: "#FFE83D",
          50: "#FFD60A",
          100: "#E7C009",
          200: "#CFAB08",
          300: "#B69507",
          400: "#9E8006",
          500: "#866A04",
          600: "#6E5503",
          700: "#553F02",
          800: "#3D2A01",
          900: "#251400",
        },
        green: '#198754',
        teal: '#20c997',
        cyan: '#0dcaf0',
        black: '#000',
        white: '#fff',
        gray: {
          DEFAULT: '#6c757d',
          100: '#f8f9fa',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
        primary: '#0d6efd',
        secondary: '#6c757d',
        success: '#198754',
        info: '#0dcaf0',
        warning: '#ffc107',
        danger: '#dc3545',
        light: '#f8f9fa',
        dark: '#212529',
        'btn-bg': '#212529',
        'btn-hover-bg': '#424649',
        'btn-active-bg': '#4d5154',
        'btn-disabled-bg': '#212529',
        'btn-color': '#fff',
        'btn-hover-color': '#fff',
        'btn-active-color': '#fff',
        'btn-disabled-color': '#fff',
        'btn-border-color': '#212529',
        'btn-hover-border-color': '#373b3e',
        'btn-active-border-color': '#373b3e',
        'btn-disabled-border-color': '#212529',
        'btn-active-shadow': 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',

        richblack: {
          5: "#F1F2FF",
          25: "#DBDDEA",
          50: "#C5C7D4",
          100: "#AFB2BF",
          200: "#999DAA",
          300: "#838894",
          400: "#6E727F",
          500: "#585D69",
          600: "#424854",
          700: "#2C333F",
          800: "#161D29",
          900: "#000814",
        },
        richblue: {
          5: "#ECF5FF",
          25: "#C6D6E1",
          50: "#A0B7C3",
          100: "#7A98A6",
          200: "#537988",
          300: "#2D5A6A",
          400: "#073B4C",
          500: "#063544",
          600: "#042E3B",
          700: "#032833",
          800: "#01212A",
          900: "#001B22",
        },
        pink: {
          5: "#FFF1F1",
          25: "#FBC7D1",
          50: "#F79CB0",
          100: "#F37290",
          200: "#EF476F",
          300: "#D43D63",
          400: "#BA3356",
          500: "#9F294A",
          600: "#841E3E",
          700: "#691432",
          800: "#4F0A25",
          900: "#340019",
        },
      },
      fontFamily: {
        'source-sans': ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [addVariablesForColors],
}
// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  const colors = theme('colors');
  const newVars = Object.entries(colors).reduce((acc, [key, value]) => {
    if (typeof value === 'string') {
      acc[`--${key}`] = value;
    } else if (typeof value === 'object') {
      Object.entries(value).forEach(([shade, shadeValue]) => {
        acc[`--${key}-${shade}`] = shadeValue;
      });
    }
    return acc;
  }, {});

  addBase({
    ':root': newVars,
  });
}