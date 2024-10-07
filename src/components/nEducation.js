import * as React from 'react';

import Typography from '@mui/material/Typography';
import { color, rgbToHex } from '@mui/system';

export default function EducationPageText() {
    return (
        <>
            <div className='educationBoxes'>
                <div className='WorkContent'>
                    <Typography variant='h6' component="div" gutterBottom sx={{
                        width: 350,
                        height: 200,
                        color: 'white',
                        marginRight: 180,
                        marginTop: 30,
                        display: 'block',
                        float: 'right',
                        backgroundcolor: color(31,31,31)
                    }}>
                        Currently, I am working as a Software Engineer with Momenta Group Global,
                        which is contracted through Deloitte LTD.
                        <br></br>
                        We have various clients that we support. These include but are not limited too:
                        <li>
                            ACC
                        </li>
                        <li>
                            FinDB
                        </li>
                        <li>
                            OneView
                        </li>
                        <li>
                            Amazon ESRA
                        </li>
                        <br></br>
                        To support these clients, we receive client support tickets via ServiceNow, 
                        covering functionality requests or issue reports. 
                        Our team investigates each case and, if necessary, 
                        creates a Change ticket to develop and propose solutions to the client.

                    </Typography>
                </div>
                <div className='nodeBox'>
                    <Typography variant='h6' component="div" gutterBottom sx={{
                        width: 300,
                        height: 200,
                        color: 'white',
                        marginRight: 140,
                        marginTop: -26,
                        display: 'block',
                        float: 'right'
                    }}>
                        In my third year of university we were learning Node.Js for our class 'Web Platform Development' which also allowed me and two other class mates to team up for 'Integrated Project' and create a Web Application using Node.Js as a backend for a Netflix inspired game search engine. The Netflix insipred video game search engine was called 'Gameflix' and it would pull an API from steamspy.

                    </Typography>
                </div>
            </div>
        </>
    )
}