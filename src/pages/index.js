import React from 'react'
import {
  Layout,
  Seo,
  Hero,
  Featured,
  Story,
  Subject,
} from '../components/index'

const home = () => {
  return (
    <Layout>
      <Seo title='Integracja sensoryczna' />
      <Hero />
      <Subject />
      <Featured />
      <Story />
    </Layout>
  )
}

export default home
