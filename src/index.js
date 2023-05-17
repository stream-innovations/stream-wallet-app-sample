import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Wallet from './pages/Wallet';
import Exchange from './pages/Exchange';
import Payment from './pages/Payment';
import Settings from './pages/Settings';
import Logout from './pages/Logout';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/app" component={App} />
      <Route path="/wallet" component={Wallet} />
      <Route path="/exchange" component={Exchange} />
      <Route path="/payment" component={Payment} />
      <Route path="/settings" component={Settings} />
      <Route path="/logout" component={Logout} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
