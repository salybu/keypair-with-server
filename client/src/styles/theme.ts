import { createTheme } from '@mui/material';

const TYPOGRAPHY = {
  h2: {
    fontFamily: 'Roboto',
    fontWeight: 500,
    fontSize: 18,
  },
};

const PALETTE = {
  common: {
    white: '#FFF',
  },
  primary: {
    main: '#00D67E',
  },
  grey: {
    100: '#E5E5E5',
    500: '#676767',
  },
};

const theme = createTheme({
  typography: { ...TYPOGRAPHY },
  palette: { ...PALETTE },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            *, *:before, *:after {
                box-sizing: border-box;
            }
            `,
    },
  },
});

export default theme;
