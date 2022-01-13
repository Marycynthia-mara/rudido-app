// const colors = require('@tailwindcss/ui/colors');
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    // comment extend out to overide the tailwind color utility and apply only the ones definded below
    extend: {
      colors: {
        darkBlue: {
          100: '#17497C',
          200: '#19C4DB',
        },
        darkPurple: {
          100: '#431E63',
          200: '#28123B',
        },
        pinkRose: {
          100: '#F5BEDF',
          200: '#F04B92',
          300: '#FB7EAB',
        },
        google: {
          100: '#0085FF',
        },
        facebook: {
          100: '#3B5998',
        },
        lightGreen: {
          100: '#43DB6E',
        },
      }, 
   
      borderRadius: {
        '30': '30px',
        '15': '15px',
        'fullSide': '100%',
      },

      minHeight: {
        '0': '0',
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
       },

       maxHeight: {
        '232': '58rem',
        '184': '46rem',
       },

       height: {
        'inherit': 'inherit',
       },

       fontSize: {
         'xxs' : '10px',
       }
    },

    boxShadow: {
      // horizontal vertical blur spread colors(opacity) -- box shadow value in this order
      sm : '0px 4px 4px rgba(0, 0, 0, 0.25)',
      all : '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 15px rgba(0, 0, 0, 0.25)',
      md : '0px 0px 15px rgba(0, 0, 0, 0.25)',
    }, 

    fontFamily: {
      'sans': ['Roboto','ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI",  "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
    }
    
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    // require('@tailwindcss/jit'),
    // require('@tailwindcss/aspect-ratio'),
  ]
}