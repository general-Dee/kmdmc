module.exports = {
  mode: "jit",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradiant-to-b":
      //   "linear-gradient(to bottom, rgba(20,20,20,0) 5%, rgba(20,20,20,.5) 15%, rgba(20,20,20,.35) 29%, rgba(20,20,20,.58) 44%, #141414 68%, #141414 100%);",
      // },
      // textShadow: {
      //   md: '2px 2px 4px rgb(0 0 0 / 45%);',
      // },
      // backgroundImage: {
      //   'gradient-to-b':
      //     'linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);',
      // },
    },
  },
  variants: {
    extends: {
      backgroundColor: ['checked'],
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-textshadow'),
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar')
  ],
}
