// import React from 'react'
import { useState, useEffect } from "react"
import { bannerImgs } from "../data/bannerImages";
import Image from "next/image"

interface Props {
    bannerImages: Array<any>
}

function Banner2({ bannerImages }: Props) {
    const [bannerImg, setbannerImg] = useState<any>(null);

    useEffect(() => {
        setbannerImg(
            bannerImages[Math.floor(Math.random() * bannerImages.length)]
        )
    }, [bannerImages])

    // console.log(bannerImg)

  return (
    <div>
        <div>
            <Image 
                src={`/${bannerImg? bannerImg.img : ""}`}
                layout = 
            />
        </div>
    </div>
  )
}

export default Banner2