import React, { useContext } from 'react'
import { GatsbyContext } from '../../context/context'

const Address = ({ country }) => {
  const { addressInfo } = useContext(GatsbyContext)
  return (
    <main>
      {addressInfo.map(({ id, street, town }) => {
        return (
          <article key={id} className='address'>
            <p>{street}</p>
            <p>{town}</p>
            <p>{country}</p>
          </article>
        )
      })}
    </main>
  )
}

export default Address
