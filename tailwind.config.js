/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateAreas: {
        'row_mobile': [
          'data1 data1 data1 data1',
          'data2 data2 data2 data4',
          'data3 data3 data3 data4',
        ],
        'row_desktop': [
          'data1 data2 data3 data4',
        ],
      },
      gridTemplateColumns: {
        'row_mobile': '1fr 1fr 1fr 1fr',
        'row_desktop': '1fr 1fr 1fr 1fr'
      },
      gridTemplateRows: {
        'row_mobile': '1fr 1fr 1fr',
        'row_desktop': '1fr'
      },
      screens: {
        'smart-phone': '320px',
        'desktop': '1320px'
      },
      fontFamily: {
        base: 'var(--font-inter)',
        alt: 'var(--font-jura)'
      },
      backgroundImage: {
        'home-circles': "url('/assets/icons/circles.svg')",
        'not-found': "url('/assets/icons/not-found.svg')",
      },
      colors: {
        'my-files': '#F2F2F3',
        gray: {
          50: '#e9f3fe',
          100: '#d2dae1',
          200: '#b9c0c6',
          300: '#9ea6ad',
          400: '#848d95',
          500: '#6a737b',
          600: '#525a61',
          700: '#394046',
          800: '#20262d',
          900: '#020e17'
        },
        blue: {
          50: '#e1f7ff',
          100: '#b6e3fc',
          200: '#89d1f8',
          300: '#5ebdf3',
          400: '#3aabf0',
          500: '#2a92d7',
          600: '#1e72a7',
          700: '#125178',
          800: '#033149',
          900: '#00111b'
        },
        yellow: {
          50: '#fff2df',
          100: '#f6dbba',
          200: '#ecc491',
          300: '#e3ad68',
          400: '#da953e',
          500: '#c17c25',
          600: '#96601b',
          700: '#6c4511',
          800: '#422806',
          900: '#1a0d00'
        }
      },
      keyframes: {
        dropdown: {
          '0%': { top: '-285px' },
          '100%': { top: '24px' },
        }
      },
      animation: {
        dropdown: 'dropdown 0.5s ease-in-out',
      }
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas'),
  ],
}
