import React, { useContext } from 'react'
import { Layout, Seo, Header, About, Gallery, Line } from '../components'
import { GatsbyContext } from '../context/context'

const AboutPage = () => {
  const { certInfo, getImages, prevImage, nextImage } = useContext(
    GatsbyContext
  )
  return (
    <Layout>
      <Seo title='O mnie' />
      <Header title='o mnie'></Header>
      <About />
      <div className='section-center'>
        <Line
          lineColor='var(--accent-clr)'
          lineMargin='var(--margin--line)'
          lineShadow='var(--box-shadow--card)'
          lineHeight='1px'
          lineWidth='100%'
        />
      </div>
      <Gallery
        infoProp1={certInfo}
        infoProp2={getImages}
        leftButton={prevImage}
        rightButton={nextImage}
        componentClass='cert'
      />
    </Layout>
  )
}

export default AboutPage
