module.exports = {
    theme: {
      fontFamily: {

       'sans': ['ui-sans-serif', 'system-ui'],

       'serif': ['ui-serif', 'Georgia'],

       'mono': ['ui-monospace', 'SFMono-Regular'],

       'display': ['"Patua One"'],

       'body': ['Open Sans'],
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
       '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        base: 'rgba(26, 32, 44, 0.4) 5px 5px, rgba(26, 32, 44, 0.3) 10px 10px, rgba(26, 32, 44, 0.2) 15px 15px, rgba(26, 32, 44, 0.1) 20px 20px, rgba(26, 32, 44, 0.05) 25px 25px',
        none: 'none',
      },
      minWidth: {

       '0': '0',

       '1/4': '25%',

       '1/2': '50%',

       '3/4': '75%',

       'full': '100%',

       'most': '70vw',
      },
      extend: {
        backgroundImage: theme => ({

         'hero-pattern': "url('../../../../../assets/hero_back.svg')",
         'hero-pattern-2': "url('../../../../../assets/overlapping-circles.svg')",
         'hero-pattern-3': "url('../../../../../assets/circuit-board.svg')",
         'hero-pattern-3-inverted': ""
        })
      }
    }
  }