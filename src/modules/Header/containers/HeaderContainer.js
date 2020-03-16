import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from '../../../components';
import UsersActions from '../../Users/actions';

class HeaderContainer extends Component {
  
  render () {
    return (
      <Header {...this.props}/>
    );
  }
}

export default connect(
  ({ usersReduser }) => usersReduser,
  UsersActions
)(HeaderContainer);
