import React from 'react'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import { aboutUs } from '../components/Animations'


function about() {
  return (
    <>
      <Head>
        <title>About &nbsp;|&nbsp; KMDMC</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <motion.div variants={ aboutUs }>
        <Header />

        <About />

      </motion.div>
      
    </>
    
  )
}

export default about