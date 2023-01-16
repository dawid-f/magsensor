import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { useLocation } from '@reach/router'

export const seoQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const SEO = ({ title, description, content }) => {
  const location = useLocation()
  const { site } = useStaticQuery(seoQuery)
  return (
    <Helmet
      htmlAttributes={{ lang: 'pl-PL' }}
      title={`${title} | ${site.siteMetadata.title}`}
      link={[
        {
          rel: `canonical`,
          href: `${location.href}`,
        },
      ]}
      meta={[
        {
          name: `og:locale`,
          content: `pl_PL`,
        },
        {
          name: `og:title`,
          content: `${title} | ${site.siteMetadata.title}`,
        },
        {
          name: `og:description`,
          content: `${description || site.siteMetadata.description}`,
        },
        {
          name: `og:site_name`,
          content: `Integracja sensoryczna Babica - Magsensor`,
        },
        {
          name: `og:image`,
          content: `https://images.ctfassets.net/mkslus6he6n2/z3DYVjqiDqRakERiKWPhI/aa47ef80f08fb88653d22ccbae9e89ca/gasienica2.jpg?w=1200&h=800&q=50&fm=webp&bg=transparent`,
        },
        {
          name: `og:image:type`,
          content: `image/jpeg`,
        },
        {
          name: `og:image:width`,
          content: `1200`,
        },
        {
          name: `og:image:height`,
          content: `800`,
        },
        {
          name: `og:url`,
          content: `https://magsensor.pl`,
        },
        {
          name: `twitter:title`,
          content: `${title} | ${site.siteMetadata.title}`,
        },
        {
          name: `twitter:description`,
          content: `${description || site.siteMetadata.description}`,
        },
        {
          name: `twitter:url`,
          content: `https://magsensor.pl`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `description`,
          content: `${description || site.siteMetadata.description}`,
        },
        {
          name: `keywords`,
          content: `Integracja sensoryczna Rzeszów i okolice`,
        },
        {
          name: `robots`,
          content: `index, follow`,
        },
        {
          name: `msapplication-TileColor`,
          content: `#f8f4f4`,
        },
        {
          name: `theme-color`,
          content: `#f8f4f4`,
        },
        {
          name: `google-site-verification`,
          content: `zduYFMNwImXo82pEjLS85jrcCdvrH_sKUMcqWfwOs_Y`,
        },
        {
          property: `type`,
          content: content,
        },
        {
          httpEquiv: `Content-Security-Policy`,
          content: `default-src 'self'; script-src 'self'; connect-src 'self'; img-src 'self'; style-src 'self'; base-uri 'self';`,
        },
      ]}
    ></Helmet>
  )
}

export default SEO
