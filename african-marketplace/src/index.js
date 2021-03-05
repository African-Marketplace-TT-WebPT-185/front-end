// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom'
// import './index.css';
// import Nav from './Nav'

// ReactDOM.render(
//   <Router>
//     <Nav />
//   </Router>,
//   document.getElementById('root')
// );

//!  Old code above new from Hamida below  //


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(
  <Router>
    <App />
 </Router>,
  document.getElementById('root')
);


//!  New code from Hamida above, new from Matt below  //


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// // import App from './App';
// import UserHome from './components/UserHome'

// ReactDOM.render(
//   <React.StrictMode>
//     <UserHome />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
