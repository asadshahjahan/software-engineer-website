import React from 'react';
import Intro from '../Intro/Intro';
import Main from '../Main/Main';

import './App.css';

const App = () => {
  return (
    <div className="container-fluid body">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12 App-intro">
          <Intro/>
        </div>
        <div className="col-lg-9 col-md-6 col-sm-12 App-detail">
          <Main/>
        </div>
      </div>
    </div>
  );
}

export default App;