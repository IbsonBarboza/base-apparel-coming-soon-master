/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Josefin: 'Josefin Sans, sans-serif',
      },

      colors: {
          DesaturatedRed: 'hsl(0, 36%, 70%)',
          SoftRed: 'hsl(0, 93%, 68%)',
          DarkGrayishRed: 'hsl(0, 6%, 24%)',
          LightBg: '#fff3f3',
          LeftBtn: '#f9b3b5',
          RightBtn: '#f29796',
          HoverBtn: '#f8cecf',
      },
    },
  },
  plugins: [],
}