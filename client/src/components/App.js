import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as UsersActions from '../actions/Users';

class App extends Component {
  constructor() {
    super();
    this.getUsers = this.getUsers.bind(this);
  }
  getUsers() {
    const { usersActions } = this.props;
    usersActions.getUsers();
  }

  render() {
    return (
      <div>
        <div>Hi there folks!</div>
        <button onClick={this.getUsers}>Nueva clase</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    usersActions: bindActionCreators(UsersActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
