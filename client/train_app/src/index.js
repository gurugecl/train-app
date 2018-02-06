import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { reduxSetup } from 'redux-easy';
import './index.css';

import Header from './components/Header';
import Home from './components/Home';
import Pics from './components/Pics';
import Sounds from './components/Sounds';
import Data from './containers/Data';

const initialState = {
  light: { lightLevel: 0 },
  power: { powerLevel: 0 },
  profileDB: [],
  lightDB: [],
  voltageDB: [],
};

const store = reduxSetup({ initialState, render });

function render() {
  ReactDOM.render(
    <Provider store={store}>
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
}

render();
