// import React from 'react'
import Image from "next/image"
import { BellIcon, SearchIcon } from "@heroicons/react/solid"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaFacebook } from  "react-icons/fa"
import { FaInstagram } from  "react-icons/fa"
import { FaTwitter } from  "react-icons/fa"




function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if( window.scrollY > 0) {
          setIsScrolled(true)
      } else {
         setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  },[])

  
  return (
    <header className={`${isScrolled && "scrolledHeader"}`}>
        <div className="flex space-x-12">
            <div className="bg-white px-1 rounded-2xl hover:bg-slate-400 transition duration-[.4s] sm:p-0">
              <Image src="/logo.png" width={70} height={80} className="cursor-pointer sm:w-5 sm:h-5"/>
            </div>
            <ul className="hidden space-x-5 md:flex item-center">
                <li className="headerLink">Home</li>
                <li className="headerLink">About</li>
                <li className="headerLink">Contact</li>
                <li className="headerLink">News</li>
                <li className="headerLink">Gallery</li>
            </ul>
        </div>    

        <div className="flex item-center space-x-4">

          <FaTwitter className= "socialLink" />
          
          <FaInstagram className= "socialLink" />

          <FaFacebook className="socialLink" />
          
        </div>    
    </header>
  )
}

export default Header