/** @type {import('tailwindcss').Config} */
module.exports = {
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
      height: {
        '150p': '150%',
        '180p': '180%',
        '200p': '200%',
        '400p': '400%',
      },
      keyframes: {
        rotateAnimation: {
          '0%': { transform: 'rotate(55deg)' },
          '25%': { transform: 'rotate(35deg)' },
          '50%': { transform: 'rotate(50deg)' },
          '75%': { transform: 'rotate(40deg)' },
          '100%': { transform: 'rotate(45deg)' },
        },
      },
      animation: {
        rotateAnimation: 'rotateAnimation 1s forwards',
      },
    },
  },
  plugins: [],
};
