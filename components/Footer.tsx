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
                <p className="mt-2 text-sm text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit.</p>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                    <nav className="list-none mb-10">
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">First Link</a>
                    </li>
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                    </li>
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                    </li>
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                    </li>
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                    <nav className="list-none mb-10">
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">First Link</a>
                    </li>
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                    </li>
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                    </li>
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                    </li>
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                    <nav className="list-none mb-10">
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">First Link</a>
                    </li>
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                    </li>
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                    </li>
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                    </li>
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                    <nav className="list-none mb-10">
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">First Link</a>
                    </li>
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                    </li>
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                    </li>
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                    </li>
                    </nav>
                </div>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p className="text-gray-500 text-sm text-center sm:text-left">© 2022 KMDMC — developed by
                    <a href="https://twitter.com/son_of_leke" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@Dre</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                    <Link href={"/dashboard"}>
                        <h2 className='admin_link'>Admin? &nbsp;&nbsp;</h2>
                    </Link>
                    <div className="flex item-center space-x-4">
                        <FaTwitter className= "footerSocialLink" />
                        <FaInstagram className= "footerSocialLink" />
                        <FaFacebook className="footerSocialLink" />
                    </div> 
                </span>
                </div>
            </div>
        </footer>
  )
}

export default Footer