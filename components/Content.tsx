import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

function Content() {
  return (
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
  <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-500">Projects</h1>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
         </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">KMDMC has continued to show its capacity to be the foremost facilitator in commercial real estate development and management in Kaduna. From no capital project in 2019 to 23 projects across Kaduna and over $30 million in assets in 2021. We have diversified the company's overreliance on Sheik Abubakar Mahmud Gumi Market by building more modern markets in Kaduna with combined lettable space for over 10,000 residents.</p>
               </div>
               <motion.div
                transition= {{staggerChildern: 0.1}}
                className="flex flex-wrap -m-4 relative cursor-pointer">
                    <Link href={"/projects/galaxymall"}>
                        <motion.div
                        initial= {{
                            scale: 0.75,
                        opacity: 0
                        }}
                        transition= {{duration: .5}}
                        whileInView= {{ opacity: 1, scale: 1}}
                        viewport= {{ once: true}} 
                        className="xl:w-1/4 md:w-1/2 p-4 ">
                            <div className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-lg">
                            <Image width={720} height={400} className="h-40 rounded w-fulChikun LGAGl object-cover object-center mb-6" src="/img/galaxymall/1.jpeg" alt="content"/>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font mt-4">Kaduna North LGA</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Galaxy Mall</h2>
                            <p className="leading-relaxed text-base">Newly constructed mall containing 3 cinemas, 6 restaurants. 48-line shop with parking facilities </p>
                            </div>
                        </motion.div> 
                    </Link>
                    <Link href={"/projects/olarm"}>
                        <motion.div 
                        initial= {{
                            scale: 0.75,
                        opacity: 0
                        }}
                        transition= {{duration: .7}}
                        whileInView= {{ opacity: 1, scale: 1}}
                        viewport= {{ once: true}} 
                        className="xl:w-1/4 md:w-1/2 p-4 cursor-pointer">
                            <div className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-lg">
                            <Image width={720} height={400} className="h-40 rounded w-full object-cover object-center mb-6" src="/img/olarm/11.jpg" alt="content"/>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font mt-4">Chikun LGA</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Olam Farms Trailer Park and Grain Market</h2>
                            <p className="leading-relaxed text-base">Parking Bays for 120 trailers, Grain Market, Travelers Inn, Food Court, Warehouses and Mechanic Workshops.</p>
                            </div>
                        </motion.div>
                    </Link>
                    <Link href={"/projects/kasuwanmagani"}>
                        <motion.div 
                        initial= {{
                            scale: 0.75,
                        opacity: 0
                        }}
                        transition= {{duration: .9}}
                        whileInView= {{ opacity: 1, scale: 1}}
                        viewport= {{ once: true}} 
                        className="xl:w-1/4 md:w-1/2 p-4 cursor-pointer">
                            <div className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-lg">
                            <Image width={720} height={400} className="h-40 rounded w-full object-cover object-center mb-6" src="/img/kasuwanmagani/10.jpg" alt="content"/>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font mt-4">Kajuru LGA</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Kasuwan Magani</h2>
                            <p className="leading-relaxed text-base">Sales of Shops, Stalls, Warehouses and Restaurants totalling 6,546 units.</p>
                            </div>
                        </motion.div>
                    </Link>
                    <Link href={"/projects/ugwanrimi"}>
                        <motion.div 
                        initial= {{
                            scale: 0.75,
                        opacity: 0
                        }}
                        transition= {{duration: 1.1}}
                        whileInView= {{ opacity: 1, scale: 1}}
                        viewport= {{ once: true}} 
                        className="xl:w-1/4 md:w-1/2 p-4 cursor-pointer">
                            <div className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-lg">
                                <Image width={720} height={400} className="h-40 rounded w-full object-cover object-center mb-6" src="/img/ugwanrimi/1.jpg" alt="content"/>
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font mt-4">Kaduna North LGA</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Ungwan Rimi Market</h2>
                                <p className="leading-relaxed text-base">Commercial hub that is in line with KDSG's urban renewal agenda. It contains 1340 shops of different square meter sizes, warehouses, restrooms and car parking space.</p>
                            </div>
                        </motion.div>
                    </Link>
                </motion.div>
  </div>
</section>
  )
}

export default Content