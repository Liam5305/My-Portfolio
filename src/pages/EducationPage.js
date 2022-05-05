import React from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

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
        <Typography variant='h6' component="div" gutterBottom sx={{
          width: 300,
          height: 200,
          color: 'white'
        }}>
          I started learning React.Js with Client Side Web Development in my BSc Honours Year to create a Single Page Application that used RESTAPI for an NC500 Route and Hostel list web page.
        </Typography>
    </>
  )
}
