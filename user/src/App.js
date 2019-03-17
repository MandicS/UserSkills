import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout'
import User from './containers/User/User'
import Register from './containers/Register/Register'
import LogIn from './containers/LogIn/LogIn'
import Page404 from './components/Page404/Page404';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/user" component={User} />
            <Route path="/login" component={LogIn} />
            <Route path="/register" component={Register} />
            <Route component={Page404} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
