import React, { useContext } from 'react'
import styled from 'styled-components'
import { Logo, SocialIcons, ContactDetails, Address } from '../index'
import { device } from '../../utils/constants'
import { GatsbyContext } from '../../context/context'

const Footer = () => {
  const { pathToBlack } = useContext(GatsbyContext)
  return (
    <Wrapper>
      <main className='footer section-center'>
        <section className='footer-header'>
          <article className='logo'>
            <Logo logoColor={pathToBlack} />
          </article>
          <article className='address'>
            <p className='footer-details'>Adres</p>

            <a
              aria-label='link to google maps'
              target='_blank'
              rel='noreferrer'
              href='https://www.google.com/maps/place/Babica+96,+38-120+Babica,+Polska/@49.9349365,21.8981185,64m/data=!3m1!1e3!4m5!3m4!1s0x473cf890b9f62119:0xdc3a37a1b44d7086!8m2!3d49.934892!4d21.8982779'
            >
              <Address />
            </a>
          </article>
          <article className='contact'>
            <p className='footer-details'>kontakt</p>
            <ContactDetails />
          </article>
          <article className='icons'>
            <p className='footer-details'>Social Media</p>
            <SocialIcons iconSize='1.8rem' />
          </article>
        </section>

        <section className='copyright section-center'>
          <p>
            Copyright &copy; {new Date().getFullYear().toString()}
            <span> Magsensor</span>. Wszystkie prawa zastrzeżone.&nbsp;
          </p>
        </section>
      </main>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background-color: var(--accent-clr);
  color: var(--font-clr--on-dark);
  position: relative;
  width: 100%;
  bottom: 0;
  padding-bottom: 1rem;
  letter-spacing: 1px;

  .footer-header {
    display: grid;
    align-items: center;
    width: 100%;
    gap: 2rem;
    padding: 1rem 0;
  }

  .footer-header article {
    display: block;
  }

  .logo {
    width: 120px;
  }

  /* Bottom */
  .copyright {
    border-top: 1px solid var(--font-clr--on-dark);
    padding-top: 1rem;
  }

  .footer-details {
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  a {
    color: var(--font-clr--on-dark);
    transition: var(--transition-quick);
    display: block;
    width: fit-content;
  }

  a:hover {
    text-decoration: underline;
  }

  @media ${device.tablet} {
    .footer-header {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 2rem;
    }

    .logo {
      width: 200px;
    }
  }

  @media ${device.laptop} {
    .footer-header {
      justify-content: center;
      grid-template-columns: repeat(4, 1fr);
      padding: 2.5rem 0;
    }

    .footer-header article {
      text-align: center;
    }

    .icons {
      justify-content: center;
      align-items: center;
    }

    a {
      width: auto;
    }
  }
`

export default Footer
