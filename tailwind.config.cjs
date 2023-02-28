/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "900px",
      },
    },

    fontFamily: {
      poppins: ["Poppin"],
      magicretro: ["MagicRetro"],
    },

    backgroundImage: {
      main_pattern: "url('../../public/mainBackground.svg')",
    },

    screens: {
      sm: "400px",
      md: "668px",
      foo: "960px", // our new breakpoint
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
