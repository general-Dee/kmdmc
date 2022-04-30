import React from 'react';
import {Zoom} from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";

const Slideshow = () => {
    const images =[
        "img/banner/1.JPG",
        "img/banner/2.JPG",
        "img/banner/3.JPG",
        "img/banner/4.JPG",
        "img/banner/5.JPG",  
    ];

    // need the custom properties
    const zoomInProperties = {
        indicators: true,
        scale: 1.2,
        durarion: 5000,
        transitionDuration: 500,
        infinite: true,

        // custom arrow btn
        prevArrow:(
            <div style={{width:"30px", marginRight:"-30px", cursor:"pointer"}}>
                <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill= "#2e2e2e">
                    {/* this is a simple location path */}
                    <path d="M242 180.6v-138L0 2561242 213.4V331.2h270v180.6z"></path>
                </svg>
            </div>
        ),


        // custom next arrow 
        nextArrow:(
            <div style={{width:"30px", marginLeft:"-30px", cursor:"pointer"}}>
                <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill= "#2e2e2e">
                    {/* this is a simple location path */}
                    <path d="M512 256L270 42.6v138.2H0v150.6h270v138z"></path>
                </svg>
            </div>
        )

    };

    return (
        <div className="m-10">
            {/* use zoomtag by 3rd party & map through each image with layout */}
            <Zoom {...zoomInProperties}>
                {images.map((each,index) => (
                    <div key={index} className="flex justify-center w-full h-full">
                        <img 
                        src={each} 
                        className="w-3/4 object-cover rounded-lg shadow-xl"
                        />
                    </div>
                ))}
            </Zoom>
        </div>
    )
};
export default Slideshow