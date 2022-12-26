
import { Inter } from '@next/font/google'
import Head from 'next/head'
import About from '../Components/About'

import BannerSlide from '../Components/BannerSlide'
import Blog from '../Components/Blog'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import LotteBanner from '../Components/LotteBanner'
import MainBanner from '../Components/MainBanner'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import Stars from '../Components/Stars'
import WhyUs from '../Components/WhyUs'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Travel Next -The Best Travel Agency</title>
      </Head>
      <Navbar />
      <MainBanner />

      <div className="hidden lg:block">
        <Slider />
      </div>

      <div className="block lg:hidden">
        <BannerSlide />
      </div>

      <div>
        <Card />
      </div>

      <div>
        <LotteBanner />
      </div>
      <div className="my-10">
        <Stars />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Blog />
      </div>
      <>
        <Footer />
      </>
    </>
  );
}