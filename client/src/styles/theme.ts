import { createTheme } from '@mui/material';
import NunitoTTF from 'assets/Nunito-Light.ttf';
import RobotoTTF from 'assets/Roboto-Medium.ttf';
import MontserratTTF from 'assets/Montserrat-Medium.ttf';

const theme = createTheme({
  typography: {
    fontFamily: 'Nunito',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            @font-face {
                font-family: 'Nunito';
                font-style: normal;
                src: url(${NunitoTTF}) format('ttf');
            }
            @font-face {
              font-family: 'Roboto';
              font-style: normal;
              src: url(${RobotoTTF}) format('ttf');
            }
            @font-face {
              font-family: 'Montserrat';
              font-style: normal;
              src: url(${MontserratTTF}) format('ttf');
            }
            *, *:before, *:after {
                box-sizing: border-box;
            }
            `,
    },
  },
});

export default theme;
