import { createTheme } from '@mui/material/styles';
import { getColors } from 'theme-colors';

export const BaseTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#96FF33',
      ...getColors('#96FF33')
    },
    secondary: {
      main: '#F9F4EA',
      ...getColors('#F9F4EA')
    },
    warning: {
      main: '#edd400',
      ...getColors('#edd400')
    },
    error: {
      main: '#ef2929',
      ...getColors('#ef2929')
    }
  },
  typography: {
    fontFamily: 'Inter, Helvetica, sans-serif',
    subtitle1: {
      fontSize: '1.25rem',
      lineHeight: 1.25
    }
  },
  spacing: 8,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          'scrollbar-width': '.5rem'
        },
        '*::-webkit-scrollbar': {
          width: '.5rem'
        },
        '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
          backgroundColor: 'transparent'
        },
        '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
          borderRadius: 8,
          backgroundColor: '#80808080',
          minHeight: 24,
          opacity: 0.5
        },
        '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus':
          {
            backgroundColor: '#808080'
          },
        '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active':
          {
            backgroundColor: '#808080'
          },
        '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
          {
            backgroundColor: '#808080'
          },
        '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
          backgroundColor: '#2b2b2b'
        }
      }
    }
  }
});

export default BaseTheme;
