// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router';
import SellerHome from './components/SellerHome';
import BuyerHome from './components/BuyerHome';
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import Nav from './components/Nav'

import './App.css';


function App() {

 
  
 

  return (
    <div className='App'>

      <Nav />
      <h1>Welcome to African Marketplace</h1>
      <Switch>
          <Route path='/seller' component={SellerHome} />
          <Route path='/buyer' component={BuyerHome} />
          <Route path='/signup' component={SignupForm} />
          <Route path='/login' component={LoginForm} />
      </Switch>

    </div>
  );
}

export default App;
