import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { device } from '../utils/constants'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { aboutTherapy } from '../utils/constants'
import { GatsbyContext } from '../context/context'

// GraphQL query in Context file

const AboutTherapy = () => {
  const { information } = useContext(GatsbyContext)
  const pathToImage2 = getImage(information[0].image2)
  const pathToImage3 = getImage(information[0].image3)

  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>{information[0].title}</h2>
      </div>
      <section className='info1-container section-center'>
        <article className='text'>
          <p>{information[0].description.description}</p>
        </article>
        <article className='photo-wrapper'>
          <GatsbyImage
            alt='integracja'
            image={pathToImage2}
            className='photo'
          />
        </article>
      </section>
      <h2 className='title'>{information[0].title2}</h2>
      <section className=' info2-container section-center'>
        <article className='photo-wrapper pw2 '>
          <GatsbyImage
            alt='integracja'
            image={pathToImage3}
            className='photo'
          />
        </article>
        <article className='points'>
          <p>
            {aboutTherapy[0].points.map((item, i) => {
              return (
                <li key={i} className='point'>
                  {item}
                </li>
              )
            })}
          </p>
        </article>
      </section>
      <section className='section-center btn-wrapper'>
        <Link to='/' className='button btn'>
          Powrót na stronę główną
        </Link>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .info1-container {
    display: grid;
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .info2-container {
    display: grid;
    gap: 2rem;
  }

  .photo-wrapper {
    box-shadow: var(--box-shadow--strong);
    border-radius: var(--radius);
    -webkit-border-radius: var(--radius);
    -moz-border-radius: var(--radius);
    -ms-border-radius: var(--radius);
    -o-border-radius: var(--radius);
    height: 100%;
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

  .pw2 {
    display: none;
  }

  .title {
    margin-bottom: var(--m--2);
    text-align: center;
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

  .point:first-letter {
    text-transform: uppercase;
  }

  .btn-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button {
    margin-top: var(--m--2);
    background-color: var(--accent-clr);
    color: var(--font-clr--on-dark);
    position: relative;
  }

  @media ${device.tablet} {
    .btn-wrapper {
      justify-content: flex-start;
    }
  }

  @media ${device.laptop} {
    .info1-container {
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
      margin-bottom: 6rem;
    }

    .info2-container {
      grid-template-columns: 1fr 4fr;
      gap: 5rem;
    }

    .btn-wrapper {
      justify-content: flex-end;
    }

    .pw2 {
      display: block;
    }
  }
`

export default AboutTherapy
