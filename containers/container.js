import React from 'react'

const Container = ({children}) => {
  return (
    <div className='mx-auto w-full max-w-7xl px-4 lg:px-0'>
      {children}
    </div>
  )
}

export default Container