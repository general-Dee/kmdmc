import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

function Statements() {
  return (
//     <section className="text-gray-600 body-font overflow-hidden">
//   <div className="container px-5 py-10 mx-auto">
//     <div className="flex flex-wrap -m-12">
//       <div className="p-12 md:w-1/2 flex flex-col items-start">
//         {/* <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">CATEGORY</span> */}
//         <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Our Mission</h2>
//         <p className="leading-relaxed mb-8">To deliver excellence in development and facility management services focusing on sustainable best practices while being led by innovative technology, which satisfies the needs and exceeds the expectations of our customers, business partners and other stakeholders.</p>
//         <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full"></div>
//       </div>
//       <div className="p-12 md:w-1/2 flex flex-col items-start">
//         {/* <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">CATEGORY</span> */}
//         <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">What We Do</h2>
//         <p className="leading-relaxed mb-8">The Kaduna Markets Development and Management Company Limited works in every area of development. We scout for, organize and liaise with developers from different parts of the country interested in joint development projects and enter into any arrangement with any Governments or authorities as a Federal Housing Authority, Municipal/Local Government, any person or Company to improve market experience and convenience of Kaduna residents.</p>
//       </div>
//     </div>
//   </div>
// </section>
<section className="text-gray-600 body-font ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
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