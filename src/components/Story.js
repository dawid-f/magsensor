import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { device } from '../utils/constants'
import { motion } from 'framer-motion'
import { GatsbyContext } from '../context/context'
// GraphQL query in Context file

const Story = () => {
  const { storyInfo } = useContext(GatsbyContext)

  const pathToImage = getImage(storyInfo[0].photo)

  return (
    <Wrapper>
      <section className='story-container section section-center'>
        <motion.article
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className='photo-container'
        >
          <div className='frame'></div>
          <GatsbyImage image={pathToImage} alt='Magdalena' className='image' />
        </motion.article>
        <motion.article
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className='text b'
        >
          <h2 className='title'>o mnie</h2>
          <p>{storyInfo[0].description.description}</p>
          <Link to='/o-mnie' className='button btn'>
            Czytaj dalej
          </Link>
        </motion.article>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .story-container {
    display: grid;
    place-items: center;
    position: relative;
    gap: 2rem;
  }

  .text {
    position: relative;
  }

  .title {
    margin-bottom: var(--m--1);
    display: block;
  }

  .button {
    background-color: var(--accent-clr);
    color: var(--font-clr--on-dark);
    padding: 0.7rem 1rem;
  }

  .photo-container {
    position: relative;
  }

  .image {
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

  h2 {
    text-transform: capitalize;
    margin-bottom: var(--m--1);
  }

  p {
    margin-bottom: var(--m--2);
  }

  @media ${device.mobileM} {
    .image {
      width: 15rem;
      height: 15rem;
    }
  }

  @media ${device.mobileL} {
    .image {
      width: 17rem;
      height: 17rem;
    }
  }

  @media ${device.tablet} {
    .image {
      width: 21rem;
      height: 21rem;
    }
  }

  @media ${device.laptop} {
    .story-container {
      /* margin-top: 4rem; */
      padding-top: unset;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
      padding: 5rem 0;
      text-align: unset;
    }

    .story-container > .b {
      grid-column-start: 1;
      grid-row-start: 1;
    }

    .photo-container {
      right: -3rem;
    }

    .image {
      width: 25rem;
      height: 25rem;
    }
  }
`

export default Story
