import React from 'react'
import styled from 'styled-components'

const Loader = () => {
  return (
    <Wrapper>
      <main className='loader'></main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 100;

  .loader {
    border: 16px solid var(--accent-clr);
    border-radius: 50%;
    border-top: 16px solid var(--bg-clr--2);
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
export default Loader
