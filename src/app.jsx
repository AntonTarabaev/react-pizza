import './scss/style.scss';

import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import Main from './pages/main';
import Cart from './pages/cart';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <main className="page-main">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
