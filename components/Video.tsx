import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Video({}: Props) {
  return (
        // <motion.div 
        // initial= {{
        //     y: -80,
        // opacity: .2
        // }}
        // transition= {{duration: .8}}
        // whileInView= {{ opacity: 1, y: 0}}
        // viewport= {{ once: true}}
        // className='w-screen'>
        //     <section className='flex flex-col items-center w-full space-y-5 my-10 py-10 lg:my-24 lg:py-24 w-screen lg:w-[700px] bg-red-300'>
        //         <h1 className="text-xl font-medium title-font mb-4 text-gray-900">End of Year Message (2019)</h1>
        //         <iframe width="700" height="350" src="https://www.youtube.com/embed/-sscEwLauyk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        //     </section>
        // </motion.div>
        <div className='flex flex-col items-center w-screen bg-red-300 overflow-x-hidden'>
            <div className='w-full text-center'>
                <h1 className="text-xl font-medium title-font mb-4 text-gray-900">End of Year Message (2019)</h1>
                <iframe width="700" height="350" src="https://www.youtube.com/embed/-sscEwLauyk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
  )
}

export default Video