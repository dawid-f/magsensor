require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: '/magsensor',
  siteMetadata: {
    title: 'Magsensor - Rzeszów',
    description:
      'Gabinet integracji sensorycznej Magsensor w Babicy. Rzeszów i okolice. Diagnoza integracji sensorycznej, Terapia metodą integracji sensorycznej, Terapia ręki, TUS',
    keywords: 'magsensor, integracja sensoryczna, terapia',
    siteUrl: `https://www.magsensor.pl`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-background-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-offline`,

    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: ['/aktualnosci/*'],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.magsensor.pl',
        sitemap: 'https://www.magsensor.pl/sitemap/sitemap-0.xml',
        resolveEnv: () => process.env.NODE_ENV,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `tracedSVG`,
          backgroundColor: `transparent`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Magsensor - integracja sensoryczna`,
        short_name: `Magsensor`,
        display: `fullscreen`,
        description: `Integracja sensoryczna`,
        scope: `/`,
        start_url: `/`,
        background_color: `#f8f4f4`,
        theme_color: `#f8f4f4`,
        icon: 'src/assets/images/favicon-512x512.png',
        icons: [
          {
            src: `favicon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: `any maskable`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#5171b0`,
        showSpinner: true,
      },
    },
  ],
}
