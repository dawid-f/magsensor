import React from 'react'
import styled from 'styled-components'
import { device } from '../../utils/constants'
import { useLocation } from '@reach/router'
import { Link } from 'gatsby'
import slugify from 'slugify'

const Header = ({ title }) => {
  const location = useLocation()

  const pathName = location.pathname
  const slug = slugify(
    title.replace(
      /[^AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻż ]/g,
      ''
    ),
    {
      lower: true,
    }
  )

  return (
    <Wrapper>
      <section className='header-wrapper section'>
        <article className='content section-center'>
          {pathName !== `/aktualnosci/${slug}` && (
            <Link to='/' className='header-link'>
              <p>Strona Główna</p>
            </Link>
          )}
          {pathName !== `/aktualnosci/${slug}` && <span>/</span>}

          {pathName !== `/aktualnosci/${slug}` ? (
            <p className='header-directory'>{title}</p>
          ) : (
            <div className='directories'>
              <Link to='/' className='header-link'>
                <p>Strona Główna</p>
              </Link>
              <span>/</span>
              <Link to='/aktualnosci' className='header-link'>
                <p>Aktualności</p>
              </Link>
              <span>/</span>
              <p className='header-directory '>{title}</p>
            </div>
          )}
        </article>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .header-wrapper {
    background-color: var(--accent-clr);
    color: var(--font-clr--on-dark);
    position: relative;
    overflow: hidden;
    width: 100%;
    padding: 5rem 0;
  }

  .content {
    position: relative;
  }

  .header-link,
  .header-text,
  .header-directory {
    display: inline-block;
    color: var(--font-clr--on-dark);
  }

  .header-directory::first-letter {
    text-transform: uppercase;
  }

  .header-link .header-link:hover {
    text-decoration: underline;
  }

  .directories {
    display: inline-block;
  }

  span {
    margin: 0 0.5rem;
  }

  @media ${device.tablet} {
    text-align: left;
    .header-wrapper {
      display: flex;
      flex-direction: row;
    }

    p {
      font-size: 1.2rem;
    }

    span {
      margin: 0 0.5rem;
    }
  }

  @media ${device.laptop} {
    .header-wrapper {
      padding: 8rem 0;
    }
    p {
      font-size: 1.4rem;
    }
  }
`

export default Header
