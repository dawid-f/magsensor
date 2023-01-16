import React from 'react'
import { Layout, Seo, Header, Contact } from '../components'

const ContactPage = () => {
  return (
    <Layout>
      <Seo title='Kontakt' />
      <Header title='kontakt' />
      <Contact />
    </Layout>
  )
}

export default ContactPage
