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
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      
      },
    },
    fontFamily: {
      sans : ['Roboto', 'sans-serif'],
      mainText: ['Crimson Text', 'sans-serif']
    },
  },
  plugins: [],
};
