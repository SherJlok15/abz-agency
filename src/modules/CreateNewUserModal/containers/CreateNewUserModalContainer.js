import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { CreateNewUserModal } from '../../../components';
import UsersActions from '../../Users/actions';

class CreateNewUserModalContainer extends Component {
  render () {
    return (
      <CreateNewUserModal {...this.props}/>
    )
  }
}

export default connect(
  ({ usersReduser }) => usersReduser,
  UsersActions
)(CreateNewUserModalContainer);
