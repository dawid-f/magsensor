import React from 'react'
import styled from 'styled-components'
import { MdWavingHand } from 'react-icons/md'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { device } from '../utils/constants'

export const aboutQuery = graphql`
  {
    allContentfulAbout {
      nodes {
        id
        title
        paragraph1 {
          paragraph1
        }
        paragraph2 {
          paragraph2
        }
        paragraph3 {
          paragraph3
        }
        photo {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(aboutQuery)
  const aboutInfo = data.allContentfulAbout.nodes
  return (
    <Wrapper>
      {aboutInfo.map(
        ({
          id,
          title,
          paragraph1: { paragraph1 },
          paragraph2: { paragraph2 },
          paragraph3: { paragraph3 },
          photo: { gatsbyImageData },
        }) => {
          const pathToImage = getImage(gatsbyImageData)
          return (
            <section key={id} className='about-container section'>
              <article className='about-1 section-center'>
                <div className='photo'>
                  <div className='frame'></div>
                  <GatsbyImage
                    image={pathToImage}
                    alt={title}
                    className='about-img'
                  />
                </div>
                <div className='text'>
                  <h1>
                    {title}
                    <MdWavingHand />
                  </h1>
                  <p>{paragraph1}</p>
                  <p>{paragraph2}</p>
                  <p>{paragraph3}</p>
                </div>
              </article>
            </section>
          )
        }
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .about-container {
    display: grid;
    gap: 4rem;
  }

  .about-1,
  .about-2 {
    display: grid;
    place-items: center;
    gap: 2rem;
  }

  .text h1 {
    text-align: left;
  }

  .button {
    background-color: var(--accent-clr);
    color: var(--font-clr--on-dark);
    padding: 0.7rem 1rem;
    border-radius: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    -ms-border-radius: 0;
    -o-border-radius: 0;
  }

  .photo {
    position: relative;
  }

  .about-img {
    box-shadow: var(--box-shadow--strong);
    position: relative;
    display: block;
    z-index: 0;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    width: 13rem;
    height: 13rem;
  }

  .frame {
    background-color: var(--accent-clr);
    box-shadow: var(--box-shadow--floating);
    position: absolute;
    top: -1%;
    left: 2%;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
  }

  h1 {
    margin-bottom: var(--m--1);
    text-transform: capitalize;
    svg {
      color: #d7a95b;
      position: relative;
      top: 4px;
      left: 0.5rem;
    }
  }

  p {
    padding-bottom: var(--m--1);
  }

  @media ${device.mobileM} {
    .about-img {
      width: 15rem;
      height: 15rem;
    }
  }

  @media ${device.mobileL} {
    .about-img {
      width: 17rem;
      height: 17rem;
    }
  }

  @media ${device.tablet} {
    .about-img {
      width: 21rem;
      height: 21rem;
    }
  }

  @media ${device.laptop} {
    .about-1,
    .about-2 {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 4rem;
    }

    .text h1 {
      text-align: unset;
    }

    .about-img {
      width: 25rem;
      height: 25rem;
    }

    p {
      margin-bottom: unset;
    }

    .button:hover {
      background-color: var(--accent-clr--hover);
    }
  }
`

export default About
