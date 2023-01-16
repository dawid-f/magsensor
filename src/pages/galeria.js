import React, { useContext } from 'react'
import { Layout, Seo, Header, Gallery } from '../components'
import { GatsbyContext } from '../context/context'

const GalleryPage = () => {
  const {
    galleryInfo,
    getGallery,
    nextGalleryImage,
    prevGalleryImage,
  } = useContext(GatsbyContext)

  return (
    <Layout>
      <Seo title='Galeria' />
      <Header title='galeria' />
      <Gallery
        infoProp1={galleryInfo}
        infoProp2={getGallery}
        leftButton={prevGalleryImage}
        rightButton={nextGalleryImage}
        componentClass='gallery'
      />
    </Layout>
  )
}

export default GalleryPage
