import { usersApi } from '../../utils/api';

const UsersActions = {

  //header actions

  toggleOpenMenu: () => ({
    type: 'TOGGLE_OPEN_MENU'
  }),

  //users actions
  setUsers: (data, total_users) => ({
    type: 'SET_USERS',
    payload: {data, total_users}
  }),

  fetchUsers: () => dispatch => {
    usersApi.getUsers()
      .then(({ data }) => {
        dispatch(UsersActions.setUsers(data.users, data.total_users))
      })
  },

  showMoreUsers: () => (dispatch, getState) => {
    dispatch(UsersActions.setUsersCount())
    usersApi.getUsers(getState().usersReduser.users_count)
      .then(({ data }) => {
        dispatch(UsersActions.setMoreUsers(data.users))
      })
  },

  setMoreUsers: (value) => ({
    type: 'SET_MORE_USERS',
    payload: value
  }),

  setUsersCount: () => ({
    type: 'SET_USERS_COUNT'
  }),

  //modal window

  setModalIsOpen: (value) => ({
    type: 'SET_MODAL_IS_OPEN',
    payload: value
  }),

  setModalTitle: (value) => ({
    type: 'SET_MODAL_TITLE',
    payload: value
  }),

  //register form actions

    //--> positions

  setPositions: (value) => ({
    type: 'SET_POSITIONS',
    payload: value
  }),

  fetchPositions: () => dispatch => {
    usersApi.getPositions()
      .then(({ data }) => {
        dispatch(UsersActions.setPositions(data.positions))
      }).catch(err => console.log(err))
  },

    //--> form input values

  getUserNameValue: (value) => ({
    type: 'GET_NAME_VALUE',
    payload: value
  }),

  getUserEmailValue: (value) => ({
    type: 'GET_EMAIL_VALUE',
    payload: value
  }),

  getUserPhoneValue: (value) => ({
    type: 'GET_PHONE_VALUE',
    payload: value
  }),

  getUserPositionValue: (target) => ({
    type: 'GET_USER_POSITION',
    payload: target.value
  }),

  getUserPhoto: (value) => ({
      type: 'GET_USER_PHOTO',
      payload: value
  }),

  //--> form validation

   //-->> username validation

  usernameValidatorOnChange: (value) => dispatch => {
      dispatch(UsersActions.getUserNameValue(value));
    if (value.length >= 2 && value.length <= 60) {
      dispatch(UsersActions.usernameValid())
    } else {
      if (value.length !== 0 ) {
        if (value.length < 2) {
          dispatch(UsersActions.usernameInvalid('Min length 2 charaters'));
        }
        if (value.length > 60) {
          dispatch(UsersActions.usernameInvalid('Max length 60 charaters'));
        }
      } else {
        dispatch(UsersActions.usernameInvalid(''));
        dispatch(UsersActions.usernameUntouched());
      }
    }
  },

  usernameValidatorOnBlur: (value) => dispatch => {
    if (value.length >= 2 && value.length <= 60) {
      dispatch(UsersActions.usernameValid())
    } else {
      if (value.length !== 0 ) {
        if (value.length < 2) {
          dispatch(UsersActions.usernameInvalid('Min length 2 charaters'));
          dispatch(UsersActions.usernameTouched())
        }
        if (value.length > 60) {
          dispatch(UsersActions.usernameInvalid('Max length 60 charaters'));
          dispatch(UsersActions.usernameTouched())
        }
      }
    }
  },

  usernameValid: () => ({
    type: 'USER_NAME_VALID'
  }),

  usernameInvalid: (err) => ({
    type: 'USER_NAME_INVALID',
    payload: err
  }),

  usernameTouched: () => ({
    type: 'USER_NAME_TOUCHED'
  }),

  usernameUntouched: () => ({
    type: 'USER_NAME_UNTOUCHED'
  }),

    //-->> email validation

  emailValidatorOnChange: (value) => dispatch => {
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    dispatch(UsersActions.getUserEmailValue(value));
    if (re.test(value)) {
      dispatch(UsersActions.emailValid())
    } else {
      if (value.length !== 0 ) {
        dispatch(UsersActions.emailInvalid('Invalid Email'));
      } else {
        dispatch(UsersActions.emailInvalid(''));
        dispatch(UsersActions.emailUntouched());
      }
    }
  },

  emailValidatorOnBlur: (value) => dispatch => {
    // eslint-disable-next-line
    const re = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
    if (re.test(value)) {
      dispatch(UsersActions.emailValid())
    } else {
      if (value.length !== 0 ) {
        dispatch(UsersActions.emailInvalid('Invalid Email'));
        dispatch(UsersActions.emailTouched())
      }
    }
  },

  emailValid: () => ({
    type: 'EMAIL_VALID'
  }),

  emailInvalid: (err) => ({
    type: 'EMAIL_INVALID',
    payload: err
  }),

  emailTouched: () => ({
    type: 'EMAIL_TOUCHED'
  }),

  emailUntouched: () => ({
    type: 'EMAIL_UNTOUCHED'
  }),

  //-->> phone number validation

  phoneValidatorOnChange: (value) => dispatch => {
    // eslint-disable-next-line
    const re = /^[\+]{0,1}380([0-9]{9})$/;
    const re2 = /^\\d{9}$/;
    dispatch(UsersActions.getUserPhoneValue(value));
    if (re.test(value)) {
      dispatch(UsersActions.phoneValid())
    } else {
      if (value.length !== 0 ) {
        if (value.slice(1, 4) !== '380') {
          dispatch(UsersActions.phoneInvalid('Invalid Phone, Ukraine code +380'));
        } else {
          if (re2.test(value.slice(5)).length !== 9) {
            dispatch(UsersActions.phoneInvalid('Invalid Phone, after code +380 must be 9 charaters'));
          }
        }
      } else {
        dispatch(UsersActions.phoneInvalid(''));
        dispatch(UsersActions.phoneUntouched());
      }
    }
  },

  phoneValidatorOnBlur: (value) => dispatch => {
    const re = /^\+?3?8?(0\d{9})$/;
    const re2 = /^\\d{9}$/;
    if (re.test(value)) {
      dispatch(UsersActions.phoneValid())
    } else {
      if (value.length !== 0 ) {
        if (value.slice(1, 4) !== '380') {
          dispatch(UsersActions.phoneInvalid('Invalid Phone, Ukraine code +380'));
          dispatch(UsersActions.phoneTouched())
        } else {
          if (re2.test(value.slice(5)).length !== 9) {
            dispatch(UsersActions.phoneInvalid('Invalid Phone, after code +380 must be 9 charaters'));
            dispatch(UsersActions.phoneTouched())
          }
        }
      }
    }
  },

  phoneValid: () => ({
    type: 'PHONE_VALID'
  }),

  phoneInvalid: (err) => ({
    type: 'PHONE_INVALID',
    payload: err
  }),

  phoneTouched: () => ({
    type: 'PHONE_TOUCHED'
  }),

  phoneUntouched: () => ({
    type: 'PHONE_UNTOUCHED'
  }),

  //-->> position validation

  positionValid: () => ({
    type: 'POSITION_VALID'
  }),

  positionInvalid: (err) => ({
    type: 'POSITION_INVALID',
    payload: err
  }),

  positionTouched: () => ({
    type: 'POSITION_TOUCHED'
  }),

  positionUntouched: () => ({
    type: 'POSITION_UNTOUCHED'
  }),

  positionValidatorOnChange: (target) => (dispatch, getState) => {
    dispatch(UsersActions.getUserPositionValue(target))
    if (getState().usersReduser.user_position !== 0) {
      dispatch(UsersActions.positionValid())
      dispatch(UsersActions.positionUntouched())
    } else {
      dispatch(UsersActions.positionInvalid('Position field is required'))
    }
  },

    //-->> photo validation

    photoValid: () => ({
      type: 'PHOTO_VALID'
    }),

    photoInvalid: (err) => ({
      type: 'PHOTO_INVALID',
      payload: err
    }),

    photoValidatorOnChange: (value) => (dispatch, getState) => {
      dispatch(UsersActions.photoInvalid(''))
      dispatch(UsersActions.getUserPhoto(value))
      if (getState().usersReduser.user_photo !== undefined) {
        if (getState().usersReduser.user_photo.type === "image/jpeg" || getState().usersReduser.user_photo.type === "image/jpg") {
          if (getState().usersReduser.user_photo.size < 5e+6) {
            dispatch(UsersActions.photoValid())
          } else {
            dispatch(UsersActions.photoInvalid('The photo size must not be greater than 5 Mb'))
          }
        } else {
          dispatch(UsersActions.photoInvalid('The photo format must be jpeg/jpg type'))
        }


      }
    },

  //-->> Register form submit

  resetFormInputs: () => ({
    type: 'RESET_FORM_INPUTS'
  }),

  setToken: (value) => ({
    type: 'SET_TOKEN',
    payload: value
  }),

  onSubmitRegisterForm: (e) => (dispatch, getState) => {
    e.preventDefault();

    if (getState().usersReduser.user_name_valid && getState().usersReduser.user_email_valid
        && getState().usersReduser.user_phone_valid && getState().usersReduser.user_position_valid
        && getState().usersReduser.user_photo_valid) {
      usersApi.getToken()
        .then(({ data }) => {
          dispatch(UsersActions.setToken(data.token))
        })
        .then(() => {
             if (getState().usersReduser.user_token !== null) {
               let formData = new FormData();

                formData.append('position_id', getState().usersReduser.positions.find(item => item.name === getState().usersReduser.user_position).id);
                formData.append('name', getState().usersReduser.user_name);
                formData.append('email', getState().usersReduser.user_email);
                formData.append('phone', getState().usersReduser.user_phone);
                formData.append('photo', getState().usersReduser.user_photo);

                // console.log({
                //   position_id: getState().usersReduser.user_position_valid,
                //   name: getState().usersReduser.user_name_valid,
                //   email: getState().usersReduser.user_email_valid,
                //   phone: getState().usersReduser.user_phone_valid,
                //   photo: getState().usersReduser.user_photo_valid,
                // })


                // dispatch(UsersActions.setModalTitle('user added'));
                // dispatch(UsersActions.setModalIsOpen(true));
                // dispatch(UsersActions.resetFormInputs());

                usersApi.postUser(formData, getState().usersReduser.user_token)
                .then(function({ data }) {
                  if(data.success) {
                    dispatch(UsersActions.setModalTitle(data.message))
                    dispatch(UsersActions.setModalIsOpen(true))
                    dispatch(UsersActions.fetchUsers())
                    dispatch(UsersActions.resetFormInputs())
                  } else {
                    // proccess server errors
                  }
                })
                .catch(function(error) {
                  // proccess network errors
                });
             }
        })


    } else {
      // console.log({
      //   position_id: getState().usersReduser.user_position_valid,
      //   name: getState().usersReduser.user_name_valid,
      //   email: getState().usersReduser.user_email_valid,
      //   phone: getState().usersReduser.user_phone_valid,
      //   photo: getState().usersReduser.user_photo_valid
      // })
      if (!getState().usersReduser.user_name_valid) {

        if (getState().usersReduser.user_name.length !== 0) {
          UsersActions.usernameValidatorOnBlur(getState().usersReduser.user_name)
        } else {
          dispatch(UsersActions.usernameInvalid('Name field is required'))
        }
      }
      if (!getState().usersReduser.user_email_valid) {

        if (getState().usersReduser.user_email.length !== 0) {
          UsersActions.emailValidatorOnBlur(getState().usersReduser.user_email)
        } else {
          dispatch(UsersActions.emailInvalid('Email field is required'))
        }
      }

      if (!getState().usersReduser.user_phone_valid) {

        if (getState().usersReduser.user_phone.length !== 0) {
          UsersActions.phoneValidatorOnBlur(getState().usersReduser.user_phone)
        } else {
          dispatch(UsersActions.phoneInvalid('Phone field is required'))
        }
      }

      if (!getState().usersReduser.user_position_valid) {
        dispatch(UsersActions.positionTouched())
        if (getState().usersReduser.user_position.length === 0) {
          dispatch(UsersActions.positionInvalid('Position field is required'))
        }
      }

      if (!getState().usersReduser.user_photo_valid) {
        if (getState().usersReduser.user_photo === undefined) {
          dispatch(UsersActions.photoInvalid('Photo field is required'))
        }
      }
    }
  },
}

export default UsersActions;
