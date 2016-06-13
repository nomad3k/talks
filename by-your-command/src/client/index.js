import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

import configureStore from './configure-store';
import App from './app';
import Homepage from './homepage';
import EmployeeList from './employee-list';
import EmployeeView from './employee-view';
import EmployeeRecruit from './employee-recruit';
import EmployeePromote from './employee-promote';
import EmployeeTransfer from './employee-transfer';
import EmployeeTerminate from './employee-terminate';

const store = configureStore()

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Homepage} />
        <Route path='/employee' component={EmployeeList} />
        <Route path='/employee/recruit' component={EmployeeRecruit} />
        <Route path='/employee/:id/promote' component={EmployeePromote} />
        <Route path='/employee/:id/terminate' component={EmployeeTerminate} />
        <Route path='/employee/:id/transfer' component={EmployeeTransfer} />
        <Route path='/employee/:id' component={EmployeeView} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
