import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Line } from './index'
import { useLocation } from '@reach/router'
import { Link, useStaticQuery, graphql } from 'gatsby'
import slugify from 'slugify'
import { device } from '../utils/constants'
import { HiOutlineEmojiHappy } from 'react-icons/hi'

export const importantQuery = graphql`
  {
    allContentfulNews(
      sort: { fields: date, order: DESC }
      filter: { important: { eq: true } }
    ) {
      nodes {
        id
        title
        date
        photo {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const Extra = ({ styles }) => {
  const [extraIndex, setExtraIndex] = useState(0)
  const location = useLocation()
  const importantInfo = useStaticQuery(importantQuery)
  const importantData = importantInfo.allContentfulNews.nodes
  const [posts, setPosts] = useState(importantData)

  // Extra slider
  useEffect(() => {
    const lastIndex = posts.length - 1
    if (extraIndex < 0) {
      setExtraIndex(lastIndex)
    }
    if (extraIndex > lastIndex) {
      setExtraIndex(0)
    }
  }, [extraIndex, posts])

  useEffect(() => {
    let slider = setInterval(() => {
      setExtraIndex(extraIndex + 1)
    }, 2500)
    return () => {
      clearInterval(slider)
    }
  }, [extraIndex])

  return (
    <Wrapper>
      <Line
        lineColor='var(--accent-clr)'
        lineMargin='var(--margin--line-1)'
        lineShadow='var(--box-shadow--card)'
        lineHeight='1px'
        lineWidth='100%'
      />
      <h2>Wyróżnione</h2>
      <section
        className={`${
          importantData.length === 0 ? 'null' : `${styles}--extra-container`
        }`}
      >
        <article className={`${styles}--extra-wrapper`}>
          {importantData.length === 0 && (
            <div className='no-posts'>
              <p>Brak wyróżnionych postów</p>
              <i>
                <HiOutlineEmojiHappy />
              </i>
            </div>
          )}
          {importantData.map(({ id, title, photo, date }, i) => {
            const pathToImage = getImage(photo)
            const newDate = date.split('-').reverse().join('/')
            const slug = slugify(
              title.replace(
                /[^AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻż ]/g,
                ''
              ),
              {
                lower: true,
              }
            )
            {
              let position = 'next-post'
              if (i === extraIndex) {
                position = 'active-post'
              }
              if (
                i === extraIndex - 1 ||
                (extraIndex === 0 && i === importantData.length - 1)
              ) {
                position = 'last-post'
              }
              if (importantData.length === 1) {
                position = 'active-post'
              }

              return (
                <Link
                  to={`/aktualnosci/${slug}`}
                  key={id}
                  className={`${styles}-post ${position}`}
                >
                  {location.pathname ===
                    `/aktualnosci/${slug}
                `}
                  <section className={`${styles}-post--img-wrapper`}>
                    <GatsbyImage
                      image={pathToImage}
                      className={`${styles}-post--img`}
                      alt={title}
                    />
                  </section>
                  <section className={`${styles}-post--text`}>
                    <div className='article-date'>
                      <p className='date-title'>{title}</p>
                      <p className='new-date'>{newDate}</p>
                    </div>
                  </section>
                </Link>
              )
            }
          })}
        </article>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;

  h2 {
    margin-bottom: var(--m--1);
    text-align: center;
    letter-spacing: 1px;
  }

  .newsfeed--extra-container,
  .article--extra-container {
    position: relative;
    display: grid;
    place-items: center;
    overflow: hidden;
    height: 14rem;
  }

  .article-post,
  .newsfeed-post {
    transition: var(--transition);
    -webkit-transition: var(--transition);
    -moz-transition: var(--transition);
    -ms-transition: var(--transition);
    -o-transition: var(--transition);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
  }

  .active-post {
    opacity: 1;
    transform: translateX(0);
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
  }

  .last-post {
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -o-transform: translateX(-100%);
  }

  .next-post {
    transform: translateX(100%);
    -webkit-transform: translateX(100%);
    -moz-transform: translateX(100%);
    -ms-transform: translateX(100%);
    -o-transform: translateX(100%);
  }

  .article-post--img-wrapper,
  .newsfeed-post--img-wrapper {
    border-radius: var(--radius);
    -webkit-border-radius: var(--radius);
    -moz-border-radius: var(--radius);
    -ms-border-radius: var(--radius);
    -o-border-radius: var(--radius);
    box-shadow: var(--box-shadow--strong);
    transition: var(--transition);
    -webkit-transition: var(--transition);
    -moz-transition: var(--transition);
    -ms-transition: var(--transition);
    -o-transition: var(--transition);
    height: 10rem;
  }

  .article-post--img-wrapper:hover {
    box-shadow: var(--box-shadow--light);
  }

  .article-post--img,
  .newsfeed-post--img {
    border-radius: var(--radius);
    -webkit-border-radius: var(--radius);
    -moz-border-radius: var(--radius);
    -ms-border-radius: var(--radius);
    -o-border-radius: var(--radius);
    height: 100%;
    width: 100%;
  }

  .article-post--text::first-letter {
    text-transform: uppercase;
  }

  .no-posts {
    text-align: center;
  }

  .no-posts i {
    color: var(--accent-clr);
    font-size: 3rem;
  }

  .no-posts p {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    text-align: center;
  }

  .article-date {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
  }

  .article-date p {
    margin-top: 0.5rem;
  }

  .date-title {
    font-weight: 500;
  }

  .new-date {
    color: var(--accent-clr);
    font-size: 0.8rem;
  }

  .article-date p:first-letter {
    text-transform: capitalize;
  }

  @media ${device.mobileM} {
    .newsfeed--extra-container,
    .article--extra-container {
      height: 16rem;
    }

    .article-post--img-wrapper,
    .newsfeed-post--img-wrapper {
      height: 12rem;
    }
  }

  @media ${device.mobileL} {
    .newsfeed--extra-container,
    .article--extra-container {
      height: 17rem;
    }

    .article-post--img-wrapper,
    .newsfeed-post--img-wrapper {
      height: 13rem;
    }
  }

  @media ${device.tablet} {
    .newsfeed--extra-container,
    .article--extra-container {
      height: 22rem;
    }

    .article-post--img-wrapper,
    .newsfeed-post--img-wrapper {
      height: 18rem;
    }
  }

  @media ${device.laptop} {
    .newsfeed--extra-container {
      height: 14rem;
      overflow: unset;
    }

    .article--extra-container {
      position: relative;
      display: grid;
      overflow: unset;
      height: unset;
    }

    .newsfeed--extra-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      gap: 2rem;
    }

    .article--extra-wrapper {
      display: grid;
      height: 100%;
      width: 100%;
      gap: 1rem;
    }

    .article-post {
      position: relative;
      display: grid;
      align-items: center;
      grid-template-columns: 40% auto;
      gap: 1rem;
    }

    .article-date {
      display: block;
      align-items: center;
      font-size: 1rem;
    }

    .date p {
      margin-top: unset;
    }

    .article-post--img-wrapper {
      height: 5rem;
    }

    .newsfeed-post--img-wrapper {
      height: 5rem;
    }

    .newsfeed-post {
      grid-template-columns: unset;
      position: relative;
      width: 33.3%;
    }

    .active-post,
    .last-post,
    .next-post {
      opacity: 1;
      transform: unset;
      -webkit-transform: unset;
      -moz-transform: unset;
      -ms-transform: unset;
      -o-transform: unset;
    }
  }
`

export default Extra
