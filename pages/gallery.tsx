import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Gallery from '../components/Gallery'
import Dash_header from '../components/Dash_header'
import Header from '../components/Header'
// import { olarmImages } from "../data/olarmImages.json
// import { olarmImgs } from '../data/olarmImages'


interface Props {
  olarmImages: Array<any>
}
// {olarmImgs}: Props
function gallery() {
  const [olarm, setOlarm] = useState()

  useEffect(() => {
    fetch("/api/olarmImages"). 
      then((res) => res.json()). 
      then( (data) => setOlarm(data))
  }, [])

  console.log(olarm)
   return (
    <>
      <Head>
        <title>Gallery &nbsp;|&nbsp; KMDMC</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header/>
      {/* <Gallery olarmImages={olarmImgs}/> */}
    </>
  )
}

export default gallery