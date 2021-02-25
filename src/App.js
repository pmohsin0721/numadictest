import React from 'react';
import Navbar from './Components/navbar';
import Home from './Components/home';
import Interactions from './Components/Interactions'
import Activities from './Components/Activity'
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';


const App = () => {
  return(
    <>
    <Router>
    <Navbar/>
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/interactions" exact component={Interactions} />
    <Route path="/activities" exact component={Activities} />
    </Switch>
    </Router>
    </>
  );
}

export default App;