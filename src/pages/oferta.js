import React from 'react'
import { Offer } from '../components/index'
import { Layout, Seo, Header } from '../components/index'

const OfferPage = () => {
  return (
    <Layout>
      <Seo title='Oferta' />
      <Header title='oferta' />
      <Offer />
    </Layout>
  )
}

export default OfferPage
