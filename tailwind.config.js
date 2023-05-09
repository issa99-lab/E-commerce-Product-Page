/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '976px',
    },
    colors: {
      'orange': 'hsl(26, 100%, 55%)',
      'pale- orange': 'hsl(25, 100%, 94%)',
      'very-dark-blue': 'hsl(220, 13%, 13%)',
      'dark-grayish-blue': 'hsl(219, 9%, 45%)',
      'grayish-blue': 'hsl(220, 14%, 75%)',
      'light-grayish-blue': 'hsl(223, 64%, 98%)',
      'black': 'hsl(0, 0%, 0%)',
      'white': 'hsl(0, 0%, 100%)',
      'slate': ' rgb(203 213 225)'
    },
    fontFamily: {
      'sans-serif': ['Kumbh Sans'],
    },
    fontWeight: {
      regular: '400',
      bold: '700'
    },
    fontSize: {
      xxm: '0.625rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '2rem',
    },
  },
  plugins: [],
}

