import * as React from 'react'
import EducationPageText from '../components/Education';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {

      main: '#ff4400',

    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',

      contrastText: '#ffcc00',
    },
    contrastThreshold: 3,

    tonalOffset: 0.2,
  },
});

export default function EducationPage() {
  return (
    <>
      <EducationPageText />
    </>
  )
}
