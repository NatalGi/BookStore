import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './modules/App/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
//import DevTools from './util/DevTools';
//<DevTools />
//const store = createStore(reducers, DevTools.instrument());

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
