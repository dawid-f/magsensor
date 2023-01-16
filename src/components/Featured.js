import React from 'react'
import styled from 'styled-components'
import { device } from '../utils/constants'
import { useStaticQuery, graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

export const featuredQuery = graphql`
  {
    allContentfulFeatured(sort: { fields: createdAt }) {
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

const Featured = () => {
  const data = useStaticQuery(featuredQuery)
  const featuredInfo = data.allContentfulFeatured.nodes
  return (
    <Wrapper>
      <article className='featured-container section'>
        <section className='title section-center'>
          <h2 className='title'>Dlaczego Magsensor?</h2>
        </section>
        <section className='featured-wrapper section-center'>
          {featuredInfo.map(
            ({
              id,
              title,
              description: { description },
              image: { gatsbyImageData },
            }) => {
              const pathToImage = getImage(gatsbyImageData)
              return (
                <section key={id} className='card-wrapper'>
                  <div className='icon-container'>
                    <section className='image'>
                      <GatsbyImage
                        image={pathToImage}
                        alt={title}
                        className='img'
                      />
                    </section>
                  </div>
                  <article className='card'>
                    <p className='card-title'>{title}</p>
                    <p>{description}</p>
                  </article>
                </section>
              )
            }
          )}
        </section>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .card-wrapper {
    background-color: var(--bg-clr--card);
    padding: var(--padding--card--sm);
    box-shadow: var(--box-shadow--strong);
    border-radius: var(--radius);
    transition: var(--transition);
    -webkit-border-radius: var(--radius);
    -moz-border-radius: var(--radius);
    -ms-border-radius: var(--radius);
    -o-border-radius: var(--radius);
    -webkit-transition: var(--transition);
    -moz-transition: var(--transition);
    -ms-transition: var(--transition);
    -o-transition: var(--transition);
    height: 100%;
  }

  .card {
    padding: 2rem;
  }

  .card div {
    height: 2rem;
  }

  .card-title {
    font-size: 24px;
  }

  .title {
    margin-bottom: 4rem;
  }

  h2,
  h3 {
    color: var(--accent-clr);
    text-align: center;
  }

  h4 {
    text-align: center;
  }

  .icon-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 2rem;
    top: -2rem;
  }

  .img {
    position: relative;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    height: 100%;
  }

  .image {
    background-color: var(--bg-clr--1);
    position: absolute;
    overflow: hidden;
    display: block;
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    z-index: 0;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
  }

  svg {
    color: var(--font-clr--on-light);
    position: relative;
    top: 0.9rem;
    left: 0.5px;
    font-size: 2rem;
  }

  .photo {
    margin-top: var(--mt--1);
  }

  .none {
    display: none;
  }

  .title {
    text-align: center;
  }

  @media ${device.tablet} {
    .photo {
      margin-top: var(--mt--2);
    }

    .image {
      width: 9rem;
      height: 9rem;
    }

    .featured-container {
      padding-bottom: 5rem;
    }
  }

  @media ${device.laptop} {
    .featured-container {
      padding-bottom: unset;
      column-gap: unset;
      column-gap: 1rem;
    }

    .title {
      text-align: center;
      justify-content: center;
      grid-template-rows: auto 1fr;
      width: 40rem;
    }

    .featured-wrapper {
      grid-template-columns: repeat(3, 1fr);
    }

    .card-wrapper {
      place-items: center;
      padding: unset;
    }

    .card-text {
      padding: 0 2rem;
    }

    .padding--featured {
      padding: unset;
      padding: 2rem;
    }

    .photo {
      margin-top: unset;
    }

    .image {
      width: 10rem;
      height: 10rem;
    }

    .grid-off {
      grid-template-columns: unset;
    }

    .card-wrapper:hover {
      transform: scale(var(--scale));
      -webkit-transform: scale(var(--scale));
      -moz-transform: scale(var(--scale));
      -ms-transform: scale(var(--scale));
      -o-transform: scale(var(--scale));
      box-shadow: var(--box-shadow--light);
    }
  }

  .featured-container {
    background-color: var(--accent-clr);
    position: relative;
    padding-bottom: 5rem;
  }

  .title {
    color: var(--font-clr--on-dark);
    position: relative;
    display: grid;
  }

  .title p {
    margin-bottom: 3rem;
  }

  .featured-wrapper {
    position: relative;
    text-align: center;
    display: grid;
    padding: 4rem 0 0 0;
    row-gap: 7rem;
    column-gap: 2rem;
  }

  h3,
  p {
    margin-bottom: 0.5rem;
  }
`

export default Featured
