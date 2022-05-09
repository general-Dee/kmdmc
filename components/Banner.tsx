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
    setBannerImg(bannerImages[Math.floor(Math.random() * bannerImages.length )])
    // setInterval(() => setFlag(!flag), 9000)
  }, [bannerImages])

  return (
    //   relative pl-0 text-white space-y-2 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12 overflow-x-hidden
    <div className='max-w-4xl overflow-x-hidden flex flex-col'>
        {/* absolute top-0 left-0 -z-8 h-[95vh] w-screen 1349px*/}
      <div className='top-0 left-0 -z-6 h-[95vh] w-screen'>
        <Image 
        src= {`/${bannerImg ? bannerImg.img : ""}`}
        layout= 'fill'
        objectFit='cover'
        className="-z-8 lg:h-[600px]"
        /> 
      </div>
      {/* relative top-[20vh] text-2xl md:text-4xl lg:text-7xl */}
      <h1 className='absolute top-[20vh] left-4 lg:left-8 font-bold text-shadow-md pt-[10px] text-2xl text-white md:text-4xl lg:text-7xl'>
        {`${bannerImg?.title }`}
      </h1>
      {/* relative top-[22vh] text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl */}
      <p className='absolute top-[30vh] md:top-[40vh] lg:top-[50vh] left-4 lg:left-8 text-shadow-md max-w-xs text-white text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>  
        {`${bannerImg?.overview}`}
      </p>
    
      <div className='bannerBtn'>
        <button className='flex item-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transision hover:opacity-75 md:py-2.5 md:px-8 md:text-xl bg-white text-black'> <InformationCircleIcon className='h-5 w-5 md:h-8 md:w-8'/>More Info</button>
      </div>
    </div>

    
  )
}


export default Banner


