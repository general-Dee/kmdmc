import React from 'react'
import { FaFacebook } from  "react-icons/fa"
import { FaInstagram } from  "react-icons/fa"
import { FaTwitter } from  "react-icons/fa"
import Image from "next/image"
import Link from 'next/link'

function Footer() {
  return (
        <footer className="relative mt-screen text-gray-600 body-font">
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
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Completed Projects</h2>
                    <nav className="list-none mb-10">
                    <li>
                        <a className="text-gray-600">&bull;  Neighborhood Centre within Murtala Square</a>
                    </li>
                    <li>
                        <Link href={"/gallaxymall"}>
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
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">On Going Projects</h2>
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
                        <a className="text-gray-600 ">&bull;  Bacci Market</a>
                    </li>
                    <li>
                        <a className="text-gray-600 ">&bull;  Neighborhood Centre Zaria</a>
                    </li>
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">News</h2>
                    <nav className="list-none mb-10">
                    <li>
                        <Link href={"/news"}>
                            <a className="text-gray-600 hover:text-gray-800">&bull; Gov. El-Rufai - We Will Boost Economic Activities by Providing Modern Markets & Shopping Centres</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/news"}>
                            <a className="text-gray-600 hover:text-gray-800">&bull; Invitation for Expression of Interest (EOI) for the Concession, Operation and Management of the Kaduna State Enterprise Zones (Trailer Parks)</a>
                        </Link>
                    </li>
                    </nav>
                </div>
                {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Sale of shop</h2>
                    <nav className="list-none mb-10">
                    <li>
                        <a className="text-gray-600 ">&bull; New GSM Market</a>
                    </li>
                    <li>
                        <a className="text-gray-600 ">&bull; Unguan Rimi Matket</a>
                    </li>
                    <li>
                        <a className="text-gray-600 ">&bull; Kabala Market</a>
                    </li>
                    <li>
                        <a className="text-gray-600 ">&bull; Tudun Wada Market</a>
                    </li>
                    <li>
                        <a className="text-gray-600 ">&bull; Sheikh Abubakar Gumi Market</a>
                    </li>
                    </nav>
                </div> */}
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p className="text-gray-500 text-sm text-center sm:text-left">© 2022 KMDMC — developed by
                    <a href="https://twitter.com/son_of_leke" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@Dre</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                    {/* <Link href={"/dashboard"}>
                        <h2 className='admin_link'>Admin? &nbsp;&nbsp;</h2>
                    </Link> */}
                    <div className="flex item-center space-x-4">
                        <Link href={"https://alpha.kadunamarketsportal.com/login"}>
                            <h1 className='admin_link'>ERP</h1>
                        </Link>
                        <Link href={"https://twitter.com/KadunaMarkets"}>
                            <FaTwitter className= "footerSocialLink" />
                        </Link>
                        <Link href={"https://www.instagram.com/kadunamarkets/?hl=en"}>
                            <FaInstagram className= "footerSocialLink" />
                        </Link>
                        <Link href={"https://web.facebook.com/kmdmc"}>
                            <FaFacebook className="footerSocialLink" />
                        </Link>
                    </div> 
                </span>
                </div>
            </div>
        </footer>
  )
}

export default Footer