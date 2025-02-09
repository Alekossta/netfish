import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const theme = createTheme({
    cssVariables: true,
    typography: {
      fontFamily: "'Itim', serif"
    },
    palette: {
      mode: "light",
      primary: {
        main: '#30003B',
      },
      secondary: {
        main: '#43C5E7',
      },
      error: {
        main: red.A400,
      },
    },
});