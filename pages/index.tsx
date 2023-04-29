import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../app/layouts/Header'
import Navbar from '../app/layouts/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>فروشگاه اینترنتی دیجی کالا</title>
        <meta name="digikala" content="Digikala Clone NEXT.JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navbar />
    </div>
  )
}

export default Home
