import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { GatsbyContext } from '../../context/context'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const { currentPage, setCurrentPage } = useContext(GatsbyContext)

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  const clickToPaginate = (number) => {
    paginate(number)
  }

  const nextPage = () => {
    setCurrentPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > pageNumbers.length) {
        nextPage = 1
      }
      return nextPage
    })
  }

  const prevPage = () => {
    setCurrentPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 1) {
        prevPage = pageNumbers.length
      }
      return prevPage
    })
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  })

  return (
    <Wrapper>
      <section className='section-center'>
        <button
          aria-label='previous page'
          className='navigate button btn'
          onClick={prevPage}
        >
          <i>
            <HiOutlineChevronLeft />
          </i>
        </button>
        {pageNumbers.slice(currentPage - 1, currentPage + 2).map((number) => (
          <div>
            <button
              aria-label='pages'
              key={number}
              className={`${
                number === currentPage ? 'button btn active' : 'button btn'
              }`}
              onClick={() => clickToPaginate(number)}
            >
              {number}
            </button>
          </div>
        ))}
        <button
          aria-label='next page'
          className='navigate button btn'
          onClick={nextPage}
        >
          <i>
            <HiOutlineChevronRight />
          </i>
        </button>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  section {
    position: relative;
    display: grid;
    justify-content: center;
    grid-auto-flow: column;
    gap: 0.5rem;
    margin-bottom: 4rem;
  }

  .button {
    background-color: var(--accent-clr);
    color: var(--font-clr--on-dark);
    display: inline-block;
  }

  .navigate i {
    position: relative;
    top: 2px;
  }

  .active {
    filter: brightness(140%);
    -webkit-filter: brightness(140%);
    text-decoration: underline;
  }
`

export default Pagination
