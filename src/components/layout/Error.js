import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { device } from '../../utils/constants'
import { HiOutlineEmojiSad } from 'react-icons/hi'

const Error = () => {
  return (
    <Wrapper className='section section-center'>
      <HiOutlineEmojiSad />
      <article>
        <h1>404</h1>
        <h2>Strona nie istnieje.</h2>
        <Link to='/' className='button btn'>
          Powrót na stronę główną
        </Link>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  position: relative;

  h1 {
    font-size: 4rem;
  }

  svg {
    font-size: 7rem;
  }

  .button {
    background-color: var(--accent-clr);
    color: var(--font-clr--on-dark);
    margin-top: 2rem;
  }

  @media ${device.tablet} {
    h1 {
      font-size: 5rem;
    }

    svg {
      font-size: 10rem;
    }
  }

  @media ${device.laptop} {
    h1 {
      font-size: 6rem;
    }

    svg {
      font-size: 15rem;
    }
  }
`
export default Error
