
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Destination from './components/Destination/Destination';
import LogIn from './components/LogIn/LogIn';
function App() {
  return (
    <Router>
<Switch>
  <Route path="/home">
  <Home></Home>
  </Route>
  <Route path="/destination">
  <Destination></Destination>
  </Route>
  <Route path="/login">
 <LogIn></LogIn>
  </Route>

  <Route exact path="/">
  <Home></Home>
  </Route>
  <Route path="*">
  <NotFound></NotFound>
  </Route>
    
</Switch>


    </Router>
    
  );
}

export default App;
