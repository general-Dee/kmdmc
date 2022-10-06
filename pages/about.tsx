import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'



function about() {
  return (
    <>
      <Head>
        <title>About &nbsp;|&nbsp; KMDMC</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div>
        <Header />

        <About />

      </div>
      
    </>
    
  )
}

export default about