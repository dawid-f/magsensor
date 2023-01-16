import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import { Header, Layout, Seo, Extra, Line } from '../../components/index'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { device } from '../../utils/constants'
import { AiFillCalendar } from 'react-icons/ai'
import { GatsbyContext } from '../../context/context'

export const query = graphql`
  query getSinglePage($title: String) {
    contentfulNews(title: { eq: $title }) {
      title
      description {
        description
      }
      date
      photo {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
  }
`

const ArticleTemplate = ({ data }) => {
  const {
    title,
    description: { description },
    date,
    photo,
  } = data.contentfulNews

  const { newsInfo } = useContext(GatsbyContext)
  const pathToImage = getImage(photo)
  const newDate = date.split('-').reverse().join('/')
  return (
    <Wrapper>
      <Layout>
        <Seo title={title} description={description} className='seo' />
        <Header title={title} />
        <article className='post-wrapper section section-center'>
          <section className='news-title'>
            <Line
              lineColor='var(--accent-clr)'
              lineMargin='var(--margin--line-1)'
              lineShadow='var(--box-shadow--card)'
              lineHeight='1px'
              lineWidth='100%'
            />
            <section className='text'>
              <h1 className='title'>{title}</h1>
              <section className='date-container'>
                <p className='date'>
                  <i>
                    <AiFillCalendar />
                  </i>
                  {newDate}{' '}
                </p>
              </section>
            </section>
            <section className='news-content'>
              <div className='image-wrapper'>
                <GatsbyImage
                  image={pathToImage}
                  alt={title}
                  className='image'
                />
              </div>
              <div className='text-wrapper'>
                <p>{description}</p>
              </div>
              <Link to='/aktualnosci' className='button btn'>
                Powrót do aktualności
              </Link>
            </section>
          </section>
          <Extra styles='article' />
        </article>
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .post-wrapper {
    display: grid;
    gap: 3rem;
  }

  .title {
    letter-spacing: 2px;
  }

  .title::first-letter {
    text-transform: uppercase;
  }

  .image-wrapper {
    border-radius: var(--radius);
    -webkit-border-radius: var(--radius);
    -moz-border-radius: var(--radius);
    -ms-border-radius: var(--radius);
    -o-border-radius: var(--radius);
    box-shadow: var(--box-shadow--floating);
    margin-bottom: var(--m--2);
    position: relative;
    width: 100%;
    height: 20rem;
  }

  .image {
    border-radius: var(--radius);
    -webkit-border-radius: var(--radius);
    -moz-border-radius: var(--radius);
    -ms-border-radius: var(--radius);
    -o-border-radius: var(--radius);
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .date-container {
    margin-bottom: var(--m--1);
    color: var(--accent-clr);
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .profile-pic {
    background-color: var(--bg-clr--1);
    overflow: hidden;
    display: block;
    border-color: blue;
    z-index: 0;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
  }

  .img {
    position: relative;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    height: 100%;
    width: 100%;
  }

  .written-by {
    margin-left: 0.6rem;
  }

  svg {
    position: relative;
    margin-right: 5px;
    top: 2px;
  }

  .button {
    margin-top: var(--m--2);
    background-color: var(--accent-clr);
    color: var(--font-clr--on-dark);
  }

  @media ${device.laptop} {
    .image-wrapper {
      height: 30rem;
    }

    .post-wrapper {
      grid-template-columns: 75% auto;
      gap: 3rem;
    }
  }
`

export default ArticleTemplate
