import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

const GatsbyContext = React.createContext()

// Queries
export const query = graphql`
  {
    allFile(
      filter: {
        extension: { regex: "/(png)/" }
        relativePath: { regex: "/logo-magsensor/" }
      }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }

    allContentfulNews(sort: { fields: date, order: DESC }) {
      nodes {
        id
        title
        date
        important
        description {
          description
        }
        photo {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }

    allContentfulOffer(sort: { fields: title }) {
      nodes {
        id
        title
        price
        currency
        duration
        description {
          description
        }
        photo {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
        }
      }
    }

    allContentfulContact {
      nodes {
        id
        email
        number
      }
    }

    allContentfulHours(sort: { fields: createdAt }) {
      nodes {
        id
        day
        time
      }
    }

    allContentfulAddress {
      nodes {
        id
        street
        town
        country
      }
    }

    allContentfulInformation {
      nodes {
        id
        title
        title2
        description {
          description
        }
        image1 {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
        image2 {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
        image3 {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }

    allContentfulCertificates {
      nodes {
        id
        photos {
          id
          title
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }

    allContentfulStory {
      nodes {
        id
        description {
          description
        }
        photo {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }

    allContentfulImages {
      nodes {
        id
        photos {
          id
          title
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
`

//Provider, Consumer
const GatsbyProvider = ({ children }) => {
  // State
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [photo, setPhoto] = useState(null)
  const [loading, setLoading] = useState(true)
  const [newsData, setNewsData] = useState([])
  const [galleryData, setGalleryData] = useState([])
  const [index, setIndex] = useState(0)
  const [newsLength, setNewsLength] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(5)

  // Query
  const data = useStaticQuery(query)

  // Logo Data
  const blackLogo = data.allFile.nodes[0]
  const whiteLogo = data.allFile.nodes[1]
  const pathToBlack = getImage(whiteLogo)
  const pathToWhite = getImage(blackLogo)

  // Offer and Pricing Data
  const offerInfo = data.allContentfulOffer.nodes

  // Contact and Footer
  const contactInfo = data.allContentfulContact.nodes
  const hoursInfo = data.allContentfulHours.nodes
  const addressInfo = data.allContentfulAddress.nodes

  // Information
  const information = data.allContentfulInformation.nodes

  // Certificates
  const certInfo = data.allContentfulCertificates.nodes

  // Story
  const storyInfo = data.allContentfulStory.nodes

  // Images
  const galleryInfo = data.allContentfulImages.nodes

  const newsInfo = data.allContentfulNews.nodes

  // -----------------------

  // Images prop
  let getImages = certInfo[0].photos
  let getGallery = galleryInfo[0].photos

  // ---- Functions ----

  // Loader
  const getGalleryFeed = () => {
    setGalleryData(galleryInfo)
    setLoading(false)
  }
  // ------

  // Sort images in Certificates
  const checkNumber = (number) => {
    if (number > getImages.length - 1) {
      return 0
    }
    if (number < 0) {
      return getImages.length - 1
    }
    return number
  }

  // Next image
  const nextImage = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }

  // Previous image
  const prevImage = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }
  // -----

  // Sort images in Gallery
  const checkGalleryNumber = (number) => {
    if (number > getGallery.length - 1) {
      return 0
    }
    if (number < 0) {
      return getGallery.length - 1
    }
    return number
  }

  // Next image
  const nextGalleryImage = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkGalleryNumber(newIndex)
    })
  }

  // Previous image
  const prevGalleryImage = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkGalleryNumber(newIndex)
    })
  }
  // -----

  // Paginate
  useEffect(() => {
    const getNewsFeed = () => {
      setNewsData(newsInfo)
      setLoading(false)
    }
    getNewsFeed()
  }, [])

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = newsData.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // -----

  return (
    <GatsbyContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        photo,
        setPhoto,
        loading,
        setLoading,
        getImages,
        getGallery,
        index,
        setIndex,
        nextImage,
        prevImage,
        nextGalleryImage,
        prevGalleryImage,
        // Logo
        pathToWhite,
        pathToBlack,
        // Offer
        offerInfo,
        // Contact and Footer
        contactInfo,
        hoursInfo,
        addressInfo,
        // Information
        information,
        // Certificates
        certInfo,
        // Story
        storyInfo,
        // Gallery
        galleryInfo,
        getGalleryFeed,
        // NewsFeed
        newsData,
        setNewsData,
        newsInfo,
        newsLength,
        setNewsLength,
        // Paginate & posts
        currentPosts,
        currentPage,
        setCurrentPage,
        paginate,
        postsPerPage,
      }}
    >
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
