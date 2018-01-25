import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import Async from './middlewares/async';
import rootReducer from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';

import Header from './components/Header';
import Home from './components/Home';
import Pics from './components/Pics';
import Sounds from './components/Sounds';
import Data from './containers/Data';

const createStoreWithMiddleware = applyMiddleware(Async, thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <BrowserRouter basename="/">
      <div>
        <Header />
        <Switch>
          <Route path="/pictures" component={Pics} />
          <Route path="/sounds" component={Sounds} />
          <Route path="/data" component={Data} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
