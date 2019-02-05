import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MainLayout } from '../MainLayout/MainLayout';
import { Home } from '../Home/Home';
import { Faq } from '../Faq/Faq';
import { Statute } from '../Statute/Statute';
import { Contact } from '../Contact/Contact';
import Cart from '../Cart/Cart';
import ProductDetails from '../ProductDetails/ProductDetails';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

import { successFetchProducts } from '../Product/ProductActions';
import { successFetchDiscountCodes } from '../DiscountCodes/DiscountCodesActions';

class App extends Component {
  componentWillMount() {
    successFetchProducts()(this.props.store.dispatch);
    successFetchDiscountCodes()(this.props.store.dispatch);
  }

  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <ScrollToTop>
              <Route exact path={'/'} component={Home} />
              <Route exact path={'/page/:page'} component={Home} />
              <Route exact path={'/productDetails/:id'} component={ProductDetails} />
              <Route exact path={'/faq'} component={Faq} />
              <Route exact path={'/statue'} component={Statute} />
              <Route exact path={'/contact'} component={Contact} />
              <Route exact path={'/cart'} component={Cart} />
            </ScrollToTop>
          </Switch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

export default App;
