/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/**/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        fieldError: '#9f3a38',
        primaryRed: '#d73035',
        primaryDarkRed: '#8a1114',
        primaryLightRed: '#ffabad',
        primaryText: '#333333',
        primaryGray: '#666666',
        primaryT: '#999999',
        primaryGrayLight: '#cccccc',
        primaryWhiteLight: '#f2f2f2',
        primaryWhite: '#ffffff',
      },
    },
  },
  plugins: [
    require('tailwindcss-radix')({
      // Default: `radix`
      variantPrefix: 'rdx',
    }),
  ],
}
