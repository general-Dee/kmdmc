import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Image from "next/image"

function Banner02() {

  return (
    <div className='relative w-screen h-[20vh] md:h-[60vh] overflow-y-hidden'>
        <div className='absolute'/>
        <Carousel
         autoPlay
         infiniteLoop
         showStatus={false}
         showIndicators={false}
         showThumbs={false}
         interval={5000}
         >
            <div className=''>
                <Image loading="lazy" src="/img/banner/1.jpg" alt="" className='bg-contain rounded-md' objectFit='fill' width={1900} height={700}/>
            </div>
            <div>
                {/* <img loading="lazy" src="/img/banner/2.jpg" alt="" /> */}
                <Image loading="lazy" src="/img/banner/2.jpg" alt="" className='bg-contain' objectFit='fill' width={1900} height={700}/>
            </div>
            <div>
                {/* <img loading="lazy" src="/img/banner/3.jpg" alt="" /> */}
                <Image loading="lazy" src="/img/banner/3.jpg" alt="" className='bg-contain' objectFit='fill' width={1900} height={700}/>
            </div>
            <div>
                {/* <img loading="lazy" src="/img/banner/4.jpg" alt="" /> */}
                <Image loading="lazy" src="/img/banner/4.jpg" alt="" className='bg-contain' objectFit='fill' width={1900} height={700}/>
            </div>
            <div>
                {/* <img loading="lazy" src="/img/banner/5.jpg" alt="" /> */}
                <Image loading="lazy" src="/img/banner/5.jpg" alt="" className='bg-contain' objectFit='fill' width={1900} height={700}/>
            </div>
            <div>
                {/* <img loading="lazy" src="/img/banner/6.jpg" alt="" /> */}
                <Image loading="lazy" src="/img/banner/6.jpg" alt="" className='bg-contain' objectFit='fill' width={1900} height={700}/>
            </div>
        </Carousel>
     </div>
  )
}


export default Banner02


