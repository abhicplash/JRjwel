/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        dtopaz: ["Oswald", "sans-serif"],
        topaz: ["Micro 5", "sans-serif"]
      },
      backgroundImage: {
        // "home-Services_one": "url('/src/Assets/Images/04.jpg')",
        bannergold: "url('/src/Assets/Images/banner/bnr.jpg')",
        blackcurtain: "url('https://assets-global.website-files.com/5a9ee6416e90d20001b20038/6289f10918a3479222c3bdd0_gray-gradient.png')"
        // /src/Assets/Images/banner/bnr.jpg
      }
    }
  },
  plugins: []
};
