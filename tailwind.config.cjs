/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['Poppin'], magicretro: ['MagicRetro'],
    },
    backgroundImage: {
      'confirmationBackgroud': "url('/public/confirmation.svg')",
    },
  },
  plugins: [],
};
