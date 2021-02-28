import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import Nav from './Nav'

ReactDOM.render(
  <Router>
    <Nav />
  </Router>,
  document.getElementById('root')
);
