import React from 'react'
import { Layout, Seo, Header, Information } from '../components/index'

const InfoPage = () => {
  return (
    <Layout>
      <Seo title='Informacja' />
      <Header title='Informacja' />
      <Information />
    </Layout>
  )
}

export default InfoPage
