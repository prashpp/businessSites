import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import BenchmarkBanner from './BenchmarkBanner'
import BenchmarkBusinessPremium from './BenchmarkBusinessPremium'
import './benchmarkpremium.css'

const BenchmarkPremiumPage = () => {
  return (
    <div>
        <Header />
        <BenchmarkBanner />
        <BenchmarkBusinessPremium />
        <Footer />
    </div>
  )
}

export default BenchmarkPremiumPage