/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: '#36D1AA',
        blackCustom: '#343131',
        blackPure: '#1E201E',
        brick: '#CC4831',
      },
      screens: {
        'xmd': '960px',
        'xsm': '720px',
        'xs': '450px',
        'xxs': '370px',
      },

      fontFamily: {
        poppins: 'Poppins',
        kanit: 'Kanit',
        satisfy: 'Satisfy',
      },
      animation: {
        slide: "slide 20s linear infinite",
        'bounce-in-down': 'bounceInDown 0.5s ease-out',
        'bounce-out-up': 'bounceOutUp 0.5s ease-in'
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        bounceInDown: {
          '0%': {
            opacity: '0',
            transform: 'scaleY(0.3) translateY(-50px)'
          },
          '60%': {
            opacity: '0.8',
            transform: 'scaleY(1.1) translateY(10px)'
          },
          '75%': {
            opacity: '0.9',
            transform: 'scaleY(0.9) translateY(-5px)'
          },
          '100%': {
            opacity: '1',
            transform: 'scaleY(1) translateY(0)'
          },
        },
        bounceOutUp: {
          '0%': {
            opacity: '1',
            transform: 'scaleY(1) translateY(0)'
          },
          '40%': {
            opacity: '0.7',
            transform: 'scaleY(1.1) translateY(-10px)'
          },
          '75%': {
            opacity: '0.3',
            transform: 'scaleY(0.9) translateY(20px)'
          },
          '100%': {
            opacity: '0',
            transform: 'scaleY(0.3) translateY(-50px)'
          }
        }
      }
    },
  },
  plugins: [],
}
