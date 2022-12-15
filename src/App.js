import './App.less';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyLayout from './components/Layout/MyLayout';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MyLayout} />
    </Switch>
  </Router>
);

export default App;
