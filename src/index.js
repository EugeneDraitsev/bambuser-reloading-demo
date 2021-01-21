import React, { useContext }  from 'react';
import ReactDOM from 'react-dom';
import BambuserShow from './BambuserShow'
import { TestContext, TestProvider } from './TestContext'

console.log('Log in root file, that should fire only on App start');


const TestContextConsumer = () => {
  const { someValue } = useContext(TestContext)

  return (
    <div>
      Value in context: {someValue}
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <TestProvider>
    <div className="App">
      <TestContextConsumer />
      <BambuserShow
        bambuserShowId="gnTN3WQszllYKQAJwN58"
        joinShowButtonLabel="Open the show!"
      />
    </div>
    </TestProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
