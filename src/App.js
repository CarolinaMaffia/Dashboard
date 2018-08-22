import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
        <Route exact path='/' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
