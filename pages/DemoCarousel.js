/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head'
import Image from 'next/image'
import { useState } from "react";
export default function DemoCarousel() {
  const [slides, setSlides] = useState(1);

  const changeSlidesForward=()=>{
    setSlides(slides+1)
    console.log(slides);
  }
  const changeSlidesBackward=()=>{
    setSlides(slides-1)
    console.log(slides);
  }
    return (<>
    <div>
      <div style={{border:"solid red", width:"50%", height:"100px"}} onClick={changeSlidesForward}></div>
        <div>
          <img src="https://images.unsplash.com/photo-1593953443285-bf7335acbca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1593953443285-bf7335acbca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        </div>
        <div style={{border:"solid red", width:"50%", height:"100px"}} onClick={changeSlidesBackward}></div>
    </div>
        </>)
      }