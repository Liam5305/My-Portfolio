import * as React from 'react'

import reactImg from "./imgs/ReactLogo.png"
import cssImg from "./imgs/CssLogo.png"
import htmlImg from "./imgs/htmlLogo.png"

export default function ImagePlacement() {
  return (
    <div className='language_images'>
      <img src={reactImg} alt={"reactImg"} width='170' height='150'/>
      <img src={cssImg} alt={"cssImg"} width='130' height='150'/>
      <img src={htmlImg} alt={"htmlImg"} width='170' height='150'/>
    </div>
  )
}