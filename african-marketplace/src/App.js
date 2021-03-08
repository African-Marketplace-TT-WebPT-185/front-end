import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import OwnerHome from './components/OwnerHome';
import OwnerAddItem from './components/OwnerAddItem';
import OwnerEditItem from './components/OwnerEditItem';


function App() {
  return (
    <div className="App">
      <h1>Welcome to African Marketplace</h1>

      <Switch>
          <Route path="/owner" component = {OwnerHome}/>
          <Route path='/item/add' component = {OwnerAddItem}/>
          <Route path='/item/edit' component = {OwnerEditItem}/>
          
      </Switch>
        
    </div>
  );
}

export default App;
