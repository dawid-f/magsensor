import React, { useContext } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'
import { device } from '../utils/constants'
import { GatsbyContext } from '../context/context'

export const heroQuery = graphql`
  {
    allContentfulHeroInfo {
      nodes {
        id
        title
        description {
          description
        }
        image {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const Hero = () => {
  // Query
  const data = useStaticQuery(heroQuery)
  const heroInfo = data.allContentfulHeroInfo.nodes
  const pathToImage = getImage(heroInfo[0].image.gatsbyImageData)
  const bgImage = convertToBgImage(pathToImage)

  // Context
  const { isSidebarOpen } = useContext(GatsbyContext)
  return (
    <Wrapper>
      <BackgroundImage {...bgImage} alt='tlo' preserveStackingContext>
        <div className='overlay' style={{ zIndex: '-3' }}></div>
        <article className='photo'></article>
        <section
          className={`${
            isSidebarOpen
              ? 'hero-wrapper section-center section sidebar-open'
              : 'hero-wrapper section-center section sidebar-closed'
          }`}
        >
          <article className='text'>
            <p className='description'>{heroInfo[0].description.description}</p>
            <p className='author'>{heroInfo[0].title}</p>
            <Link to='/oferta' className='btn button'>
              Nasza oferta
            </Link>
          </article>
        </section>
      </BackgroundImage>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  position: relative;
  z-index: 1;

  .hero-wrapper {
    transition: var(--transition-quick);
    -webkit-transition: var(--transition-quick);
    -moz-transition: var(--transition-quick);
    -ms-transition: var(--transition-quick);
    -o-transition: var(--transition-quick);
    color: var(--font-clr--on-dark);
    text-align: center;
    display: grid;
    position: relative;
    place-items: center;
    background-color: transparent;
    min-height: 100vh;
    margin-top: -8rem;
  }

  .sidebar-open {
    margin-top: 0;
  }

  .text {
    position: relative;
    z-index: 1;
  }

  .photo {
    display: none;
  }

  .button {
    background-color: var(--accent-clr);
    color: var(--font-clr--on-dark);
  }

  h1 {
    margin-bottom: var(--m--1);
  }

  .author {
    margin-bottom: var(--m--2);
    font-size: 0.8rem;
    letter-spacing: 1px;
    color: rgba(235, 235, 235);
  }

  @media ${device.mobileL} {
    .text {
      margin-top: 2rem;
    }
  }

  @media ${device.tablet} {
    .description {
      font-size: 1.2rem;
    }
  }

  @media ${device.laptop} {
    .hero-wrapper {
      padding: unset;
      column-gap: unset;
      text-align: unset;
      grid-template-columns: repeat(2, 1fr);
      height: 100vh;
      margin-top: -8rem;
    }

    .description {
      font-size: 1.3rem;
    }

    .photo {
      display: block;
    }

    .text {
      top: -4rem;
      margin-top: 12rem;
    }

    .author {
      margin-right: 3rem;
    }
  }

  @media ${device.laptopL} {
    .hero-wrapper {
      column-gap: 20rem;
    }
  }
`
export default Hero
