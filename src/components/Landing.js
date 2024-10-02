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
            <div className='landingPageText'>
                <Typography variant="h6" component="div" gutterBottom sx={{
                    color: 'white',
                    marginLeft: 30,
                    paddingTop: 10,
                    width: 350
                }}>
                    Hi, I'm Liam. I'm Scottish, live in Glasgow and I'm amazed by what lines of code can actually do.
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
                <Typography variant="body1" component="div" gutterBottom sx={{
                    color: 'white',
                    marginLeft: 215,
                    marginTop: 60,
                    paddingtop: 50,
                    width: 150
                }}>
                    Website created by Liam using React.Js, MaterialUI and CSS.
                </Typography>
            </div>
        </>
    )
};