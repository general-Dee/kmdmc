import React from 'react'
import { FaEnvelope, FaFacebook } from  "react-icons/fa"
import { FaInstagram } from  "react-icons/fa"
import { FaTwitter } from  "react-icons/fa"
import Image from "next/image"
import Link from 'next/link'
import { LocationMarkerIcon, PhoneIcon } from '@heroicons/react/solid'

function Footer() {
  return (
        <footer className="relative mt-screen text-gray-600 bg-slate-200 body-font pt-5">
            <div className="container px-5 py-10 sm:pt-1 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <Image src="/logo.png" width={70} height={80} className="cursor-pointer sm:w-5 sm:h-5"/>
                    <span className="ml-3 text-sm">Kaduna Markets Development and Management Company</span>
                </a>
                <p className="mt-2 text-sm text-gray-500">KMDMC is currently managing over twenty (20) projects across the state, these projects cut across Commercial, Recreation and Hospitality.</p>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Scope of Work</h2>
                    <nav className="list-none mb-10">
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">Distribution of Markets</a>
                    </li>
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">Demarcation of Earmarked Locations</a>
                    </li>
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">Security</a>
                    </li>
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">Health and Safety</a>
                    </li>
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">Media and Publicity</a>
                    </li>
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">Coordination</a>
                    </li>
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">Budget</a>
                    </li>
                    </nav>
                </div> */}
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="footer_heading">Now Selling</h2>
                    <nav className="list-none mb-10">
                    {/* <li>
                        <a className="text-gray-600">&bull;  Neighborhood Centre within Murtala Square</a>
                    </li> */}
                    <li>
                        <Link href={"/galaxymall"}>
                            <a className="text-gray-600">&bull;  Kaduna Galaxy Mall</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/kasuwanmagani"}>
                            <a className="text-gray-600">&bull;  Kasuwan Magani</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/olarm"}>
                            <a className="text-gray-600">&bull;  Markets and Trailer Park at Olam</a>
                        </Link>
                    </li>
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="footer_heading">Ongoing Projects</h2>
                    <nav className="list-none mb-10">
                    <li>
                        <a className="text-gray-600 ">&bull;  Millennium City Market</a>
                    </li>
                    
                    <li>
                        <a className="text-gray-600 ">&bull;  Malali Neighborhood Centre</a>
                    </li>
                    <li>
                        <a className="text-gray-600 ">&bull;  Kawo Market</a>
                    </li>
                    <li>
                        <a className="text-gray-600 ">&bull;  Kasuwan Bacci</a>
                    </li>
                    <li>
                        <a className="text-gray-600 ">&bull;  Neighborhood Centre Zaria</a>
                    </li>
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="footer_heading">News</h2>
                    <nav className="list-none mb-10">
                    
                    <li>                       
                        <Link href={"/news"}>
                            <a className="text-gray-600 hover:text-gray-800">&bull; Gov. El-Rufai - We Will Boost Economic Activities by Providing Modern Markets & Shopping Centres</a>                       
                        </Link>
                    </li>
                    <li>
                        <Link href={"/news"}>
                            <a className="text-gray-600 hover:text-gray-800 text-clip">&bull; Invitation for Expression of Interest (EOI) for the Concession, Operation and Management of the Kaduna State Enterprise Zones (Trailer Parks)</a>
                        </Link>
                    </li>
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="footer_heading">Contact Details</h2>
                    <nav className="list-none mb-10 space-y-5 text-center">
                        <li>
                            <a className="text-gray-600 "><LocationMarkerIcon className='w-5 h-5 mx-auto'/>First Floor, Investment House, 27 Ali Akilu Road, Kaduna.</a>
                        </li>
                        <li>
                            <a className="text-gray-600 "><PhoneIcon className='w-5 h-5 mx-auto'/>+234 903 787 3878</a>
                        </li>
                        <li>
                            <a className="text-gray-600 "><FaEnvelope className='w-5 h-5 mx-auto'/>kaduna.markets@kdsg.gov.ng</a>
                        </li>
                    </nav>
                </div>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p className="text-gray-500 text-sm text-center sm:text-left">© 2022 KMDMC — developed by
                    <a href="https://twitter.com/son_of_leke" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@Dare Oshinowo</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                   
                    <div className="flex item-center space-x-4">
                        <a href={"https://alpha.kadunamarketsportal.com/login"} target={"_blank"} >
                            <h1 className='admin_link'>ERP</h1>
                        </a>
                        <a href={"https://twitter.com/KadunaMarkets"} target={"_blank"} >
                            <FaTwitter className= "footerSocialLink" />
                        </a>
                        <a href={"https://www.instagram.com/kadunamarkets/?hl=en"} target={"_blank"} >
                            <FaInstagram className= "footerSocialLink" />
                        </a>
                        <a href={"https://web.facebook.com/kmdmc"} target={"_blank"} >
                            <FaFacebook className="footerSocialLink" />
                        </a>
                    </div> 
                </span>
                </div>
            </div>
        </footer>
  )
}

export default Footer