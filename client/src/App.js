import React from 'react';
import Header from './layouts/Header/Header';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
      </div>
    </Router>
    
  );
}

export default App;
