// import { async } from "@firebase/util"
// import { getSession } from "next-auth/client"
import Head from 'next/head'
import Banner from '../components/Banner'
import Contact_sec from '../components/Contact_sec'
import Content from '../components/Content'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MenuNav from '../components/BasicMenu'
import { bannerImgs } from '../data/bannerImages'
import { motion } from 'framer-motion'
import { homeContainer } from '../components/Animations'

// export const config = {
//   unstable_runtimeJS: false
// }


interface Props{
  bannerImages: Array<any>
}

const Home = () => {
  return (
    <motion.div className="h-screen bg-gradient-to-b lg:h-[140vh]" 
    variants={homeContainer} 
    initial='hidden' 
    animate='show' 
    exit='hide'>
      <Head>
        <title>Home &nbsp;|&nbsp; KMDMC</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      
      <Header />
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
             <div className='w-screen h-[10vh]'></div>
             <Footer />
           </section>
      </main>
    </motion.div>
  )
}

export default Home

// export async function getServerSideProps(context) {
//   // get the user
//   const session = await getSession(context);

//   return {
//     props: {
//       session
//     }
//   }
// }
