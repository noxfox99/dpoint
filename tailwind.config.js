module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // React source files
    "./public/index.html", // If Tailwind classes are used in your index.html
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
