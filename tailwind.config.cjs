/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
          colors: {
              'monza': {
                  '50': '#fff0f3',
                  '100': '#ffdee4',
                  '200': '#ffc2cd',
                  '300': '#ff98aa',
                  '400': '#ff5c78',
                  '500': '#ff2a4f',
                  '600': '#f80a33',
                  'main': '#d90429',
                  '800': '#ac0824',
                  '900': '#8e0e24',
              },
              'martinique': {
                  '50': '#f3f2fb',
                  '100': '#e9e7f8',
                  '200': '#d8d3f2',
                  '300': '#c1b8e9',
                  '400': '#ac9bde',
                  '500': '#9d82d2',
                  '600': '#8e69c2',
                  '700': '#7c58aa',
                  '800': '#644a89',
                  'main': '#44355b',
              },
              'bleached-cedar': {
                  '50': '#f4f2fb',
                  '100': '#ebe8f7',
                  '200': '#dbd5f0',
                  '300': '#c5bae7',
                  '400': '#b29edb',
                  '500': '#a286ce',
                  '600': '#946dbe',
                  '700': '#815ca6',
                  '800': '#694c87',
                  'main': '#31263e',
              },
              'thunder': {
                  '50': '#f6f5f6',
                  '100': '#e9e4e9',
                  '200': '#d4ccd5',
                  '300': '#b5a9b7',
                  '400': '#907e92',
                  '500': '#756377',
                  '600': '#645565',
                  '700': '#544955',
                  '800': '#4a404a',
                  'main': '#221e22',
              },
              'fuel-yellow': {
                  '50': '#fef9ec',
                  '100': '#faedcb',
                  '200': '#f5d992',
                  '300': '#f0c159',
                  'main': '#eca72c',
                  '500': '#e58a1b',
                  '600': '#cb6714',
                  '700': '#a94914',
                  '800': '#893917',
                  '900': '#713016',
              },
          },
      },
  },
  plugins: [],
}
