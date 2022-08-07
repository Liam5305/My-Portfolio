import * as React from "react";

import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Linked_icon from "../components/imgs/Linked_in.png";
import Email_icon from "../components/imgs/Email_icon.png"

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

function ContactPageText() {

    return (
        <>
            <div className="outer_container_contact">
                <Typography variant="h3" component="div" gutterBottom sx={{
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 15
                }}>
                    Contact Liam
                    <br />
                </Typography>
                <Typography variant="h6" component="div" gutterBottom sx={{
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 5
                }}>
                    Get in touch with me to get the ball rolling!
                </Typography>
                <div className="linked_container">
                    <img src={Linked_icon} alt={"LinkedInIcon"} width='100' height='90' />
                    <Button variant="contained" endIcon={<SendIcon />}>LinkedIn</Button>
                </div>
                <div className="email_container">
                    <img src={Email_icon} alt={"EmailIcon"} width='100' height='90' />
                    <Button variant="contained" endIcon={<EmailIcon />}>Email</Button>
                </div>
            </div>
        </>
    )
}

export default ContactPageText;