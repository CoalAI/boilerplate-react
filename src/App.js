import './App.less';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyLayout from './components/Layout/MyLayout';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MyLayout} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Switch>
  </Router>
);

export default App;
