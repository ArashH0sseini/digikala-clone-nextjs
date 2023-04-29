import type { NextPage } from 'next'
import Head from 'next/head'
import Divider from '../app/components/shared/Divider'
import MainHeader from '../app/layouts/MainHeader'
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

      <MainHeader />
      <Navbar />

      <Divider /> 

      <Header />

    </div>
  )
}

export default Home
