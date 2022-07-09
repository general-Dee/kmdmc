import React from 'react'
import Head from 'next/head'
import Gallery from '../components/Gallery'



function gallery() {
  return (
    <>
      <Head>
        <title>About &nbsp;|&nbsp; KMDMC</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Gallery />
    </>
  )
}

export default gallery