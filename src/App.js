import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Wallet from './pages/Wallet';
import Exchange from './pages/Exchange';
import Payment from './pages/Payment';
import Settings from './pages/Settings';
import Logout from './pages/Logout';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/wallet" component={Wallet} />
        <Route path="/exchange" component={Exchange} />
        <Route path="/payment" component={Payment} />
        <Route path="/settings" component={Settings} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </Router>
  );
};

export default App;
