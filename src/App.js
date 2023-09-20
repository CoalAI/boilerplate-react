import './App.less';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyLayout from './components/Layout/MyLayout';
import Profile from './components/Profile/Profile';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MyLayout} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </Router>
);

export default App;
