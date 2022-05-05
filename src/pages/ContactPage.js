import React from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const theme = createTheme({
    palette: {
        primary: {

            main: '#121858',
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

export default function ContactPage() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <div className='email-form'>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '35ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Contact Me!" variant="outlined" />
                        <br />
                        <TextField id="outlined-basic" label="Whats your Email?" variant="outlined" />
                        <br />
                        <TextField id="outlined-basic" label="Subject Header" variant="outlined" />
                        <br />
                        <TextField id="outlined-basic" label="What is your Query?" variant="outlined" />
                        <br />
                        <Button variant="outlined">Send!</Button>
                    </Box>
                </div>
            </ThemeProvider>
        </>
    )
}
