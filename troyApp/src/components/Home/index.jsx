import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import About from './About/About'
import Banner from './Banner/Banner'
import BeCertain from './BeCertainSec/BeCertain'
import BenchmarkedSec from './BenchmarkSec/BenchmarkedSec'
import BusinessSection from './Business/BusinessSection'
import ReduceRisk from './ReduceRisk/ReduceRisk'

const Home = () => {
  return (
    <div>
        <Header />
        <Banner />
        <BeCertain />
        <BenchmarkedSec />
        <ReduceRisk />
        <BusinessSection />
        <About />
        <Footer />
    </div>
  )
}

export default Home