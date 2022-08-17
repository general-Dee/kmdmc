import React from 'react'
import Footer from './Footer'
import Image from "next/image"
import { ClassNames } from '@emotion/react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Team from './Team'



function About() {
  return (
    <>
        <section className="text-gray-600 body-font">
            <div  className="container px-5 py-24 mx-auto my-20 flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                    <div className="rounded-lg h-84 overflow-hidden p-10 flex justify-center">
                        <Image width={1200} height={500} alt="content" className="object-cover object-center h-full w-full" src="/img/md.jpg" />
                        {/* <h3 className='absolute right-10 bottom-10 z-10'>MD/ CEO </h3> */}
                        {/* <Image src= {"/logo.png"} layout="intrinsic" objectFit='cover' width={90} height={110}/> */}
                    </div>
                    <h3 className='ml-10 font-semibold text-2xl sm:text-lg'>Managing Director / Chief Executive Officer </h3>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="w-12 h-12 p-2 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                <Image src="/logo.png" width={50} height={50} className="cursor-pointer sm:w-5 sm:h-5"/>
                            </div>
                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Kaduna Markets Development and Management Company</h2>
                            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                <p className="text-base">We are currently managing over twenty (20) projects across the state, these projects cut across Commercial, Recreation and Hospitality.</p>
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p className="leading-relaxed text-lg mb-4">We are currently managing over twenty (20) projects across the state, these projects cut across Commercial, Recreation and Hospitality.

                                We are profoundly committed to putting the State as the top destination for Business, Leisure and Recreation in line with the Urban Renewal Agenda of His Excellency.

                                We are working with an array of competent and quality driven contractor even through the Covid-19 pandemic, albeit following strict health and safety guidelines to bring these projects to fruition in a timely manner.

                                One of these projects such as the completion of the remodelling and conversion of Yar'adua Hall has the potential to become the most coveted event centre in Northern Nigeria. At completion, the hall will be a convergence point with more than enough grandeur to rival its international counterparts.

                                The development of Commercial Hubs in Kajuru, Sabon Gari, Kaduna North/South, and Giwa, as an attempt to diversify the company's portfolio have averaged about 45% completion, a few of which is scheduled to be opened before the end of 2020.</p>
                                
                           <Link href={"/about_details"}>
                                <a className="text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                           </Link>
                        </div>
                </div>
            </div>
        </div>
    </section>
    <Team />
    <div className='w-screen h-[10vh]'></div>
    <Footer />
    </>
  )
}

export default About