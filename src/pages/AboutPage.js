import * as React from 'react'

import Typography from '@mui/material/Typography';
import ImagePlacement from '../components/ImagePlacement'

export default function AboutPage() {
  return (
    <>
        <Typography variant="body1" component="div" gutterBottom sx={{
          width: 300,
          height: 200,
          marginLeft: 50,
          paddingTop: 10,
          color: 'white'
        }}>
          <box>
            Hi, I'm Scottish and live in Glasgow. I enjoy building and designing web applications.
            <br />
            I've always been interested with computers since I was younger.
            <br />
            <br />
            Around 2008, I was on popular gaming platform named 'ROBLOX' in which I was creating bare minimum functional games and I was enjoying it. It really interested me how a few lines of code can change so many things.
            <br />
            <br />
            Around 2017, I decided to go to College to do HNC Computer Science and I passed, moved into HND Software Development which I got a pass with a Distinction.
            <br />
            <br />
            Middle of 2020 a few months after the start of the COVID-19 pandemic. I started and completed BSc Degree in Computer Science at Glasgow Caledonian University.
            <br />
            <br />
            In 2021, I started BSc Honours Degree for Computer Science which allowed me to learn a variety of topics.
          </box>
        </Typography>
        <ImagePlacement/>
    </>
  )
}
