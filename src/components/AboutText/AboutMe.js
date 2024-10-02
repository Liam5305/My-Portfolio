import * as React from 'react'

import Typography from '@mui/material/Typography';

import AboutContainer from '../../AboutContainer'


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
                <container>
                    <div className="aboutPage">
                        <AboutContainer title="About Me">
                            <div>
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
                        </AboutContainer>
                    </div>
                </container>
            </Typography>
        </>
    )
}