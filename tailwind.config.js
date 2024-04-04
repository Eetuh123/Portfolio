module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
      extend: {
        fontFamily: {
          'raleway': ['Raleway', 'sans-serif'],
        },
        boxShadow: {
          'icon-shadow': '0px 0px 4px rgba(0, 0, 0, 0.01)',
        },
        colors: {
            'white': '#ffffff',
            'dark': '#232121',
        },
        grandientColorStops: {
            50: '50%',
        },
        backgroundImage: {
            'split-half': "linear-gradient(to right, #232121 50%, #FFFFFF 50%)",
            'split-half-reverse': "linear-gradient(to right, #FFFFFF 50%, #232121 50%)",
          },
        borderRadius: {
            'icon-computer': '3.125rem',
        },
        keyframes: {
            grow: {
                '0%': { transform: 'scale(0.45)', transformOrigin: 'top left'},
                '100%': { transform: 'scale(1)', transformOrigin: 'top left'},
              },
              growReverse: {
                '0%': { transform: 'scale(0.45)', transformOrigin: 'top right'},
                '100%': { transform: 'scale(1)', transformOrigin: 'top right'},
              },
              bounce: {
                '0%, 100%': { transform: 'translateY(-2%)', 'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)' },
                '50%': { transform: 'translateY(2%)', 'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)' },
              },
              buttonPress: {
                '0%': { transform: 'scale(1)'},
                '100%': { transform: 'scale(1.1)'},
              },
              left: {
                '0%': { transform: 'translateX(-120%)'},
                '100%': { transform: 'translateX(0%)'},
              },
              right: {
                '0%': { transform: 'translateX(120%)'},
                '100%': { transform: 'translateX(0%)'},
              },
            },
        animation: {
            'grow': 'grow linear',
            'growreverse': 'growReverse linear',
            'bounce': 'bounce 3s infinite linear',
            'right': 'right 1s forwards',
            'left': 'left 1s forwards',

        },
      },
    },
    variants: {
        extend: {},
      },
    plugins: [],
  }