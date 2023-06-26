/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}",  './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
      },
      keyframes: {
        cell_kf: {
          "0%, 100%": {
            transform: 'rotate(12deg)',
          },
          "50%": {
            transform: 'rotate(-12deg)'
          }
        },
        slideIn:{
          '0%':  { transform: 'translateX(-100%)' },
          "100%": { transform: 'translateX(0)' }
        },
        slideOut: {
      '0%': { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(-100%)' },
    },
      },
      animation: {
        cell: 'cell_kf 2.50s ease-in-out infinite',
        'slide-in': 'slideIn 0.5s ease-out',
        'slide-out': 'slideOut 0.5s ease-out',
      },
    },
  },
  darkMode: "class",
}

