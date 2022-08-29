import React, { useEffect, useState, useRef } from 'react'
import Head from 'next/head'
import Gallery from '../components/Gallery'
import Dash_header from '../components/Dash_header'
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
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Site Inspection</h1>
      {/* <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p> */}
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
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
    </div>
  </div>
</section>

      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Match past</h1>
      {/* <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p> */}
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/horserace/1.jpg" width={500} height={300} alt="gallery" className="materialboxed responsive-img w-full object-cover h-full object-center block" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/horserace/2.jpg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
        </div>
        <div className="md:p-2 p-1 w-full">
          <Image src="/img/gallery/horserace/3.jpg" width={900} height={600}  alt="gallery" className="w-full h-full object-cover object-center block"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <Image src="/img/gallery/horserace/4.jpg" width={900} height={600}  alt="gallery" className="w-full h-full object-cover object-center block"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/horserace/5.jpg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/horserace/6.jpg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Stakeholders engagement</h1>
      {/* <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p> */}
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/stakeholders/1.jpg" width={500} height={300} alt="gallery" className="materialboxed responsive-img w-full object-cover h-full object-center block" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/stakeholders/2.jpg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
        </div>
        <div className="md:p-2 p-1 w-full">
          <Image src="/img/gallery/stakeholders/3.jpg" width={900} height={600}  alt="gallery" className="w-full h-full object-cover object-center block"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <Image src="/img/gallery/stakeholders/4.jpg" width={900} height={600}  alt="gallery" className="w-full h-full object-cover object-center block"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/stakeholders/5.jpg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/stakeholders/6.jpg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
        </div>
      </div>
    </div>
  </div>
</section>

<Footer />
    </>
  )
}

export default gallery