import React from 'react';
import './App.css';
import {Router} from '@reach/router'

import Home from './components/home'
import Number from './components/Number'
import Hello from './components/hello'
import Color from './components/color'

function App() {
  return (
    <div className="App">
      <Router>
        <Color path = "/hello/blue/red"/>
        <Hello path = "/hello"/>
        <Home path = "/home"/>
        <Number path = "/4"/>
    </Router>
    </div>
  );
}

export default App;
