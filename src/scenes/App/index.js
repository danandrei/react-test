import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser } from '../../actions';
import {
  userIsAuthenticatedRedir,
  userIsNotAuthenticatedRedir,
} from '../../auth';
import Homepage from '../Homepage';
import Login from '../Login';
import Signup from '../Signup';
import NotFound from '../NotFound';
import '../../styles/main.scss';

class App extends Component {
  render() {
    return (
      <div className="h100">
        <Switch>
          <Route
            path="/"
            exact
            component={userIsAuthenticatedRedir(Homepage)}
          />
          <Route path="/login" component={userIsNotAuthenticatedRedir(Login)} />
          <Route
            path="/signup"
            component={userIsNotAuthenticatedRedir(Signup)}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

const mapState = state => ({});

export default connect(mapState, { loadUser })(App);
