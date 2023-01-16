import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { device } from '../utils/constants'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { GatsbyContext } from '../context/context'
import { motion } from 'framer-motion'

// GraphQL query inside Context file

const AboutTherapy = () => {
  const { information } = useContext(GatsbyContext)
  const pathToImage1 = getImage(information[0].image1)

  return (
    <Wrapper className='section'>
      <div className='title'>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {information[0].title}
        </motion.h1>
      </div>
      <section className=' subject-container section-center'>
        <motion.article
          className='photo-wrapper'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <GatsbyImage
            alt={information[0].title}
            image={pathToImage1}
            className='photo'
          />
        </motion.article>
        <motion.article
          className='text'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            {information[0].description.description.slice(0, 304)}... &nbsp;
            <Link to='/informacja' className='info-link'>
              Czytaj dalej
            </Link>
          </p>
        </motion.article>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .subject-container {
    display: grid;
    place-items: center;
    gap: 2rem;
    margin-bottom: var(--m--2);
  }

  .title {
    text-align: center;
    margin-bottom: var(--m--2);
  }

  .photo-wrapper {
    box-shadow: var(--box-shadow--strong);
    border-radius: var(--radius);
    -webkit-border-radius: var(--radius);
    -moz-border-radius: var(--radius);
    -ms-border-radius: var(--radius);
    -o-border-radius: var(--radius);
    height: 16rem;
    width: 100%;
  }

  .photo {
    border-radius: var(--radius);
    -webkit-border-radius: var(--radius);
    -moz-border-radius: var(--radius);
    -ms-border-radius: var(--radius);
    -o-border-radius: var(--radius);
    height: 100%;
    width: 100%;
  }

  h1 {
    margin-bottom: var(--m--1);
  }

  .info-link {
    color: var(--accent-clr);
    text-decoration: underline;
  }

  .point {
    margin-bottom: var(--m--1);
  }

  @media ${device.mobileL} {
    .image {
      max-width: 30rem;
    }
  }

  @media ${device.tablet} {
  }

  @media ${device.laptop} {
    .subject-container {
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
    }
  }
`

export default AboutTherapy
