import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { device } from '../../utils/constants'
import { GatsbyImage } from 'gatsby-plugin-image'
import { GatsbyContext } from '../../context/context'

// GraphQL Query inside Context file

const LogoWhite = ({ logoColor }) => {
  const { setIsSidebarOpen } = useContext(GatsbyContext)
  return (
    <Wrapper>
      <section className='logo-wrapper'>
        <Link className='logo' to='/' onClick={() => setIsSidebarOpen(false)}>
          <GatsbyImage image={logoColor} alt='logo' />
        </Link>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .logo {
    color: var(--font-clr--on-light);
    position: relative;
    z-index: 1;
  }

  @media ${device.laptop} {
    color: var(--font-clr--on-dark);
  }
`

export default LogoWhite
