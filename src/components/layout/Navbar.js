import React, { useContext } from 'react'
import styled from 'styled-components'
import { Logo } from '../index'
import { Link } from 'gatsby'
import { device } from '../../utils/constants'
import { links } from '../../utils/constants'
import { useLocation } from '@reach/router'
import { GatsbyContext } from '../../context/context'

const Navbar = () => {
  // Context
  const {
    pathToWhite,
    pathToBlack,
    isSidebarOpen,
    setIsSidebarOpen,
  } = useContext(GatsbyContext)

  const location = useLocation()

  return (
    <Wrapper>
      <main className='navbar-container '>
        <nav className='navbar section-center'>
          <section className='navbar-header'>
            <article className='logo'>
              {isSidebarOpen || location.pathname !== '/' ? (
                <Logo logoColor={pathToWhite} />
              ) : (
                <Logo logoColor={pathToBlack} />
              )}
            </article>
            <section className='menu-btn-wrapper'>
              <button
                aria-label='menu button'
                className='menu-btn'
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <div
                  className={`${isSidebarOpen ? 'bar bar-1 bg-black' : 'bar'} ${
                    location.pathname !== '/' ? 'bg-black' : 'bg-white'
                  }`}
                ></div>
                <div
                  className={`${isSidebarOpen ? 'bar bar-2 bg-black' : 'bar'} ${
                    location.pathname !== '/' ? 'bg-black' : 'bg-white'
                  }`}
                ></div>
                <div
                  className={`${isSidebarOpen ? 'bar bar-3 bg-black' : 'bar'} ${
                    location.pathname !== '/' ? 'bg-black' : 'bg-white'
                  }`}
                ></div>
              </button>
            </section>
          </section>
          <article
            className={`${
              isSidebarOpen ? 'nav-links show-links' : 'nav-links'
            }`}
          >
            {links.map(({ id, name, url, icon }) => {
              return (
                <Link
                  key={id}
                  to={url}
                  className={`${
                    location.pathname !== '/'
                      ? 'nav-link font-black'
                      : 'nav-link font-white'
                  }`}
                  activeClassName='nav-link-active'
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <i className='nav-link-icon'>{icon}</i>
                  {name}
                </Link>
              )
            })}
          </article>
        </nav>
      </main>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  width: 100%;

  .navbar-container {
    transition: var(--transition);
    transition: 0.7s;
    letter-spacing: 1px;
    z-index: 2;
    width: 100%;
    top: 0;
  }

  .navbar-header {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 8rem;
    z-index: 2;
  }

  .logo {
    margin-right: auto;
    width: 100px;
  }

  .nav-links {
    transition: var(--transition-quick);
    position: relative;
    text-transform: capitalize;
    overflow: hidden;
    z-index: 1;
    height: 0;
  }

  .nav-link {
    color: var(--font-clr--on-light);
    border-radius: var(--radius);
    transition: var(--transition);
    display: block;
    cursor: pointer;
    padding: 0.75rem 0rem;
    text-underline-offset: 0.5rem;
  }

  .nav-link-icon {
    color: var(--font-clr--on-light);
    position: relative;
    vertical-align: middle;
    margin-right: 0.5rem;
  }

  .nav-link-active {
    text-decoration: underline;
  }

  .show-links {
    position: relative;
    height: 21rem;
  }

  .menu-btn-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .menu-btn {
    position: relative;
    background-color: transparent;
    cursor: pointer;
    border: none;
    z-index: 2;
  }

  .bar {
    background-color: var(--font-clr--on-dark);
    transition: var(--transition-quick);
    border-radius: var(--radius);
    width: 24px;
    height: 2.5px;
  }

  .bar:nth-child(2),
  .bar:last-child {
    margin-top: 4px;
  }

  .bar-1 {
    position: relative;
    transform: rotate(-45deg) translate(-4px, 3px);
    top: 0;
    left: 0;
  }

  .bar-2 {
    transition: var(--transition-quick);
    opacity: 0;
  }

  .bar-3 {
    position: relative;
    transform: rotate(45deg) translate(-6px, -6px);
    top: 0;
    left: 0;
  }

  .bg-white {
    background-color: rgb(255, 255, 255) !important;
  }

  .bg-black {
    background-color: var(--font-clr--on-light) !important;
  }

  @media ${device.tablet} {
    .show-links {
      position: relative;
      height: 24rem;
    }
  }

  @media ${device.laptop} {
    .navbar {
      display: flex;
    }

    .navbar-container {
      position: relative;
    }

    .logo {
      width: 140px;
    }

    .font-white {
      color: rgb(255, 255, 255) !important;
    }

    .font-black {
      color: var(--font-clr--on-light) !important;
    }

    .nav-links {
      transition: var(--transition--quick);
      height: auto;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-left: auto;
      overflow: unset;
      text-transform: capitalize;
    }

    .nav-link {
      border-radius: var(--radius);
      transition: var(--transition);
      display: inline-block;
      padding: 0.75rem 0.7rem;
    }

    .nav-link-icon {
      display: none;
    }

    .nav-link:hover {
      background-color: transparent;
      text-decoration: underline;
    }

    .nav-link-active {
      text-decoration: underline;
      background-color: transparent;
    }

    .menu-btn-wrapper {
      display: none;
    }
  }
`

export default Navbar
