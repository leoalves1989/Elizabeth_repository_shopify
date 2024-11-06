/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    // Aqui eu preciso colocar quais arquivos o tailwind dele olhar para escanear.

    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/customers/*.liquid',
    './templates/*.liquid'


  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

