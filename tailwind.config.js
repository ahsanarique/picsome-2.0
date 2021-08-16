module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "#150605",
        red: "#ea453c",
        pink: "#f47b6e",
        lightBlue: "#effbfe",
        blue: "#ace6ec",
      },
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        raleway: ['"Raleway"', "sans-serif"],
      },
      boxShadow: {
        fullPage: "0 0 0 100vh rgba(0,0,0,0.5)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
