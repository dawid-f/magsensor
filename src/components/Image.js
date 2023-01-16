import React, { useContext } from 'react'
import styled from 'styled-components'
import { device } from '../utils/constants'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { GatsbyContext } from '../context/context'
import { AiOutlineClose } from 'react-icons/ai'

// GraphQl query in Context file

const Image = ({ props, imageClass }) => {
  const { photo, setPhoto, handleClick, index } = useContext(GatsbyContext)
  return (
    <Wrapper>
      <section
        role='img'
        className={`${
          photo ? `single-${imageClass}-container` : 'display-none'
        }`}
        onClick={handleClick}
      >
        <button
          aria-label='close modal'
          type='button'
          onClick={() => {
            setPhoto(null)
          }}
          className={`${photo ? 'exit-button' : 'display-none'}`}
        >
          <AiOutlineClose />
        </button>
        <section
          className={`single-${imageClass}-wrapper`}
          onClick={handleClick}
        >
          <article className={`${imageClass}-container`}>
            <GatsbyImage
              imgStyle={{ objectFit: 'scale-down' }}
              style={{
                width: '80%',
                height: '80vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              image={getImage(props[index])}
              alt={props[0].title}
              className={`${imageClass}`}
            />
          </article>
        </section>
      </section>
    </Wrapper>
  )
}

export default Image
const Wrapper = styled.div`
  display: none;
  .single-gallery-container,
  .single-cert-container {
    background-color: var(--overlay-dark);
    transition: var(--transition);
    -webkit-transition: var(--transition);
    -moz-transition: var(--transition);
    -ms-transition: var(--transition);
    -o-transition: var(--transition);
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .single-gallery-wrapper,
  .single-cert-wrapper {
    position: relative;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .gallery-container,
  .cert-container {
    transition: var(--transition);
    -webkit-transition: var(--transition);
    -moz-transition: var(--transition);
    -ms-transition: var(--transition);
    -o-transition: var(--transition);
    position: relative;
    height: auto;
    display: grid;
    place-items: center;
    width: 100%;
  }

  .gallery,
  .cert {
    position: relative;
  }

  .exit-button {
    color: var(--font-clr--on-dark);
    transition: var(--transition);
    -webkit-transition: var(--transition);
    -moz-transition: var(--transition);
    -ms-transition: var(--transition);
    -o-transition: var(--transition);
    cursor: pointer;
    position: absolute;
    background-color: transparent;
    outline: none;
    border: none;
    box-shadow: none;
    z-index: 6;
    top: 3rem;
    left: 2rem;
    font-size: 2rem;
  }

  @media ${device.tablet} {
    display: block;
  }
`
