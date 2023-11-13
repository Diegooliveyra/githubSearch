export default {
  grid: {
    container: '150rem',
    gutter: '1.6rem',
  },

  border: {
    radius: '0.8rem',
  },

  font: {
    family: 'Roboto, sans-serif',
    light: 300,
    normal: 400,
    bold: 700,

    sizes: {
      h1: '2.4rem',
      h2: '2rem',
      h3: '1.6rem',
      body: '1.6rem',
      button: '1.4rem',
      caption: '1.2rem',
    },
  },

  colors: {
    purple: '#8752CC',
    black: {
      primary: '#232324',
      secondary: '#201F1F',
    },
    gray: '#B2B2B2',
  },

  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    sp20: '2.0rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },

  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
} as const;
