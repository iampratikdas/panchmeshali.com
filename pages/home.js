import Head from 'next/head'
import Image from 'next/image'
import '/styles/Home.module.css'


import Nav from '/pages/common/Nav'
import DemoCarousel from './DemoCarousel';
import Carousel_Slides from './Carousel_Slides';
export default function home() {
return (<>
  <Nav />  {/*this is the navigation at the top */}
  {/* <section> */}
    <section  style={{marginTop:"20px", marginBottom:"20px",}}>
    <div className="flexDiv"> {/*this div to enclose image and header line div */}
      <div className="textDiv">
        <h1>This is Panchmeshalii</h1>
        <p style={{color:"red", fontWeight:"bold"}}>Where talents are Adored</p>
      </div>
      <div>
        <img src="/home_image.png" className="imgClass" />
      </div>
    </div>
    </section>
    <section >
    <div className="flexDiv"> {/*this div to enclose image and header line div */}
    <div>
    <img src="/home_image.png" className="imgClass" />
      </div>
      <div className="textDiv">
        <h1>This is Panchmeshalii</h1>
        <p style={{color:"red", fontWeight:"bold"}}>Where talents are Adored</p>
      </div>
      
    </div>
    </section>

    <section  style={{marginTop:"20px", marginBottom:"20px",}}>
    <div className="flexDiv"> {/*this div to enclose image and header line div */}
      <div className="textDiv">
        <h1 className="headingText" >This is Panchmeshalii</h1>
        <p style={{color:"red", fontWeight:"bold"}}>Where talents are Adored</p>
      </div>
      <div>
      <img src="/home_image.png" className="imgClass" />
      </div>
    </div>
    </section>
    <section  style={{marginTop:"20px",  marginBottom:"20px",}}>
    <Carousel_Slides />
    </section>
    {/* </section> */}
    </>)
  }