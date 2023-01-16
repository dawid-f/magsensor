import React from 'react'
import styled from 'styled-components'
import { device } from '../utils/constants'
import { Link } from 'gatsby'
import { Loader, Line, Extra } from '.'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import slugify from 'slugify'
import { AiFillCalendar, AiOutlineArrowRight } from 'react-icons/ai'

const NewsFeed = ({ posts, loading }) => {
  return (
    <Wrapper>
      {loading ? (
        <section className='section section-center'>
          <Loader />
        </section>
      ) : (
        <section className='section section-center newsfeed-wrapper'>
          <section className='extra-wrapper'>
            <Extra styles='article' />
            <div className='extra-line'>
              <Line
                lineColor='var(--accent-clr)'
                lineMargin='1rem 0 3rem 0'
                lineShadow='var(--box-shadow--card)'
                lineHeight='1px'
                lineWidth='100%'
              />
            </div>
          </section>
          <div className='newsfeed-container'>
            {posts.map(
              ({ id, title, date, description: { description }, photo }) => {
                const pathToImage = getImage(photo)
                const slug = slugify(
                  title.replace(
                    /[^AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻż ]/g,
                    ''
                  ),
                  {
                    lower: true,
                  }
                )

                const newDate = date.split('-').reverse().join('/')

                return (
                  <article key={id} className='post'>
                    <section className='photo'>
                      <Link to={`/aktualnosci/${slug}`}>
                        <GatsbyImage
                          image={pathToImage}
                          alt={slug}
                          className='image'
                        />
                      </Link>
                    </section>
                    <section className='text'>
                      <Link to={`/aktualnosci/${slug}`}>
                        <h2>{title}</h2>
                      </Link>
                      <div className='line-top'>
                        <Line
                          lineColor='var(--accent-clr)'
                          lineMargin='0.6rem 0 1rem 0'
                          lineShadow='var(--box-shadow--card)'
                          lineHeight='1px'
                          lineWidth='4rem'
                        />
                      </div>
                      <p className='desc'>{description.slice(0, 120)}...</p>
                      <Link to={`/aktualnosci/${slug}`} className='next-button'>
                        CZYTAJ DALEJ <AiOutlineArrowRight />{' '}
                      </Link>
                      <Line
                        lineColor='var(--accent-clr)'
                        lineMargin='1rem  0'
                        lineShadow='var(--box-shadow--card)'
                        lineHeight='1px'
                        lineWidth='100%'
                      />
                      <div className='date'>
                        <p>
                          <i>
                            <AiFillCalendar />
                          </i>
                          {newDate}
                        </p>
                      </div>
                    </section>
                  </article>
                )
              }
            )}
          </div>
        </section>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;

  .post {
    display: grid;
    text-align: center;
    row-gap: 2rem;
    margin-bottom: 5rem;
  }

  .post:last-child {
    margin-bottom: 0;
  }

  .post:first-child {
    margin-top: 2rem;
  }

  .image {
    border-radius: var(--radius);
    -webkit-border-radius: var(--radius);
    -moz-border-radius: var(--radius);
    -ms-border-radius: var(--radius);
    -o-border-radius: var(--radius);
    box-shadow: var(--box-shadow--floating);
    height: 13rem;
  }

  .desc {
    margin-bottom: 1rem;
  }

  .date p {
    /* display: inline-block; */
    display: block;
    float: left;
  }

  h2 {
    letter-spacing: 1px;
  }

  h2::first-letter {
    text-transform: uppercase;
  }

  .next-button {
    color: var(--accent-clr);
    text-align: left;
    cursor: pointer;
    letter-spacing: 1px;
  }

  .next-button:hover {
    text-decoration: underline;
  }

  svg {
    color: var(--accent-clr);
    vertical-align: baseline;
    position: relative;
    margin-right: 0.3rem;
    top: 0.1rem;
  }

  .line-top {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media ${device.mobileL} {
    .image {
      height: 17rem;
    }
  }

  @media ${device.tablet} {
    .image {
      height: 25rem;
    }
  }

  @media ${device.laptop} {
    .post {
      grid-template-columns: 25rem 1fr;
      column-gap: 2rem;
      text-align: left;
      margin-bottom: 4rem;
    }

    .post:first-child {
      margin-top: unset;
    }

    .newsfeed-wrapper {
      display: grid;
      grid-template-columns: 75% auto;
      gap: 3rem;
    }

    .newsfeed-wrapper > .newsfeed-container {
      grid-column-start: 1;
      grid-row-start: 1;
    }

    .extra-line {
      display: none;
    }

    .photo {
      display: grid;
      place-items: center;
    }

    .image {
      height: 18rem;
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .line-top {
      justify-content: flex-start;
    }
  }
`

export default NewsFeed
