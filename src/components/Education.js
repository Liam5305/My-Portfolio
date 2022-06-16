import * as React from 'react';

import CssLogo from "../components/imgs/CssLogo.png";
import HtmlLogo from "../components/imgs/htmlLogo.png";
import ReactLogo from "../components/imgs/ReactLogo.png";
import JsLogo from "../components/imgs/JsLogo.png"
import NodeLogo from "../components/imgs/NodeJs.png"

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

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

export default function EducationPageText() {
    return (
        <>
            {/* JavaScript Text */}
            <Typography variant='h6' component="div" gutterBottom sx={{
                width: 300,
                height: 200,
                color: 'white',
                marginLeft: 35,
                paddingTop: 10
            }}>
                I started learning React.Js with Client Side Web Development in my BSc Honours Year to create a Single Page Application that used RESTAPI for an NC500 Route and Hostel list web page.
            </Typography>
            <div className='jsLogoPlacement' >
                <img src={JsLogo} alt={"JsLogo"} width='200' height='200' />
            </div>

            {/* React.Js Text */}
            <Typography variant='h6' component="div" gutterBottom sx={{
                width: 300,
                height: 200,
                color: 'white',
                marginRight: 120,
                marginTop: -26,
                display: 'block',
                float: 'right',
            }}>
                I started learning React.Js with Client Side Web Development in my BSc Honours Year to create a Single Page Application that used RESTAPI for an NC500 Route and Hostel list web page.
            </Typography>
            <div className='reactLogoPlacement' >
                <img src={ReactLogo} alt={"ReactLogo"} width='170' height='150' />
            </div>

            {/* Node.Js Text */}
            <Typography variant='h6' component="div" gutterBottom sx={{
                width: 300,
                height: 200,
                color: 'white',
                marginRight: 75,
                marginTop: -26,
                display: 'block',
                float: 'right'
            }}>
                I started learning React.Js with Client Side Web Development in my BSc Honours Year to create a Single Page Application that used RESTAPI for an NC500 Route and Hostel list web page.
            </Typography>
            <div className='nodeLogoPlacement' >
                <img src={NodeLogo} alt={"NodeLogo"} width='230' height='200' />
            </div>

            {/* HTML Text */}
            {/* <Typography variant='h6' component="div" gutterBottom sx={{
        width: 300,
        height: 200,
        color: 'white',
        display: 'inline',
        marginLeft: 35,
        paddingTop: 100
      }}>
        HTML
      </Typography> */}

            {/* CSS Text */}
            {/* <Typography variant='h6' component="div" gutterBottom sx={{
          width: 300,
          height: 200,
          color: 'white',
          marginRight: 75,
          marginTop: -26,
          display: 'block',
          float: 'right'
        }}>
           CSS
        </Typography> */}
            )
        </>
    )
}