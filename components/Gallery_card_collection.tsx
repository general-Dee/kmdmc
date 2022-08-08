import React, { useEffect, useState } from 'react'
// import { olarm } from '../data/olarmImages';
import Card from './Card'
 
interface Props { 
  heading: string
  images: Array<any>
}

function Gallery_card({ heading, images }: Props) {
  // const [photo, setPhoto ] = useState<any>(null) 
  const [photo, setPhoto] = useState<any>(null);
   
  return (
    <>
      <h2 className='text-center text-4xl my-8 mx-auto'>{ heading }</h2>
      <div className="flex flex-wrap -m-4">
        {/*src= {`/${bannerImg ? bannerImg.img : ""}`} */}
        {/* <Card img_dir= {`/${olarm ? olarm[0].img : ""}`} title='Dan Majaji' location='Zaria' discription='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus est error veniam. Praesentium, animi voluptates.'/>
        <Card img_dir= { images[1].img } title='Dan Majaji' location='Zaria' discription='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus est error veniam. Praesentium, animi voluptates.'/>
        <Card img_dir= { images[2].img } title='Dan Majaji' location='Zaria' discription='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus est error veniam. Praesentium, animi voluptates.'/>
        <Card img_dir= { images[3].img } title='Dan Majaji' location='Zaria' discription='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus est error veniam. Praesentium, animi voluptates.'/>
        <Card img_dir= { images[4].img } title='Dan Majaji' location='Zaria' discription='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus est error veniam. Praesentium, animi voluptates.'/>
        <Card img_dir= { images[5].img } title='Dan Majaji' location='Zaria' discription='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus est error veniam. Praesentium, animi voluptates.'/> */}
      </div>
    </>
  )
}

export default Gallery_card