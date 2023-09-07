/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */


module.exports = {
  content: ['./src/**/*.{html,js}', '.public/**/*.{html}'],
  theme: {
    colors: {
      darkOrange: '#872e01',
      white: '#ffffff',
      blue: '#003180',
      black: '#000000',
      darkblue: '#041e47',
      softpurple: '#b566fa',
      mediumpurple: '#602791',
      orangeCardBg: '#f79845',
      mainPurple: '#291064',
      darkpurple: '#2e0157',
      orangeIndexBg: '#b05d3f',
      pink: '#ff49db',
      orange: '#ff7849',
      violet: '#5c1156',
      darkorange: '#e64007',
      green: '#13ce66',
      yellow: '#ffc82c',
      grayDark: '#273444',
      gray: '#8492a6',
      grayLight: '#e1e9f2',
      darkTheme: '#27282b',
      red: '#d91818'
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
        'desktop': '50rem',
        'mobile': '52rem',
      },
    },
  },
};

