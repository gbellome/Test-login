import { createTheme, ThemeProvider } from '@mui/material/styles'

const Theme = createTheme({
  palette: {
    primary: {
      main: '#A12C34',
      light: '#DB777D',
      dark: '#8A1C33',
    },
    secondary: {
      main: '#2D2D2D',
      light: '#8A8A8A',
      dark: '#101010',
    },
    error: {
      main: '#D8201D',
      light: '#F29E9C',
      dark: '#C21D1A',
    },
    warning: {
      main: '#FDA018',
      light: '#FEC97C',
      dark: '#F89402',
    },
    success: {
      main: '#22A121',
      light: '#78E378',
      dark: '#1D8C1D',
    },
    background: {
      default: '#F6F6F6',
    },
  },
  typography: {
    htmlFontSize: 14,
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
    h1: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 700,
      fontSize: '4rem',
      lineHeight: 1,
      letterSpacing: 1,
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 600,
      fontSize: '3rem',
      lineHeight: 1,
      letterSpacing: 1,
      textTransform: 'uppercase',
    },
    h3: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 500,
      fontSize: '2rem',
      lineHeight: 1,
      letterSpacing: 1,
      textTransform: 'uppercase',
    },
    h4: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1,
      letterSpacing: 1,
      textTransform: 'uppercase',
    },
    h5: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1,
      letterSpacing: 1,
      textTransform: 'uppercase',
    },
    button: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: '0.875rem',
      textTransform: 'uppercase',
    },
  },
})

export default Theme
