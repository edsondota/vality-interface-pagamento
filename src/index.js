import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Pagamento from './components/Pagamento';
import Parcelas from './components/Parcelas';

import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Pagamento} />
      <Route path="/parcelas" exact={true} component={Parcelas} />
    </Switch>
  </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
