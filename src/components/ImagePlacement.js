import * as React from 'react'

import reactImg from "./imgs/ReactLogo.png"
import cssImg from "./imgs/CssLogo.png"
import htmlImg from "./imgs/htmlLogo.png"
import JsLogo from "../components/imgs/JsLogo.png"
import NodeLogo from "../components/imgs/NodeJs.png"

export default function ImagePlacement() {
  return (
    <div className='language_images'>
      <img src={JsLogo} alt={"JsLogo"} width='200' height='200'/>
      <img src={reactImg} alt={"reactImg"} width='200' height='200'/>
      <img src={NodeLogo} alt={"NodeLogo"} width='260' height='200'/>
      <img src={cssImg} alt={"cssImg"} width='150' height='200'/>
      <img src={htmlImg} alt={"htmlImg"} width='200' height='200'/>
    </div>
  )
}