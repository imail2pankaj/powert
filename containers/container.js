import React from 'react'

const Container = ({children}) => {
  return (
    <div className='mx-auto max-w-1280 w-full px-4 lg:px-0'>
      {children}
    </div>
  )
}

export default Container