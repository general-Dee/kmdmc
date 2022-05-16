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
    <div className='max-w-4xl overflow-x-hidden flex flex-col over'>      
      <div className='absolute top-0 left-0 -z-6 h-[95vh] w-screen'>
        <Image 
        src= {`/${bannerImg ? bannerImg.img : ""}`}
        layout= 'fill'
        objectFit='cover'
        // className="-z-8 lg:h-[600px]"
        /> 
      </div>

      {/* absolute top-[20vh] md:top-30 sm:top-20 */}
      <div className="z-10 md:pb-10 sm:pb-20 h-[80vh]">
        <h1 className='font-bold text-shadow-md mt-20 pt-20 text-2xl text-white md:text-4xl lg:text-7xl'>
          {`${bannerImg?.title }`}
        </h1>
        {/* relative top-[22vh] text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl */}
        <p className='text-shadow-md max-w-xs text-white text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>  
          {`${bannerImg?.overview}`}
        </p>
        <button className='bannerBtn '> <InformationCircleIcon className='h-5 w-5 md:h-8 md:w-8'/>
          More Info
        </button>
      </div>
 
    </div>

    
  )
}


export default Banner


