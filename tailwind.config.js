module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
      extend: {
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
        },
        animation: {
            'grow': 'grow linear linear',
            'growreverse': 'growReverse linear',

        },
      },
    },
    variants: {
        extend: {},
      },
    plugins: [],
  }