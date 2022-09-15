import Head from 'next/head'
import TNavbar from '@components/Navbar'
import Footer from '@components/Footer'
import Banner from '@components/Banner'
import Message from '@components/Message'
import Support from '@components/Support'
import Features from '@components/Features'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Tabinator</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <TNavbar title="Tabinator" />

      <Banner/>
      <Message/>
      <Features/>
      <Support/>
      <Footer/>
    </div>
  )
}
