import * as React from 'react'

import ImagePlacement from '../components/ImagePlacement'
import AboutPageText from '../components/AboutText/AboutMe.js';
import AboutSkills from '../components/AboutText/AboutSkill.js'

export default function AboutPage() {
  return (
    <>
        <ImagePlacement />
        <AboutPageText />
        <AboutSkills />
    </>
  )
}
