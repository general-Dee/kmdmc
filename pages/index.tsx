// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Row from '../components/Row'
import { bannerImgs } from '../data/bannerImages'

const Home = () => {
// console.log(bannerImgs)
  return (
    // bg-gradient-to-b from-white to-slate-900/10
    <div className="relative h-[140vh] bg-white overflow-x-hidden">
      <Head>
        <title>Home &nbsp;|&nbsp; KMDMC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className='pl-4 pb-24 lg:space-y-24 lg:pl-16'>
           <Banner bannerImages={ bannerImgs }/>
           <section className='static'>
             <Row />
             <Row />
             <Row />
             <Row />
             <Row />
           </section>

      </main>

    </div>
  )
}

export default Home
