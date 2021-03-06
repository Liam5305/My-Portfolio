import * as React from 'react'

import { createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';

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

export default function AboutPageText() {
    return (
        <>
            <Typography variant='h6' component="div" gutterBottom sx={{
                width: 300,
                height: 200,
                color: 'white',
                marginLeft: 50,
                marginTop: 30,
                paddingTop: 10
            }}>

                <Box>
                    <div className='aboutPage_Text1'>
                        Hi, I'm Scottish and live in Glasgow. I enjoy building and designing web applications. I've always been interested with computers since I was younger.
                        <br />
                        <br />
                        Around 2008, I was on popular gaming platform named 'ROBLOX' in which I was creating bare minimum functional games and I was enjoying it. It really interested me how a few lines of code can change so many things.
                        <br />
                        <br />
                        Around 2017, I decided to go to College to do HNC Computer Science and I passed, moved into HND Software Development which I got a pass with a Distinction.
                        <br />
                        <br />
                    </div>
                    <div className='aboutPage_Text2'>
                        Middle of 2020 a few months after the start of the COVID-19 pandemic. I started and completed BSc Degree in Computer Science at Glasgow Caledonian University. Which included the following topics:
                        <br />
                        <ul>
                            <li>Application Architecture and Design Patterns</li>
                        </ul>
                        <ul>
                            <li>DevOps</li>
                        </ul>
                        <ul>
                            <li>IT Project Management</li>
                        </ul>
                        <ul>
                            <li>Integrated Project - "GameFlix" built by Node.Js</li>
                        </ul>
                        <ul>
                            <li>Web Platform Development 2 built by Node.Js</li>
                        </ul>
                    </div>
                    <div className='aboutPage_Text3'>
                        In 2021, I started BSc Honours Degree for Computer Science which allowed me to learn a variety of topics.
                        <br />
                        <ul>
                            <li>Client-Side Web Development</li>
                        </ul>
                        <ul>
                            <li>Secure Software Development</li>
                        </ul>
                        <ul>
                            <li>Mobile Platform Development</li>
                        </ul>
                        <ul>
                            <li>UI/UX Design</li>
                        </ul>
                    </div>
                </Box>
            </Typography>
        </>
    )
}