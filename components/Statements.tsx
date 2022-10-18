import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

function Statements() {
  return (
      <section className="text-gray-600 body-font ">
        <div className="container mx-auto flex px-5 py-6 lg:py-24 md:flex-row flex-col items-center">
          <motion.div 
          initial= {{
              x: -100,
          opacity: 0
          }}
          transition= {{duration: .8}}
          whileInView= {{ opacity: 1, x: 0}}
          viewport= {{ once: true}}
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font text-xl md:text-2xl lg:text-3xl mb-4 font-medium text-gray-900">OUR VISION
              {/* <br className="hidden lg:inline-block">readymade gluten/> */}
            </h1>
            <p className="mb-8 leading-relaxed">To provide quality service in an efficient and professional manner to ensure building safety and comfort.</p>
            {/* <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
            </div> */}
          </motion.div>
          <motion.div 
            initial= {{
            y: -100,
            opacity: 0
            }}
            transition= {{duration: 1.5}}
            whileInView= {{ opacity: 1, y: 0}}
            viewport= {{ once: true}}
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font text-xl md:text-2xl lg:text-3xl mb-4 font-medium text-gray-900">OUR MISSION
              {/* <br className="hidden lg:inline-block">readymade gluten/> */}
            </h1>
            <p className="mb-8 leading-relaxed">To deliver excellence in development and facilities management services focusing on sustainable best practice while being led by innovative technology, which satisfies the needs and exceeds the expectations of our customers, business partners and other stakeholders.</p>
            {/* <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
            </div> */}
          </motion.div>
          <motion.div 
          initial= {{
              x: 100,
          opacity: 0
          }}
          transition= {{duration: 2}}
          whileInView= {{ opacity: 1, x: 0}}
          viewport= {{ once: true}}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image width={720} height={600} className="object-cover object-center rounded" alt="hero" src="/statement.jpeg"/>
          </motion.div>
        </div>
      </section>
  )
}

export default Statements