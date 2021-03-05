// import './App.css';
// // import Nav from './Nav'

// function App() {
//   return (
//     <div className="App">
//       <h1>App</h1>
//     </div>
//   );
// }

// export default App;

//!  Old Code above new below  //

import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import OwnerHome from './components/OwnerHome';




function App() {
  return (
    <div className="App">
      <h1>Welcome to African Marketplace</h1>
      

      <Switch>
          <Route path="/owner">
            <OwnerHome/>
          </Route>
      </Switch>
        
    </div>
  );
}

export default App;
