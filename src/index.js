import React from 'react';
import ReactDOM from 'react-dom';
import BambuserShow from './BambuserShow'

console.log('Log in root file, that should fire only on App start');

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <BambuserShow
        bambuserShowId="gnTN3WQszllYKQAJwN58"
        joinShowButtonLabel="Open the show!"
      />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
