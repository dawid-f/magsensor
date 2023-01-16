import React, { useContext } from 'react'
import styled from 'styled-components'
import { device } from '../../utils/constants'
import { Line } from '../index'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyContext } from '../../context/context'

// GraphQL Query inside Context file

const Pricing = () => {
  const { offerInfo } = useContext(GatsbyContext)
  return (
    <Wrapper>
      <section className='pricing-container section section-center'>
        {offerInfo.map((item, i) => {
          const {
            id,
            title,
            price,
            currency,
            duration,
            description: { description },
          } = item
          return (
            <article key={id} className='card-wrapper section-center '>
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
                <Link to='/kontakt' className='btn button'>
                  Zapytaj o wizytę
                </Link>
              </div>
              <div>
                <div>
                  <h4>{price}</h4>
                  <h4>{currency}</h4>
                  &nbsp;
                  {duration !== 'null' && <h4>({duration})</h4>}
                </div>
              </div>
            </article>
          )
        })}
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .pricing-container {
    display: grid;
    gap: 3rem;
  }

  .card-wrapper {
    background-color: var(--bg-clr--card);
    box-shadow: var(--box-shadow--card);
    border-radius: var(--radius);
    display: grid;
  }

  .card-wrapper > .b {
    grid-column-start: 1;
    grid-row-start: 1;
  }

  .card-text {
    margin: var(--margin--card--text);
  }

  .image-wrapper {
    width: 100%;
    height: 100%;
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

    .card-wrapper {
      place-items: center;
      grid-template-rows: unset;
      grid-template-columns: repeat(2, 1fr);
    }

    .card-wrapper > .b {
      grid-column-start: unset;
      grid-row-start: unset;
    }

    .button {
      display: inline-block;
    }
  }
`

export default Pricing
