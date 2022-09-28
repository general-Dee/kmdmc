import React, { useEffect, useState, useRef } from 'react'
import Head from 'next/head'
import Gallery from '../components/Gallery'
import Dash_header from '../components/Dash_header'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Image from 'next/image'
import Footer from '../components/Footer'
// import { olarmImages } from "../data/olarmImages.json
// import { olarmImgs } from '../data/olarmImages'


interface Props {
  // olarmImages: Array<any>
}

function gallery() {

  const imageRef = useRef(null)


  
   return (
    <>
      <Head>
        <title>Gallery &nbsp;|&nbsp; KMDMC</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header/>
      <div className="h-40"></div>

      <section className="text-gray-600 body-font">
  <div className="container h-screen px-5 py-24 mx-auto flex flex-wrap">
    <motion.div 
    initial= {{
      x: -80,
      opacity: 0
       }}
      transition= {{duration: 1}}
      whileInView= {{ opacity: 1, x: 0}}
      viewport= {{ once: true}}
    className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-600 lg:w-1/3 lg:mb-0 mb-4">COMMISSIONING OF COMPLETED PROJECTS </h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">President Muhammadu Buhari during a working visit to Kaduna state in January 2022 commissioned the newly remodeled Murtala Muhammed Square and Sabon Gari Modern Market in Zaria</p>
    </motion.div>
    <motion.div 
    initial= {{
      x: 80,
      opacity: 0
       }}
      transition= {{duration: 1}}
      whileInView= {{ opacity: 1, x: 0}}
      viewport= {{ once: true}}
    className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/commision/1.jpeg" width={500} height={300} alt="gallery" className="materialboxed responsive-img w-full object-cover h-full object-center block" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/commision/2.jpeg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
        </div>
        <div className="md:p-2 p-1 w-full">
          <Image src="/img/gallery/commision/3.jpeg" width={900} height={600}  alt="gallery" className="w-full h-full object-cover object-center block"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <Image src="/img/gallery/commision/4.jpeg" width={900} height={600}  alt="gallery" className="w-full h-full object-cover object-center block"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/commision/5.jpeg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/commision/2.jpeg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
        </div>
      </div>
    </motion.div>
  </div>
</section>

      <section className="text-gray-600 my-20 py-20 body-font h-screen">
  <div className="container h-screen px-5 py-24 mx-auto flex flex-wrap">
    <motion.div 
    initial= {{
      x: -80,
      opacity: 0
       }}
      transition= {{duration: 1}}
      whileInView= {{ opacity: 1, x: 0}}
      viewport= {{ once: true}}
    className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-600 lg:w-1/3 lg:mb-0 mb-4">TRADE FAIR </h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">KMDMC organized a Trade Fair on 1st and 2nd July 2022 at Murtala Muhammed Square in line with our commitment to provide safe and conducive environment for trading activities to thrive in Kaduna state.</p>
    </motion.div>
    <motion.div 
    initial= {{
      x: 80,
      opacity: 0
       }}
      transition= {{duration: 1}}
      whileInView= {{ opacity: 1, x: 0}}
      viewport= {{ once: true}}
    className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/tradefair/1.jpeg" width={500} height={300} alt="gallery" className="materialboxed responsive-img w-full object-cover h-full object-center block" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/tradefair/2.jpeg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
        </div>
        <div className="md:p-2 p-1 w-full">
          <Image src="/img/gallery/tradefair/3.jpeg" width={900} height={600}  alt="gallery" className="w-full h-full object-cover object-center block"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <Image src="/img/gallery/tradefair/4.jpeg" width={900} height={600}  alt="gallery" className="w-full h-full object-cover object-center block"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/tradefair/5.jpeg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/tradefair/6.jpeg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
        </div>
      </div>
    </motion.div>
  </div>
</section>

      <section className="text-gray-600 body-font py-20">
  <div className="container h-screen px-5 py-24 mx-auto flex flex-wrap">
    <motion.div 
    initial= {{
      x: -80,
      opacity: 0
       }}
      transition= {{duration: 1}}
      whileInView= {{ opacity: 1, x: 0}}
      viewport= {{ once: true}}
    className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-600 lg:w-1/3 lg:mb-0 mb-4">SITE INSPECTION</h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">KMDMC’s team inspecting various market development projects across Kaduna, Zaria and Kafanchan.</p>
    </motion.div>
    <motion.div 
    initial= {{
      x: 80,
      opacity: 0
       }}
      transition= {{duration: 1}}
      whileInView= {{ opacity: 1, x: 0}}
      viewport= {{ once: true}}
    className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/inspection/1.jpg" width={500} height={300} alt="gallery" className="materialboxed responsive-img w-full object-cover h-full object-center block" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/inspection/2.jpg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
        </div>
        <div className="md:p-2 p-1 w-full">
          <Image src="/img/gallery/inspection/3.jpg" width={900} height={600}  alt="gallery" className="w-full h-full object-cover object-center block"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <Image src="/img/gallery/inspection/4.jpg" width={900} height={600}  alt="gallery" className="w-full h-full object-cover object-center block"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/inspection/5.jpg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/inspection/6.jpg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
        </div>
      </div>
    </motion.div>
  </div>
</section>

      <section className="text-gray-600 body-font">
  <div className="container h-screen px-5 py-24 mx-auto flex flex-wrap">
    <motion.div 
    initial= {{
      x: -80,
      opacity: 0
       }}
      transition= {{duration: 1}}
      whileInView= {{ opacity: 1, x: 0}}
      viewport= {{ once: true}}
    className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-600 lg:w-1/3 lg:mb-0 mb-4">KADUNA AT 55 Children’s Day March Past</h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">KMDMC hosted the annual Children’s Day March Past at Murtala Muhammed Square which also coincided with the KADUNA AT 55 celebrations. His Excellency, Mallam Nasir Ahmad El-Rufai alongside other senior KDSG officials were in attendance.</p>
    </motion.div>
    <motion.div 
    initial= {{
      x: 80,
      opacity: 0
       }}
      transition= {{duration: 1}}
      whileInView= {{ opacity: 1, x: 0}}
      viewport= {{ once: true}}
    className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/matchpast/1.jpeg" width={500} height={300} alt="gallery" className="materialboxed responsive-img w-full object-cover h-full object-center block" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/matchpast/2.jpeg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
        </div>
        <div className="md:p-2 p-1 w-full">
          <Image src="/img/gallery/matchpast/3.jpeg" width={900} height={600}  alt="gallery" className="w-full h-full object-cover object-center block"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <Image src="/img/gallery/matchpast/4.jpeg" width={900} height={600}  alt="gallery" className="w-full h-full object-cover object-center block"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/matchpast/5.jpeg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/matchpast/6.jpeg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
        </div>
      </div>
    </motion.div>
  </div>
</section>

      <section className="text-gray-600 body-font my-20 py-20">
  <div className="container h-screen px-5 py-24 mx-auto flex flex-wrap">
    <motion.div 
    initial= {{
      x: -80,
      opacity: 0
       }}
      transition= {{duration: 1}}
      whileInView= {{ opacity: 1, x: 0}}
      viewport= {{ once: true}}
    className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-600 lg:w-1/3 lg:mb-0 mb-4">STAKEHOLDER ENGAGEMENT</h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">In line with our stakeholder relations approach, KMDMC regularly engages relevant stakeholders such as market unions, religious and traditional title holders to foster developments in our communities.</p>
    </motion.div>
    <motion.div 
    initial= {{
      x: 80,
      opacity: 0
       }}
      transition= {{duration: 1}}
      whileInView= {{ opacity: 1, x: 0}}
      viewport= {{ once: true}}
    className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/stakeholders/1.jpeg" width={500} height={300} alt="gallery" className="materialboxed responsive-img w-full object-cover h-full object-center block" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/stakeholders/2.jpeg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
        </div>
        <div className="md:p-2 p-1 w-full">
          <Image src="/img/gallery/stakeholders/5.jpeg" width={900} height={600}  alt="gallery" className="w-full h-full object-cover object-center block"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <Image src="/img/gallery/stakeholders/6.jpeg" width={900} height={600}  alt="gallery" className="w-full h-full object-cover object-center block"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/stakeholders/3.jpeg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/stakeholders/4.jpeg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
        </div>
      </div>
    </motion.div>
  </div>
</section>

<div className='h-40'></div>
<Footer />
    </>
  )
}

export default gallery