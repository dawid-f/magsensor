import React, { useContext } from 'react'
import styled from 'styled-components'
import { device } from '../utils/constants'
import { Line } from './index'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { GatsbyContext } from '../context/context'

// GraphQL Query inside Context files

const Offer = () => {
  const { offerInfo } = useContext(GatsbyContext)
  const location = useLocation()

  return (
    <Wrapper>
      <section className='offer-container section section-center'>
        {offerInfo.map((item, i) => {
          const {
            id,
            title,
            price,
            currency,
            duration,
            description: { description },
            photo: { gatsbyImageData },
          } = item
          const pathToImage = getImage(gatsbyImageData)
          return (
            <article
              key={id}
              className={`${
                location.pathname === '/oferta'
                  ? 'offer-wrapper section-center'
                  : 'pricing-wrapper'
              }`}
            >
              <div className='card-text a'>
                <h3>{title}</h3>
                <Line
                  lineColor='var(--accent-clr)'
                  lineMargin='var(--margin--line)'
                  lineShadow='var(--box-shadow--card)'
                  lineHeight='2px'
                  lineWidth='2rem'
                />
                <p>{description}</p>
                {location.pathname !== '/cennik' && (
                  <Link to='/cennik' className='btn button'>
                    Zobacz cennik
                  </Link>
                )}
                {location.pathname === '/cennik' && (
                  <article className='price-a'>
                    <Line
                      lineColor='var(--accent-clr)'
                      lineMargin='var(--margin--line)'
                      lineShadow='var(--box-shadow--card)'
                      lineHeight='1px'
                      lineWidth='100%'
                    />
                    <div className='price-a--details'>
                      <h4>{price}</h4>
                      <h4>{currency}</h4>
                      &nbsp;
                      {duration !== 'null' && <h4>({duration})</h4>}
                    </div>
                    <Line
                      lineColor='var(--accent-clr)'
                      lineMargin='var(--margin--line)'
                      lineShadow='var(--box-shadow--card)'
                      lineHeight='1px'
                      lineWidth='100%'
                    />
                  </article>
                )}
                <Link to='/kontakt' className='btn button'>
                  Zapytaj o wizytę
                </Link>
              </div>
              {location.pathname === '/cennik' && (
                <article className='price-b'>
                  <div className='price-b--wrapper'>
                    <section className='price-b--details'>
                      <div>
                        <h4>{price}</h4>
                        <h4>{currency}</h4>
                        &nbsp;
                        {duration !== 'null' && <h4>({duration})</h4>}
                      </div>
                    </section>
                  </div>
                </article>
              )}
              {location.pathname !== '/cennik' && (
                <div className='image-wrapper b'>
                  <GatsbyImage
                    alt={title}
                    image={pathToImage}
                    className='image'
                  />
                </div>
              )}
            </article>
          )
        })}
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .offer-container {
    display: grid;
    position: relative;
    gap: 3rem;
  }

  .offer-wrapper,
  .pricing-wrapper {
    background-color: var(--bg-clr--card);
    box-shadow: var(--box-shadow--card);
    border-radius: var(--radius);
    -webkit-border-radius: var(--radius);
    -moz-border-radius: var(--radius);
    -ms-border-radius: var(--radius);
    -o-border-radius: var(--radius);
    display: grid;
    position: relative;
    height: 100%;
    width: 100%;
  }

  .price-a {
    text-align: center;
    font-size: 1.3rem;
  }

  .price-b {
    display: none;
    position: relative;
    width: 100%;
    height: 100%;
  }

  .offer-wrapper > .b {
    grid-column-start: 1;
    grid-row-start: 1;
  }

  .line--b {
    display: none;
  }

  .card-text {
    margin: var(--margin--card--text);
  }

  .image-wrapper {
    width: 100%;
    height: 13rem;
    position: relative;
  }

  .image {
    width: 100%;
    height: 100%;
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
  }

  h4 {
    display: inline-block;
    color: var(--accent-clr);
  }

  .icon-container {
    position: relative;
    padding: 2rem;
  }

  .none {
    display: none;
  }

  .button {
    background-color: var(--accent-clr);
    color: var(--font-clr--on-dark);
    margin-top: var(--mt--1);
    display: block;
    margin: 0 auto;
    margin-top: 1rem;
  }

  @media ${device.tablet} {
    .image-wrapper {
      display: block;
      height: unset;
      height: 100%;
    }
  }

  @media ${device.laptop} {
    .image-wrapper {
      margin-top: unset;
      padding: unset;
    }

    .image {
      border-top-right-radius: var(--radius);
      border-bottom-right-radius: var(--radius);
      border-top-left-radius: unset;
      margin: unset;
      width: 100%;
      height: 100%;
    }

    .offer-wrapper {
      place-items: center;
      grid-template-rows: unset;
      grid-template-columns: repeat(2, 1fr);
    }

    .offer-wrapper > .b {
      grid-column-start: unset;
      grid-row-start: unset;
    }

    .pricing-wrapper {
      grid-template-columns: 3fr 1fr;
      position: relative;
    }

    .price-a {
      display: none;
    }

    .price-b {
      display: block;
      text-align: center;
      height: 100%;
    }

    .price-b--wrapper {
      position: relative;
      height: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      border-left: 1px solid var(--accent-clr);
    }

    .price-b--details {
      position: relative;
      display: block;
      padding: 0 1.5rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      height: 100%;
    }

    .price-b--details div {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
    }

    .line--b {
      position: absolute;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
      width: 100%;
    }

    .button {
      display: inline-block;
    }

    .button:nth-child(even) {
      margin-right: 1rem;
    }
  }
`

export default Offer
