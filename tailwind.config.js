module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        header: {
          bg: '#f8fafc',
          border: '#d1d5db',
        },
        timer: {
          bg: '#eef2ff',
          text: '#1e40af',
        },
      },
    },
    fontFamily: {
      sans : ['Roboto', 'sans-serif'],
      mainText: ['Crimson Text', 'sans-serif']
    },
  },
  plugins: [],
};
