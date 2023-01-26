import Head from 'next/head'
import Image from 'next/image'


import Nav from '/pages/common/nav'
import DemoCarousel from './DemoCarousel'
export default function home() {
return (<>
    <Nav />
    <DemoCarousel />
    </>)
  }