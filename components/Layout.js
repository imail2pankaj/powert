import React from 'react'
import Container from '../containers/container'
import Navbar from './Navbar'

const Layout = ({ children, bgClass }) => {
  return (
    <div className={`h-screen bg-primary text-white relative ${bgClass}`}>
      <Container>
        <Navbar />
      </Container>
      {children}
    </div>
  )
}

export default Layout