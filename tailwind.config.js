/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */



module.exports = {
  content: ['./src/**/*.{html,js}', '.public/**/*.{html}'],
  theme: {
    colors: {
      lightOrange: '#872e01',
      white: '#ffffff',
      blue: '#003180',
      black: '#000000',
      darkblue: '#041e47',
      softpurple: '#b566fa',
      mediumpurple: '#602791',
      maincolor: '#291064',
      darkpurple: '#2e0157',
      pink: '#ff49db',
      orange: '#ff7849',
      violet: '#5c1156',
      darkorange: '#e64007',
      green: '#13ce66',
      yellow: '#ffc82c',
      'gray-dark': '#273444',
      gray: '#8492a6',
      graylight: '#e1e9f2',
      'dark-theme-bg': '#27282b',
      'card-bg': '#3c1185'
    },
    extend: {
      fontFamily: {
        pacifico: "'Pacifico', serif",
        source: "'Source Sans Pro', serif",
        sanspro: "'Source Sans Pro', sans-serif",
        fredericka: "'Fredericka the Great', cursive",
        squada: " 'Squada One', cursive",
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      height: {
        'desktop': '26rem',
        'mobile': '52rem',
      },
    },
  },
};

