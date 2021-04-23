module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "2rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
