import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import BusinessBanner from './BusinessBanner'
import BusinessInformation from './BusinessInformation'
import BusinessTable from './BusinessTable'
import "./businessInfo.css"

const BusinessInfoPage = () => {
  return (
    <div>
        <Header />
        <BusinessBanner />
        <BusinessInformation />
        <BusinessTable />
        <Footer />
    </div>
  )
}

export default BusinessInfoPage