import React from 'react'
import Head from 'next/head'
// import News from '../components/News'
import Header from '../components/Header'
import Footer from '../components/Footer'

function news() {
  return (
    <>
      <Head>
        <title>News &nbsp;|&nbsp; KMDMC</title>
        <link rel="icon" href="/logo.png" />

      </Head>

      <Header />
      {/* <div className='w-screen h-[2vh]'></div> */}
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
        <div className="my-20 w-full ">
          <h1 className='text-4xl'>News</h1>
          <div className="w-[100px] p-[3px] bg-black"></div>
        </div>

        <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">INSPECTION</span>
                <span className="mt-1 text-gray-500 text-sm">22nd July 2022</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">KMDMC officials inspects Kasuwan Barci</h2>
                <p className="leading-relaxed">The AGM Projects and Procurement, Yemi Bakare. Company Secretary/Legal Adviser, Barr Muhammad Sani Suleiman & Manager Stakeholder Relations, Abdulaziz  Umar inspected the ongoing re-construction of Kasuwan Barci Marker. It is one of our numerous market development projects in line with the states urban renewal agenda.</p>
                {/* <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a> */}
              </div>
            </div>
        <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">CONTRACT</span>
                <span className="mt-1 text-gray-500 text-sm">15th July 2022</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">KMDMC official handover of site</h2>
                <p className="leading-relaxed">The Kaduna Markets Development & Management Company has officially handed over to contractors the site to build a Trailer Park, Grains Market,and Bus Terminal at <b>Jere, Kagarko Local Government Area Kaduna State</b>. The Project aims to boost the local agricultural market, provide a mordern system for bus transit services as well as an organized heavy duty truck parking system. </p>
                {/* <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a> */}
              </div>
            </div>

        <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">EVENT</span>
                <span className="mt-1 text-gray-500 text-sm">1st & 2nd July 2022</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">July Tradefair</h2>
                <p className="leading-relaxed">KMDMC hosted the second edition of the #KMDMC Tradefair at Murtala Muhammed Square. The tradefair is inline with our commitment to provide safe and condusive commercial platforms for traders and business owners in Kaduna State. Side activities include a free enterprenurship and business workshop, Mini Football Tournament hosted by Kadunas United Club (KUC), board games by Fasaha cafe, a picnic section, photobooth and kids playing area</p>
                {/* <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a> */}
              </div>
            </div>

            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">SALES</span>
                <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">KMDMC SALE OF SHOPS: Shiek Abubakar Gumi Market Phase 2</h2>
                <p className="leading-relaxed">The Kaduna Markets Development & Management Company is delighted to notify the general public that Shops 54 & 56 Neighbourhood Centres are now available for sale.</p>
                {/* <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a> */}
              </div>
            </div>

          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">EXECUTIVE ADDRESS</span>
                <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Gov. El-Rufai &bull; Official speech</h2>
                <p className="leading-relaxed">We Will Boost Economic Activities by Providing Modern Markets & Shopping Centres</p>
                {/* <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a> */}
              </div>
            </div>
                       
          </div>
        </div>
      </section>
      <div className='w-screen h-[20vh]'></div>
      <Footer />
    </>
  )
}

export default news