import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RegisterForm } from '../../../components';
import UsersActions from '../../Users/actions';

class RegisterFormContainer extends Component {
  componentDidMount() {
    const { fetchPositions } = this.props;
    fetchPositions();
  }


  render () {
    return (
      <RegisterForm {...this.props}/>
    );
  }
}

export default connect(
  ({ usersReduser }) => usersReduser,
  UsersActions
)(RegisterFormContainer);
