import * as React from 'react'

import Typography from '@mui/material/Typography';
import ImagePlacement from '../components/ImagePlacement'
import AboutPageText from '../components/About.js';

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
      </Typography>
      <div className='aboutImgPlacement'>
        <ImagePlacement />
      </div>
      <div className='about_text'>
        <AboutPageText />
      </div>
      
    </>
  )
}
