import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import Container from '../containers/container'
import { LayoutContext } from '../contexts/LayoutContext'
import Navbar from './Navbar'


const Layout = ({ children, bgClass }) => {
  const router = useRouter()
  const {toggleMenu, setToggleMenu} = useContext(LayoutContext);
  useEffect(() => {
    if(toggleMenu) setToggleMenu(false)
  }, [router])
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