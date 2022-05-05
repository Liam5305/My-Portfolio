import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";

import AboutPage from "./AboutPage";

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

export default function LandingPage() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <br />
                <br />
                <br />
                <Typography variant="h5" component="div" gutterBottom>
                    Hi, I'm Liam.
                </Typography>
                <br />
                <Typography variant="h6" component="div" gutterBottom>
                    I'm Scottish, live in Glasgow and I love designing web applications.
                </Typography>
                <Button variant="text">Learn More</Button>
            </ThemeProvider>

            {/* <img src= */}
        </>
    )
};