const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        helvetica: "Helvetica, Arial, sans-serif",
      },
    },
  },
  plugins: [],
};
