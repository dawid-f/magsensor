import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { device } from '../utils/constants'
import { Image, Loader } from './index'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import { GatsbyContext } from '../context/context'

const Gallery = ({
  infoProp1,
  infoProp2,
  leftButton,
  rightButton,
  componentClass,
}) => {
  const { photo, setPhoto, setIndex, loading, getGalleryFeed } = useContext(
    GatsbyContext
  )

  useEffect(() => {
    getGalleryFeed()
  }, [])

  return (
    <Wrapper>
      {loading ? (
        <section className='section section-center'>
          <Loader />
        </section>
      ) : (
        <section>
          <button
            aria-label='previous image'
            type='button'
            className={`${photo ? 'left-button' : 'display-none'}`}
          >
            <HiOutlineChevronLeft onClick={leftButton} />
          </button>
          <Image props={infoProp2} imageClass={componentClass} />
          <button
            aria-label='next image'
            type='button'
            className={`${photo ? 'right-button' : 'display-none'}`}
          >
            <HiOutlineChevronRight onClick={rightButton} />
          </button>
          <section
            className={`${componentClass}-container section section-center
      `}
          >
            {infoProp1.map(({ id, photos, title }) => {
              return (
                <article key={id} className={`${componentClass}-wrapper`}>
                  {photos.map((gatsbyImageData, i, id) => {
                    return (
                      <div
                        role='button'
                        aria-label='photo'
                        className={`${componentClass}-image-wrapper`}
                        key={i}
                        onClick={() => {
                          setIndex(i)
                          setPhoto(getImage(infoProp2[i]))
                        }}
                      >
                        <GatsbyImage
                          aria-label='photo'
                          className={`${componentClass}-image`}
                          image={getImage(infoProp2[i])}
                          alt={title}
                        />
                      </div>
                    )
                  })}
                </article>
              )
            })}
          </section>
        </section>
      )}
    </Wrapper>
  )
}

export default Gallery

const Wrapper = styled.div`
  .left-button,
  .right-button {
    display: none;
  }

  .left-button {
    left: 0;
  }

  .right-button {
    right: 0;
  }

  .cert-wrapper {
    display: grid;
    place-items: center;
    gap: 2rem;
  }

  .cert-image {
    width: 100%;
    height: 100%;
  }

  .gallery-container {
    position: relative;
  }

  .gallery-wrapper {
    display: grid;
    position: relative;
    gap: 1.5rem;
  }

  .gallery-image-wrapper,
  .cert-image-wrapper {
    transition: var(--transition);
    -webkit-transition: var(--transition);
    -moz-transition: var(--transition);
    -ms-transition: var(--transition);
    -o-transition: var(--transition);
    border-radius: var(--radius);
    -webkit-border-radius: var(--radius);
    -moz-border-radius: var(--radius);
    -ms-border-radius: var(--radius);
    -o-border-radius: var(--radius);
    box-shadow: var(--box-shadow--strong);
    position: relative;
    cursor: pointer;
    max-width: 100%;
  }

  .cert-image-wrapper {
    width: 60%;
  }

  .gallery-image-wrapper {
    border-radius: var(--radius);
    -webkit-border-radius: var(--radius);
    -moz-border-radius: var(--radius);
    -ms-border-radius: var(--radius);
    -o-border-radius: var(--radius);
  }

  .gallery-image {
    border-radius: var(--radius);
    -webkit-border-radius: var(--radius);
    -moz-border-radius: var(--radius);
    -ms-border-radius: var(--radius);
    -o-border-radius: var(--radius);
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 0;
  }

  @media ${device.tablet} {
    .gallery-wrapper {
      grid-template-columns: repeat(2, 1fr);
    }

    .cert-wrapper {
      grid-template-columns: repeat(2, 1fr);
      place-items: unset;
    }

    .cert-image-wrapper {
      width: unset;
    }

    .gallery-image-wrapper {
      height: 15rem;
    }

    .left-button,
    .right-button {
      color: var(--font-clr--on-dark);
      transition: var(--transition);
      -webkit-transition: var(--transition);
      -moz-transition: var(--transition);
      -ms-transition: var(--transition);
      -o-transition: var(--transition);
      cursor: pointer;
      display: block;
      position: fixed;
      background-color: transparent;
      outline: none;
      border: none;
      box-shadow: none;
      z-index: 20;
      font-size: 2rem;
      top: 50%;
      margin: 0 2rem;
    }

    .left-button {
      left: 0;
    }

    .right-button {
      right: 0;
    }
  }

  @media ${device.laptop} {
    .gallery-wrapper {
      grid-template-columns: repeat(3, 1fr);
    }

    .cert-wrapper {
      grid-template-columns: repeat(6, 1fr);
    }

    .gallery-image-wrapper:hover,
    .cert-image-wrapper:hover {
      box-shadow: var(--box-shadow--light);
      transform: scale(1.02);
      -webkit-transform: scale(1.02);
      -moz-transform: scale(1.02);
      -ms-transform: scale(1.02);
      -o-transform: scale(1.02);
    }
  }
`
