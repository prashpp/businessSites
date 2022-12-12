import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import ContactBanner from './ContactBanner'
import ContactForm from './ContactForm'

const ContactPage = () => {
  return (
    <div>
        <Header />
        <ContactBanner />
        <ContactForm />
        <Footer />
    </div>
  )
}

export default ContactPage