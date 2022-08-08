import * as React from "react";

import Typography from '@mui/material/Typography';

import Linked_icon from "../components/imgs/Linked_in.png";
import Email_icon from "../components/imgs/Email_icon.png"

function ContactSelectables() {

    return (
        <>
            <div className="outer_container_contact">
                <Typography variant="h3" component="div" gutterBottom sx={{
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 15,
                    textDecoration: 'underline'
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
                <div className="selectable_btns">
                    <div className="linked_container">
                        <a href="https://www.linkedin.com/in/liam-rutherford-54b9b3178/">
                            <img src={Linked_icon} alt="LinkedIcon" className="LinkedInIcon" width='100' height='90' />
                        </a>
                    </div>
                    <div className="email_container">
                        <a href="mailto:liamrutherford10@gmail.com?body=Job Opportunity">
                            <img src={Email_icon} alt="EmailIcon" className="EmailIcon" width='100' height='90' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactSelectables;