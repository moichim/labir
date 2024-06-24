const { nextui } = require('@nextui-org/react');
const path = require( "node:path" );

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
      './components/**/*.{js,jsx,ts,tsx,md,mdx}',
      path.resolve( "../../node_modules/@labir/tailwind/**/*.{js,jsx,tsx,md,mdx}" ),
      path.resolve( "../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}" ),
   
      // Or if using `src` directory:
      './src/**/*.{js,jsx,ts,tsx,md,mdx}'
    ],
    theme: {
      extend: {}
    },
    plugins: [
        nextui()
    ],
    // important: "#__next",
  }