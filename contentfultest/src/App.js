import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route,Switch} from "react-router-dom";
import BodyHome from './pages/BodyHome';
import BodyDetail from './pages/BodyDetail'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={()=><BodyHome/>}/>
          <Route path='/blogdetail/:id' component={BodyDetail}/>
        </Switch>
      </Router>

      
      </div>
    );
  }
}

export default App;
