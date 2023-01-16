import React from 'react'
import { Navbar, Footer } from '../index'
import '../../assets/css/main.css'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
