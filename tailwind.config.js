/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "var(--color-brand-50)",
          100: "var(--color-brand-100)",
          200: "var(--color-brand-200)",
          500: "var(--color-brand-500)",
          600: "var(--color-brand-600)",
          700: "var(--color-brand-700)",
          800: "var(--color-brand-800)",
          900: "var(--color-brand-900)",
        },
        grey: {
          0: "var(--color-grey-0)",
          50: "var(--color-grey-50)",
          100: "var(--color-grey-100)",
          200: "var(--color-grey-200)",
          300: "var(--color-grey-300)",
          400: "var(--color-grey-400)",
          500: "var(--color-grey-500)",
          600: "var(--color-grey-600)",
          700: "var(--color-grey-700)",
          800: "var(--color-grey-800)",
          900: "var(--color-grey-900)",
        },
        blue: { 100: "var(--color-blue-100)", 700: "var(--color-blue-700)" },
        green: { 100: "var(--color-green-100)", 700: "var(--color-green-700)" },
        yellow: { 100: "var(--color-yellow-100)", 700: "var(--color-yellow-700)" },
        silver: { 100: "var(--color-silver-100)", 700: "var(--color-silver-700)" },
        indigo: { 100: "var(--color-indigo-100)", 700: "var(--color-indigo-700)" },
        red: { 
          100: "var(--color-red-100)", 
          700: "var(--color-red-700)", 
          800: "var(--color-red-800)" 
        },
      },
      borderRadius: {
        tiny: "var(--border-radius-tiny)",
        sm: "var(--border-radius-sm)",
        md: "var(--border-radius-md)",
        lg: "var(--border-radius-lg)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        sono: ["Sono", "monospace"],
      },
    },
  },
  plugins: [],
};