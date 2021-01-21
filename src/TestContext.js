import React, { useState, memo } from 'react'

const TestContext = React.createContext({ someValue: null })


const TestProvider = memo(({ children }) => {
  // Initial value
  const [someValue] = useState(Math.random())

  return (
    <TestContext.Provider value={{ someValue }}>
      {children}
    </TestContext.Provider>
  )
})

export { TestProvider, TestContext }
