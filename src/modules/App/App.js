import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MainLayout } from '../MainLayout/MainLayout';
import { Home } from '../Home/Home';
import { Faq } from '../Faq/Faq';
import { Statute } from '../Statute/Statute';
import { Contact } from '../Contact/Contact';
import { Cart } from '../Cart/Cart';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/faq'} component={Faq} />
            <Route exact path={'/statue'} component={Statute} />
            <Route exact path={'/contact'} component={Contact} />
            <Route exact path={'/cart'} component={Cart} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

export default App;
