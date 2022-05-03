// import React from 'react'
import {useState , useEffect} from 'react'
import Image from "next/image"
import { InformationCircleIcon } from '@heroicons/react/solid';


interface Props {
  bannerImages: Array<any>;
}

function Banner({bannerImages}: Props) {
  const [bannerImg, setBannerImg] = useState<any>(null);
  // const [flag, setFlag] = useState<boolean>(true)

  useEffect(() => {
    setBannerImg(bannerImages[Math.floor(Math.random() * bannerImages.length  )])
    // setInterval(() => setFlag(!flag), 9000)
  }, [/*flag*/])

  return (
    <div className='relative pl-0 text-white space-y-2 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
      <div className='absolute top-0 left-0 -z-9 h-[95vh] w-screen '>
        <Image 
        src= {`/${bannerImg ? bannerImg.img : ""}`}
        layout= 'fill'
        objectFit='cover'
        className=''
        /> 
      </div>
      <h1 className='relative top-[15vh] text-2xl md:text-4xl lg:text-7xl'>
        {`${bannerImg?.title}`}
      </h1>
      <p className='relative top-[18vh] text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>
        {`${bannerImg?.overview}`}
      </p>
    

      <div className='relative top-[20vh]'>
        <button className='flex item-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transision hover:opacity-75 md:py-2.5 md:px-8 md:text-xl bg-white text-black'> <InformationCircleIcon className='h-5 w-5 md:h-8 md:w-8'/>More Info</button>
      </div>
    </div>

    
  )
}


export default Banner


