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
          'neuroOutie': '-3px -3px 7px #ffffffa6, 3px 3px 5px rgba(94, 104, 121, 0.712)',
        },
        colors: {
            'white': '#F9F6EE',
            'dark': '#232121',
        },
        grandientColorStops: {
            50: '50%',
        },
        backgroundImage: {
            'split-half': "linear-gradient(to right, #232121 50.05%, #F9F6EE 50.05%)",
            'split-half-reverse': "linear-gradient(to right, #F9F6EE 50.05%, #232121 50.05%)",
          },
          transitionDuration: {
            '300': '350ms',
          },
        borderRadius: {
            'icon-computer': '3.125rem',
            'medium-icon-computer': '2.5rem',
            'small-icon-computer': '1.875rem',
            'tiny-icon-computer': '1.2rem',
            'phone-icon-computer': '0.95rem',
            'project-card-top': '3.125rem 3.125rem 0rem 0rem',
            'project-card-left': '3.125rem 0rem 0rem 3.125rem',
            'project-card-right': '0rem 3.125rem 3.125rem 0rem',
            'project-card-bottom': '0rem 0rem 3.125rem 3.125rem',
        },
        screens: {
          'phone': '530px',
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