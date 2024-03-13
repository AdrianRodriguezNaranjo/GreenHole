/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'air-force': '#658E9C',
        'logo-color':'#015958',
        'mindaro':'#C3E991',
        'burnt-orche':'#BB4F35',
        'sunglow':'#FFB419',
        'dark-gray':'#484848',
        'light-gray':'#DDDDDD',
        'medium-gray': '#999999',
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Source Sans 3', 'serif'],
    },
  },
  plugins: [],
},
}
