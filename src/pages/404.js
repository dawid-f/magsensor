import React from 'react'
import { Layout, Seo, Header, Error } from '../components/index'

const AboutPage = () => {
  return (
    <Layout>
      <Seo title='Błąd - Nie odnaleziono strony' />
      <Header title='Nie odnaleziono strony' />
      <Error />
    </Layout>
  )
}

export default AboutPage
