// import React from 'react'
import Image from "next/image"
import { BellIcon, SearchIcon } from "@heroicons/react/solid"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaFacebook } from  "react-icons/fa"
import { FaInstagram } from  "react-icons/fa"
import { FaTwitter } from  "react-icons/fa"
import { motion } from 'framer-motion'
import { sm, logo } from '../components/Animations'




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
            <motion.div variants={logo} className="bg-white px-1 rounded-2xl hover:bg-slate-400 transition duration-[.4s] sm:p-0">
              <Link href={"/"}>
                <Image src="/logo.png" width={70} height={80} className="cursor-pointer sm:w-5 sm:h-5"/>
              </Link>
            </motion.div>
            <ul className="hidden space-x-5 md:flex item-center">
                <Link href={'/'}><li className="headerLink">Home</li></Link>
                <Link href={'/about'}><li className="headerLink">About</li></Link>
                <Link href={'/contact'}><li className="headerLink">Contact</li></Link>
                <Link href={'/news'}><li className="headerLink">News</li></Link>
                <Link href={'/gallery'}><li className="headerLink">Gallery</li></Link>
            </ul>
        </div>    

        <motion.div variants={ sm } className="flex item-center space-x-4">

          <FaTwitter className= "socialLink" />
          
          <FaInstagram className= "socialLink" />

          <FaFacebook className="socialLink" />
          
        </motion.div>    
    </header>
  )
}

export default Header