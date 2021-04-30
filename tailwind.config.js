const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.tsx', './src/components/**/*.tsx', './src/**/*.ts'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    lineClamp: {
      1: 1,
      2: 2,
      3: 3,
      5: 5,
    },
    fontFamily: {
      mono: [
        'JetBrains Mono',
        'IBM Plex Mono',
        'Fira Code',
        'Menlo',
        'DejaVu Sans Mono',
        'Bitstream Vera Sans Mono',
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d8d8dc',
          400: '#aeaeb2',
          500: '#737373',
          600: '#545456',
          700: '#363638',
          800: '#262626',
          900: '#171717',
          1000: '#0b0b0c',
          1100: '#050505',
        },
        white: '#ffffff',
        black: '#000000',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '*,*::before,*::after': {
              borderColor: theme('colors.gray.300'),
            },
            lineHeight: '1.65',
            p: {
              lineHeight: theme('lineHeight.normal'),
            },
            h1: {
              color: theme('colors.black'),
            },
            'h2,h3,h5,h6': {
              color: theme('colors.gray.1000'),
            },
            color: theme('colors.gray.1000'),
            'ul > li::before': {
              content: '""',
              position: 'absolute',
              backgroundColor: theme('colors.gray.400'),
              borderRadius: '50%',
            },
            a: {
              color: '#0070f3',
              textDecoration: 'none',
              outline: theme('outline.none'),
              fontWeight: '450',
              '&:hover': {
                filter: 'brightness(150%)',
              },
            },
            strong: {
              color: theme('colors.black'),
              fontWeight: theme('fontWeight.bold'),
            },
            thead: {
              borderBottomColor: theme('colors.gray.300'),
            },
            borderColor: theme('colors.gray.300'),
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.300'),
              },
            },
            figure: {
              figcaption: {
                color: theme('colors.gray.400'),
              },
            },
            blockquote: {
              color: theme('colors.gray.400'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.50'),
            '*,*::before,*::after': {
              borderColor: theme('colors.gray.700'),
            },
            h1: {
              color: theme('colors.white'),
            },
            'h2,h3,h5,h6': {
              color: theme('colors.gray.50'),
            },
            borderColor: theme('colors.gray.700'),
            'ul > li::before': {
              content: '""',
              position: 'absolute',
              backgroundColor: theme('colors.gray.600'),
              borderRadius: '50%',
            },
            a: {
              color: '#68b5fb',
              textDecoration: 'none',
              fontWeight: '450',
              outline: theme('outline.none'),
              'text-shadow': '0px 0px 1px #68b5fb',
              '&:hover': {
                filter: 'brightness(111%)',
              },
            },
            strong: {
              color: theme('colors.white'),
              fontWeight: theme('fontWeight.bold'),
            },
            thead: {
              color: theme('colors.gray.50'),
              borderBottomColor: theme('colors.gray.700'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-line-clamp'),
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          letterSpacing: '-.03em',
          fontSize: '2.25em',
          fontWeight: theme('fontWeight.extrabold'),
        },
        h2: {
          letterSpacing: '-0.025em',
          fontSize: '1.5em',
          fontWeight: theme('fontWeight.bold'),
        },
        h3: {
          letterSpacing: '-0.025em',
          fontSize: '1.25em',
          fontWeight: theme('fontWeight.semibold'),
        },
        'h4,h5,h6': {
          letterSpacing: '-0.025em',
          fontSize: '1.125em',
          fontWeight: theme('fontWeight.meduim'),
          color: theme('color.gray.1000'),
        },
      })
    }),
  ],
}
