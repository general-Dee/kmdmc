import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Video({}: Props) {
  return (
        // <section className="text-gray-600 body-font">
        //     <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
        //     {/* <img className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/> */}
        //     <iframe className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded" width="700" height="350" src="https://www.youtube.com/embed/-sscEwLauyk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        //         <div className="flex flex-col text-center w-full">
        //             <h1 className="text-xl font-medium title-font mb-4 text-gray-900">End of Year Message (2019)</h1>
        //             {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p> */}
        //         </div>
        //     </div>
        // </section>
        <motion.section
        initial= {{
            y: -80,
        opacity: .2
        }}
        transition= {{duration: .8}}
        whileInView= {{ opacity: 1, y: 0}}
        viewport= {{ once: true}}
        className='flex flex-con justify-center space-y-5  my-24 py-24'>
            {/* <h1 className="text-xl font-medium title-font mb-4 text-gray-900">End of Year Message (2019)</h1> */}
            <iframe width="700" height="350" src="https://www.youtube.com/embed/-sscEwLauyk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </motion.section>
  )
}

export default Video