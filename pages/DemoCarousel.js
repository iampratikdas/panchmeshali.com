/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head'
import Image from 'next/image'
import { useState } from "react";
export default function DemoCarousel() {
  const [slides, setSlides] = useState(1);
  
  const changeSlidesForward=()=>{
    if(slides === 0){
      setSlides(slides+1)
    }else{
      setSlides(slides-1)
    }
    console.log("forward==>",slides);
  }
  
    return (<>
    <div>
      <div style={{border:"solid red", width:"50%", height:"100px"}} onClick={changeSlidesForward}></div>
        <div style={{display:"flex",alignItems:"center", border:"blue solid",width:"50%", height:"100px"}}>
          <div>
            <img style={{width:"100%", height:"100px"}} src="https://images.unsplash.com/photo-1593953443285-bf7335acbca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
          </div>
          <div>
            <img style={{width:"100%", height:"100px"}} src="https://images.unsplash.com/photo-1593953443285-bf7335acbca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
          </div>
      </div>
        <div style={{border:"solid red", width:"50%", height:"100px"}} onClick={changeSlidesForward}></div>
    </div>
        </>)
      }