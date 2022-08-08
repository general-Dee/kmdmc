// import React from 'react'
import Image from "next/image"
import { BellIcon, SearchIcon } from "@heroicons/react/solid"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaBars, FaFacebook } from  "react-icons/fa"
import { FaInstagram } from  "react-icons/fa"
import { FaTwitter } from  "react-icons/fa"
import { motion } from 'framer-motion'
import { sm, logo } from '../components/Animations'
import BasicMenu from "./BasicMenu"




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
        <div className="flex space-x-12 bg-black/40 rounded-xl md:mr-6">
            <motion.div variants={logo} className="bg-white rounded-xl hover:bg-slate-400 transition duration-[.4s] sm:p-0">
              <Link href={"/"}>
                <Image src="/logo.png" width={60} height={70} className="cursor-pointer sm:w-5 sm:h-5 "/>
              </Link>
            </motion.div>
            <BasicMenu />
            <ul className="hidden space-x-5 md:flex item-center">
                <Link href={'/'}><li className="headerLink">Home</li></Link>
                <Link href={'/about'}><li className="headerLink">About</li></Link>
                <Link href={'/contact'}><li className="headerLink">Contact</li></Link>
                <Link href={'/news'}><li className="headerLink">News</li></Link>
                <Link href={'/projects'}><li className="headerLink">Projects</li></Link>
            </ul>
        </div>    

        <motion.div variants={ sm } className="flex item-center space-x-4 mr-6">
          <Link href={"https://twitter.com/KadunaMarkets"}>
            <FaTwitter className= "socialLink" />
          </Link>
          
          <Link href={"https://www.instagram.com/kadunamarkets/?hl=en"}>
            <FaInstagram className= "socialLink" />
          </Link>

          <Link href={"https://web.facebook.com/kmdmc"}>
            <FaFacebook className="socialLink" />
          </Link>
          
        </motion.div>  

        {/* <FaBars className="menuLink"/>   */}
    </header>
  )
}

export default Header