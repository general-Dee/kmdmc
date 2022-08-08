import Link from 'next/link'
import React from 'react'

function Content() {
  return (
        <section className= "text-gray-600 body-font bg-white w-screen ">
            <div className="container left-0 z-10 px-5 pb-10 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-500">Projects</h1>
                    <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                </div>
                <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">KMDMC has continued to show its capacity to be the foremost facilitator in commercial real estate development and management in Kaduna. From no capital project in 2019 to 23 projects across Kaduna and over $30 million in assets in 2021. We have diversified the company's overreliance on SAMG by building more modern markets in Kaduna with combined lettable space for over 10,000 residents.</p>
                </div>
                {/* <div className="flex flex-wrap -m-4 relative"> */}
                <div className="flex flex-wrap -m-4 relative cursor-pointer">
                    <Link href={"/projects/gallaxymall"}>
                        <div className="xl:w-1/4 md:w-1/2 p-4 ">
                            <div className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-lg">
                            <img className="h-40 rounded w-full object-cover object-center mb-6" src="/img/gallaxymall/dummy.jpg" alt="content"/>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Kaduna North LGA</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Gallaxy Mall</h2>
                            <p className="leading-relaxed text-base">3 cinemas, 6 restaurants. 48-line shops with over 360 nos. Car parking bays with approximatly 8,834 square meters of gross lettable area within the mall.</p>
                            </div>
                        </div> 
                    </Link>
                    <Link href={"/projects/olarm"}>
                        <div className="xl:w-1/4 md:w-1/2 p-4 cursor-pointer">
                            <div className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-lg">
                            <img className="h-40 rounded w-full object-cover object-center mb-6" src="/img/olarm/4.jpg" alt="content"/>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Zaria LGA</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Olam Farm & Trailer Park</h2>
                            <p className="leading-relaxed text-base">Construction of Mega Petrol and Diesel filling station, 4354 shops, warehouses, market stalls and car parks</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/projects/kasuwanmagani"}>
                        <div className="xl:w-1/4 md:w-1/2 p-4 cursor-pointer">
                            <div className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-lg">
                            <img className="h-40 rounded w-full object-cover object-center mb-6" src="/img/kasuwanmagani/2.jpg" alt="content"/>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Kajuru LGA</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Kasuwan-magani</h2>
                            <p className="leading-relaxed text-base">Sales of Shops, Stalls, Warehouses and Restaurants totalling 6,546 units.</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/projects/coldroom"}>
                        <div className="xl:w-1/4 md:w-1/2 p-4 cursor-pointer">
                            <div className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-lg">
                                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/img/barnawamarket/2.jpg" alt="content"/>
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Kaduna North LGA</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Cold Room</h2>
                                <p className="leading-relaxed text-base">Construction of Mega Petrol and Diesel filling station, 4354 shops, warehouses, market stalls and car parks.</p>
                            </div>
                        </div>
                    </Link>
                </div>
             </div>
        </section>
  )
}

export default Content