import React from 'react'
import styled from 'styled-components'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'

const SocialIcons = ({ iconSize, iconColor }) => {
  return (
    <Wrapper>
      <article className='icons'>
        <a
          aria-label='link to instagram'
          className='link-to-socialMedia'
          target='_blank'
          rel='noreferrer'
          href='https://www.instagram.com/magsensor'
          style={{ fontSize: iconSize, color: iconColor }}
        >
          <AiFillInstagram />
        </a>
        <a
          aria-label='link to facebook'
          className='link-to-socialMedia'
          target='_blank'
          rel='noreferrer'
          href='https://www.facebook.com/MagsensorBabica'
          style={{ fontSize: iconSize }}
        >
          <AiFillFacebook />
        </a>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .icons {
    justify-content: center;
    align-items: center;
  }

  /* Social Media Icons */
  .link-to-socialMedia {
    transition: var(--transition);
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  .link-to-socialMedia:first-child {
    margin-right: 0.5rem;
  }

  .link-to-socialMedia:hover {
    transform: scale(1.1);
  }
`

export default SocialIcons
