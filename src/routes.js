import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Carteira from './pages/Wallet';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/carteira" component={ Carteira } />
      </Switch>
    );
  }
}

export default Routes;
