import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      // main: '#556cd6',
      main: '#17b2cd',
    },
    secondary: {
      // main: '#19857b',
      main: '#f01f1f',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;