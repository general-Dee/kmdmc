import React from 'react'
import Head from 'next/head'
import News from '../components/News'
import Header from '../components/Header'

function news() {
  return (
    <>
      <Head>
        <title>News &nbsp;|&nbsp; KMDMC</title>
        <link rel="icon" href="/logo.png" />

      </Head>

      <Header />
    </>
  )
}

export default news