import React, { useState, useEffect, memo } from 'react'

const TestContext = React.createContext({ someValue: null })


const TestProvider = memo(({ children }) => {
  // Initial value
  const [someValue] = useState(Math.random())

  useEffect(() => {
    // simulate websocket connection
    const interval = setInterval(() => {
      console.log(`Websocket messages from context ${someValue}`)
    }, 1000)

    return () => {
      console.log(`Clear interval for context ${someValue}`)
      clearInterval(interval)
    }
  }, [someValue])

  return (
    <TestContext.Provider value={{ someValue }}>
      {children}
    </TestContext.Provider>
  )
})

export { TestProvider, TestContext }
