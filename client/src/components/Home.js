import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NewUserForm from './NewUserForm';

import * as UsersActions from '../actions/Users';

class Home extends Component {
  constructor() {
    super();
    this.getUsers = this.getUsers.bind(this);
  }

  getUsers() {
    const { usersActions } = this.props;
    usersActions.getUsers().then(users => console.log(users.value.data));
  }

  render() {
    return (
      <div>
        <div>Hi there folks!</div>
        <button onClick={this.getUsers}>Get all users</button>
        <NewUserForm usersActions={this.props.usersActions} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
