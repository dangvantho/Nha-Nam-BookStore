import React from 'react';
import {BrowserRouter as Router, Route, Link,Switch, useLocation} from 'react-router-dom'

import Header from './layouts/Header/Header';
import Home from './pages/Home/Home';
import Footer from './layouts/Footer/Footer';
import Auth from './auth/Auth'
import ManageBook from './pages/Manage Book/ManageBook';
import IntroductionBook from './pages/Introduction Book/IntroductionBook';
import CreatePage from './pages/CreatePage/CreatePage';
import NotificationPage from './pages/NotificationPage/NotificationPage';
import Category from './pages/Category/Category'
import PaymentHistory from './pages/Payment History/PaymentHistory';
import CheckOrder from './pages/CheckOrder/CheckOrder';

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
          <Route exact path='/the-loai/:type'>
            <Category />
          </Route>
          <Route exact path='/lich-su-giao-dich'>
            <PaymentHistory/>
          </Route>
          <Route exact path='/tra-cuu-don-hang' >
            <CheckOrder/>
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
