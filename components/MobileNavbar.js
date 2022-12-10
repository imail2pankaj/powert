import React from 'react'
import Logo from './Logo'
import NavMenu from './NavMenu'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-4'>
      <Logo />
      <NavMenu />
    </div>
  )
}

export default Navbar