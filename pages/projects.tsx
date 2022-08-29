import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Project from '../components/Project'
import { motion } from 'framer-motion'

function projects() {
  return (
    <>
        <Header />
        <div className='w-screen h-[10vh] sm:h-[5vh]'></div>
        {/* <motion.div variants={projects}> */}
          <section className="text-gray-600 body-font" >
            <div className="container px-5 py-24 mx-auto mt-20">
                <div className="flex flex-col text-center w-full mb-20">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Project Gallery</h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">KMDMC has continued to show its capacity to be the foremost facilitator in commercial real estate development and management in Kaduna. From no capital project in 2019 to 23 projects across Kaduna and over $30 million in assets in 2021. We have diversified the company's overreliance on Sheik Abubakar Mahmud Gumi market by building more modern markets in Kaduna with combined lettable space for over 10,000 residents.</p>
                </div>
            <div className="flex flex-wrap -m-4">

            <Link href={"/projects/msquare"}>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/msquare/2.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">KADUNA NORTH LGA</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Murtala Muhammad Square</h1>
                  <p className="leading-relaxed">The improvement of sports development amonge our youths and providecondisive avenue for residents to exercise.</p>
                </div>
              </div>
            </div>
            </Link>
              <Link href={"/projects/galaxymall"}>
                <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                    <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/galaxymall/6.jpg"/>
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">KADUNA NORTH LGA</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Galaxy Mall</h1>
                        <p className="leading-relaxed">A mall consisting of 3 cinemas, 6 restaurants. 48 line shops with over 360 nos. With approximatly 8,834 square meters of gross lettable area.</p>
                    </div>
                    </div>
                </div>
              </Link>

              <Link href={"/projects/damau"}>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/damau/14.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">KADUNA NORTH LGA</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Damau Household Milk Farm Project</h1>
                  <p className="leading-relaxed">The construction of 3338nr shops, open market stalls, warehouses and parking lots. Phased construction.</p>
                </div>
              </div>
            </div>
            </Link>

          <Link href={"/projects/kasuwanmagaji"}>  
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/kasuwanmagaji/7.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">ZARIA LGA</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Dan Magaji</h1>
                  <p className="leading-relaxed">Construction of 2024 shops, stalls, abattoirs, warehouses, banks, toilets, police station and parking lots. All of which will be available for the recidents.</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/projects/olarm"}>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/olarm/2.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">CHIKUN LGA</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Olam Trailer Park and Grains Market</h1>
                  <p className="leading-relaxed">Construction of Parking Bays for 120 trailers, Grains Market, Travelers Inn, Food Court, Warehouses and Mechanic Workshops.</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/projects/coldroom"}>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="img/coldroom/5.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">KADUNA NORTH LGA</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Cold room</h1>
                  <p className="leading-relaxed">Construction of 208nr shops, 126nr market stalls and parking lots.</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/projects/kasuwanmagani"}>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/kasuwanmagani/7.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">KAJURU LGA KADUNA</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Kasuwan Magani</h1>
                  <p className="leading-relaxed">Construction of 2024 shops, stalls, abattoirs, warehouses, banks, toilets, police station and parking lots.</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/projects/sabomarket"}>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/sabomarket/7.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">KADUNA SOUTH LGA</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Sabon Gari Market</h1>
                  <p className="leading-relaxed">Construction of 3338nr shops, open market stalls, warehouses and parking lots. Phased construction.</p>
                </div>
              </div>
            </div>
            </Link>

          <Link href={"/projects/barnawamarket"}>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/barnawamarket/1.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">KADUNA SOUTH LGA</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Barnawa Modern Market</h1>
                  <p className="leading-relaxed">Construction of 208nr shops, 126nr market stalls and parking lots. </p>
                </div>
              </div>
            </div>
          </Link>

          <Link href={"/projects/kawomarket"}>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/kawomarket/7.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">KADUNA NORTH LGA</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Kawo Market</h1>
                  <p className="leading-relaxed">Construction of 2700nr shops, open market stalls, warehouses and parking lots.</p>
                </div>
              </div>
            </div>
            </Link>

          <Link href={"/projects/gsmvillage"}>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/gsmvillage/1.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">KADUNA NORTH LGA</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">740 (former GSM village)</h1>
                  <p className="leading-relaxed">Construction of 3338nr shops, open market stalls, warehouses and parking lots. Phased construction.</p>
                </div>
              </div>
            </div>
            </Link>
          
          </div>
        </div>
        </section>
        {/* </motion.div> */}
      <div className='w-screen h-[20vh]'></div>
      <Footer />
    </>
  )
}

export default projects