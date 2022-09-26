import Head from 'next/head'
import Header from '../components/Header'
import Publications from '../components/Publications'


type Props = {}

function publications({}: Props) {
  return (
    // <div>publications</div>
    <>
      <Head>
        <title>Publications &nbsp;|&nbsp; KMDMC</title>
        <link rel="icon" href="/logo.png" />
      </Head>

        <Header/>
        <Publications />
    </>
  )
}

export default publications