import React from 'react'
import BenchmarkBanner from '../BenchmarkBusinessPremium/BenchmarkBanner'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import BenchmarkBusiness from './BenchmarkBusiness'
import './bechmarkBusiness.css'
import BusinessTypes from './BusinessTypes'
import BenchmarkBusinessIframe from './BenchmarkBusinessIframe'

const BenchmarkBusinessPage = () => {
  return (
    <div>
        <Header />
        <BenchmarkBanner />
        <BenchmarkBusiness />
        <BenchmarkBusinessIframe />
        <BusinessTypes />
        
        <Footer />
    </div>
  )
}

export default BenchmarkBusinessPage