import React, { useContext } from 'react'
import styled from 'styled-components'
import { SocialIcons, ContactDetails, Address } from './index'
import { device } from '../utils/constants'
import { GatsbyContext } from '../context/context'

// GraphQL Query in Context file

const Contact = () => {
  const { hoursInfo, addressInfo } = useContext(GatsbyContext)

  return (
    <Wrapper>
      <section className='contact-form-container section section-center'>
        <article className='text-wrapper'>
          <h1 className='title'>Kontakt</h1>
          <p className='sub-title'>
            Jeżeli chcesz zarezerwować wizytę lub masz jakiekolwiek pytania,
            zadzwoń do mnie lub wyślij e-mail!
          </p>
          <section className='contact-wrapper'>
            <article>
              <ContactDetails />
              <SocialIcons iconSize='2rem' />
            </article>
          </section>
        </article>
        <article className='contact-container'>
          <section className='address-container'>
            <Address country={addressInfo[0].country} />
          </section>
          <div className='times-container'>
            {hoursInfo.map(({ id, day, time }) => {
              return (
                <article key={id} className='times'>
                  <p>
                    {day}...... {time}
                  </p>
                </article>
              )
            })}
          </div>
        </article>
        <article className='map-wrapper'>
          <iframe
            title='mapa google'
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2568.024609378837!2d21.896561386230463!3d49.93587950466929!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb2294c79afdb530d!2sDom%20Ludowy%20Babica!5e0!3m2!1spl!2spl!4v1665572795234!5m2!1spl!2spl'
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </article>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .contact-form-container {
    display: grid;
    align-items: center;
    gap: 2rem;
  }

  .map-wrapper {
    box-shadow: var(--box-shadow--card);
    border-radius: var(--radius);
    -webkit-border-radius: var(--radius);
    -moz-border-radius: var(--radius);
    -ms-border-radius: var(--radius);
    -o-border-radius: var(--radius);
    background-color: #f8f8f8;
    position: relative;
    height: 100%;
  }

  iframe {
    width: 100%;
    height: 25rem;
    border: none;
  }

  .info-wrapper {
    margin-top: var(--mt--2);
    display: grid;
  }

  .info-wrapper i {
    position: relative;
    font-size: 1.6rem;
    margin-right: 0.5rem;
    top: -3px;
  }

  .info-wrapper a {
    display: inline-flex;
    text-align: center;
  }

  .text-wrapper {
    position: relative;
    width: 100%;
  }

  .times-wrapper:hover {
    text-decoration: underline;
    color: var(--accent-clr);
  }

  .title {
    margin-bottom: var(--m--1);
  }

  .sub-title {
    margin-bottom: var(--m--2);
  }

  .address-container {
    margin-bottom: var(--m--2);
  }

  .address {
    position: relative;
    margin-bottom: var(--m--2);
  }

  .location-icon {
    position: absolute;
    display: none;
    color: rgba(0, 0, 0, 0.7);
    font-size: 3rem;
    top: -0.5rem;
    left: -3.5rem;
  }

  .button {
    background-color: var(--accent-clr);
    color: var(--font-clr--on-dark);
    border-radius: var(--radius);
    text-transform: capitalize;
    letter-spacing: 2px;
    width: 100%;
    padding: 1rem;
  }

  .message {
    resize: none;
    height: 7rem;
    width: 100%;
  }

  .contact-details {
    margin-bottom: 1rem;
  }

  .contact-details:last-child {
    margin-bottom: 0;
  }

  .contact {
    margin-bottom: 0;
  }

  .icons {
    justify-content: center;
    align-items: center;
    margin-left: -2px;
    margin-top: 0.2rem;
  }

  .social-link {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  .social-link:first-child {
    margin-right: 0.5rem;
  }

  .social-link:hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
  }

  .map {
    margin-bottom: 4rem;
  }

  @media ${device.laptop} {
    .contact-form-container {
      grid-template-columns: auto auto 1fr;
      gap: 4rem;
    }

    iframe {
      height: unset;
      width: 100%;
      height: 100%;
    }

    .address {
      margin-bottom: 1rem;
    }

    .text-wrapper {
      width: 19rem;
    }

    .info-wrapper {
      margin-top: var(--mt--1);
    }

    .map {
      margin-top: 2rem;
    }
  }
`

export default Contact
