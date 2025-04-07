export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        fondo: '#01443a',
        verdeTransparente: 'rgba(143, 194, 159, 0.4)',
      },
    },
  },
  plugins: [],
};
