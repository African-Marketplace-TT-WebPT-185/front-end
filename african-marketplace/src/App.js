// eslint-disable-next-line
import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router';
import SellerHome from './components/SellerHome';
import BuyerHome from './components/BuyerHome';
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import Nav from './components/Nav'
import { getUsers, getItems } from './utils/useApi'

import './App.css';

function App() {

  const [users, setUsers] = useState([])
  const [items, setItems] = useState([])
  
  useEffect(() => { 
    setUsers(getUsers())
    setItems(getItems())
  }, [users, items])

  return (
    <>
      <Nav />
      <h1>Welcome to African Marketplace</h1>
      <Switch>
          <Route path='/seller'>
            <SellerHome items={items} setItems={setItems} users={users} setUsers={setUsers} />
          </Route>  
          <Route path='/buyer'>
            <BuyerHome items={items} setItems={setItems} users={users} setUsers={setUsers} />
          </Route>
          <Route path='/signup' component={SignupForm} />
          <Route path='/login' component={LoginForm} />
          <Route exact path='/' component={LoginForm} />
      </Switch>
    </>
  );
}

export default App;
