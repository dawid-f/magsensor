import React from 'react'
import styled from 'styled-components'

const Line = ({ lineColor, lineMargin, lineWidth, lineHeight }) => {
  return (
    <Wrapper>
      <div
        className='line'
        style={{
          backgroundColor: lineColor,
          margin: lineMargin,
          width: lineWidth,
          height: lineHeight,
        }}
      ></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  .line {
    position: relative;
  }
`

export default Line
