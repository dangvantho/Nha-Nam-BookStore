import React from 'react';
import Header from './layouts/Header/Header';
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'
import Home from './pages/Home/Home';
import Footer from './layouts/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/'  >
            <Home/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
