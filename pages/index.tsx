// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Contact_sec from '../components/Contact_sec'
import Content from '../components/Content'
import Features from '../components/Features'
import Footer from '../components/Footer'
// import Banner2 from '../components/Banner2'
import Header from '../components/Header'
// import Row from '../components/Row'
import { bannerImgs } from '../data/bannerImages'
// import { Props } from '../typings'

interface Props{
  bannerImages: Array<any>
}

const Home = ( {bannerImages}: Props) => {
// console.log(bannerImgs)
  return (
    // bg-gradient-to-b from-white to-slate-900/10
    <div className="h-screen bg-gradient-to-b from-white to-gray-600 lg:h-[140vh]">
      <Head>
        <title>Home &nbsp;|&nbsp; KMDMC</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className='relative pl-4 lg:space-y-24 lg:pl-16'>
           <Banner bannerImages={ bannerImgs }/>
           <section className='absolute left-0 space-y-16'>
             {/* Content seccion */}
             <Content />
             {/* Features */}
             <Features />
             {/* Contact section */}
             <Contact_sec />
             {/* Footer */}
             <Footer />
           </section>
      </main>
    </div>
  )
}

export default Home
