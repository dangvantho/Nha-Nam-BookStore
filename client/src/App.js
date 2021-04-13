import React from 'react';
import Header from './layouts/Header/Header';
import {BrowserRouter as Router, Route, Link,Switch, useLocation} from 'react-router-dom'
import Home from './pages/Home/Home';
import Footer from './layouts/Footer/Footer';
import Auth from './auth/Auth'
import ManageBook from './pages/Manage Book/ManageBook';
import IntroductionBook from './pages/Introduction Book/IntroductionBook';
import CreatePage from './pages/CreatePage/CreatePage';
import NotificationPage from './pages/NotificationPage/NotificationPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          
          <Route exact path='/book'>
            <Auth >
              <ManageBook/>
            </Auth>
          </Route>
          <Route exact path='/them-trang-thong-bao'>
            <Auth>
              <CreatePage />
            </Auth>
          </Route>
          <Route exact path='/pages/:title'>
            <NotificationPage/>
          </Route>
          <Route exact path='/book/:id'>
            <IntroductionBook  />
          </Route>
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
