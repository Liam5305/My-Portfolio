import * as React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Button from "@mui/material/Button";
import ImagePlacement from "./ImagePlacement"
import { Link } from 'react-router-dom';

const theme = createTheme({
    palette: {
        primary: {

            main: '#f2eded',

        },
        secondary: {
            light: '#fff',
            main: '#d3d3d3',

            contrastText: '#fff',
        },
        contrastThreshold: 3,

        tonalOffset: 0.2,
    },
});

export default function LandingPageText() {
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
                <Button component={Link} to="/about-page" variant="text" sx={{
                    marginLeft: 29
                }}>Learn More</Button>
            </ThemeProvider>
            <div className='landing_Imgs'>
                <ImagePlacement />
            </div>
        </>
    )
};