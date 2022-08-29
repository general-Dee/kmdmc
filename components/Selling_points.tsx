import { ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/solid'
import React from 'react'
import { FaHouseUser } from 'react-icons/fa'
import { HiLightningBolt } from 'react-icons/hi'

function Selling_points() {
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-2 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
                <ShoppingCartIcon className='w-10 h-10 mx-auto my-5 md:w-14 md:h-14 lg:w-20 lg:h-20 '/>
                <h2 className="title-font font-medium text-2xl md:text-3xl lg:text-5xl text-gray-900">16</h2>
                <p className="leading-relaxed text-xl md:text-2xl lg:text-3xl">Markets</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
                <FaHouseUser className='w-10 h-10 mx-auto my-5 md:w-14 md:h-14 lg:w-20 lg:h-20 '/>
                <h2 className="title-font font-medium text-2xl md:text-3xl lg:text-5xl text-gray-900">+10,000</h2>
                <p className="leading-relaxed text-xl md:text-2xl lg:text-3xl">Shops</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
                <HiLightningBolt className='w-10 h-10 mx-auto my-5 md:w-14 md:h-14 lg:w-20 lg:h-20 '/>
                <h2 className="title-font font-medium text-2xl md:text-3xl lg:text-5xl text-gray-900">5</h2>
                <p className="leading-relaxed text-xl md:text-2xl lg:text-3xl">Impacts</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
                <UserCircleIcon className='w-10 h-10 mx-auto my-5 md:w-14 md:h-14 lg:w-20 lg:h-20 ' />
                <h2 className="title-font font-medium text-2xl md:text-3xl lg:text-5xl text-gray-900">+6.000</h2>
                <p className="leading-relaxed text-md md:text-2xl lg:text-3xl">Verified Customers</p>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Selling_points