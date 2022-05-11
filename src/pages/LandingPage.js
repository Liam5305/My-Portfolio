import * as React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import ImagePlacement from "../components/ImagePlacement"

const theme = createTheme({
    palette: {
        primary: {

            main: '#ffffff',

        },
        secondary: {
            light: '#ffffff',
            main: '#ffffff',

            contrastText: '#ffffff',
        },
        contrastThreshold: 3,

        tonalOffset: 0.2,
    },
});

export default function LandingPage() {
    return (
        <>
            <Typography variant="h6" component="div" gutterBottom sx={{
                color: 'white',
                marginLeft: 30,
                paddingTop: 10,
                width: 350
            }}>
                Hi, I'm Liam. I'm Scottish and live in Glasgow and I love designing web applications.
                <br />
            </Typography>
            <br />
            <ThemeProvider theme={theme}>
                <Button variant="text" sx={{
                    marginLeft: 29
                }}>Learn More</Button>
            </ThemeProvider>
            <div className='homeImgPlacement' >
                <ImagePlacement />
            </div>
        </>
    )
};