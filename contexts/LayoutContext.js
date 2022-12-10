import React, { createContext, useState } from 'react'

const LayoutContext = createContext()

const LayoutProvider = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <LayoutContext.Provider value={{ toggleMenu, setToggleMenu }}>
      {children}
    </LayoutContext.Provider>
  )
}

export { LayoutContext, LayoutProvider }