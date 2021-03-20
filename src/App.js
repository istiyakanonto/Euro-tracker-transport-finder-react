
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
import Header from './components/Header/Header';
import { createContext, useState } from 'react';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';
export const UserContext=createContext();
function App() {
 const [loggedInUser,setLoggedInUser]=useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <p>Name:{loggedInUser.name}</p>
    <Router>
       <Header></Header>
<Switch>
  <Route path="/home">
  <Home></Home>
  </Route>
  <PrivateRouter path="/destination/">
  <Destination></Destination>
  </PrivateRouter>
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
    </UserContext.Provider>
    
  );
}

export default App;
