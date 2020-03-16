import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Users } from '../../../components';
import UsersActions from '../actions';

class UsersContainer extends Component {
  componentDidMount () {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  render () {
    return (
      <Users {...this.props}/>
    )
  }
}

export default connect(
  ({ usersReduser }) => usersReduser,
  UsersActions
)(UsersContainer);
