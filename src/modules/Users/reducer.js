const initialState = {
  show_header_open_menu: false,
  users: null,
  users_count: 6,
  total_users: null,
  positions: [],
  user_position: '',
  user_position_valid: false,
  user_position_errors: '',
  user_position_touched: false,
  user_name: '',
  user_name_errors: '',
  user_name_valid: false,
  user_name_touched: false,
  user_email: '',
  user_email_errors: '',
  user_email_valid: false,
  user_email_touched: false,
  user_phone: '',
  user_phone_errors: '',
  user_phone_valid: false,
  user_phone_touched: false,
  user_photo: undefined,
  user_photo_errors: '',
  user_photo_valid: false,
  user_token: null,
  modalIsOpen: false,
  modalTitle: ''
}

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {

    //header
    case 'TOGGLE_OPEN_MENU':
      return {
        ...state,
        show_header_open_menu: !state.show_header_open_menu
      }

    //users

    case 'SET_USERS':
      return {
        ...state,
        users: payload.data,
        total_users: payload.total_users
      }

    case 'SET_MORE_USERS':
      return {
        ...state,
        users: payload
      }

    case 'SET_USERS_COUNT':
      return {
        ...state,
        users_count: state.users_count + 3
      }

    // modal

    case 'SET_MODAL_IS_OPEN':
      if (!payload) {
        return {
          ...state,
          modalIsOpen: payload,
          modalTitle: ''
        }
      } else {
        return {
          ...state,
          modalIsOpen: payload,
        }
      }
    case 'SET_MODAL_TITLE':
      return {
        ...state,
        modalTitle: payload
      }

    //register form

    case 'RESET_FORM_INPUTS':
      return {
        ...state,
        user_position: '',
        user_name: '',
        user_email: '',
        user_phone: '',
        user_photo: undefined,
        user_token: null,
        user_position_touched: false,
        user_name_touched: false,
        user_email_touched: false,
        user_position_valid: false,
        user_name_valid: false,
        user_email_valid: false,
        user_phone_valid: false,
        user_photo_valid: false,
        users_page: 1,
      }

    case 'SET_POSITIONS':
      return {
        ...state,
        positions: payload
      }
    case 'SET_TOKEN':
      return {
        ...state,
        user_token: payload
      }
    case 'GET_NAME_VALUE':
      return {
        ...state,
        user_name: payload
      }
    case 'GET_EMAIL_VALUE':
      return {
        ...state,
        user_email: payload
      }
    case 'GET_PHONE_VALUE':
      return {
        ...state,
        user_phone: payload
      }
    case 'GET_USER_POSITION':
      return {
        ...state,
        user_position: payload
      }
    case 'GET_USER_PHOTO':
      return {
        ...state,
        user_photo: payload,
      }

    //-> Username validation

    case 'USER_NAME_VALID':
      return {
        ...state,
        user_name_valid: true,
        user_name_errors: '',
        user_name_touched: false
      }
    case 'USER_NAME_INVALID':
      return {
        ...state,
        user_name_valid: false,
        user_name_errors: payload
      }
    case 'USER_NAME_TOUCHED':
      return {
        ...state,
        user_name_touched: true
      }
    case 'USER_NAME_UNTOUCHED':
      return {
        ...state,
        user_name_touched: false
      }

    //-> Email validation

    case 'EMAIL_VALID':
      return {
        ...state,
        user_email_valid: true,
        user_email_errors: '',
        user_email_touched: false
      }
    case 'EMAIL_INVALID':
      return {
        ...state,
        user_email_valid: false,
        user_email_errors: payload
      }
    case 'EMAIL_TOUCHED':
      return {
        ...state,
        user_email_touched: true
      }
    case 'EMAIL_UNTOUCHED':
      return {
        ...state,
        user_email_touched: false
      }

    //-> Phone validation

    case 'PHONE_VALID':
      return {
        ...state,
        user_phone_valid: true,
        user_phone_errors: '',
        user_phone_touched: false
      }
    case 'PHONE_INVALID':
      return {
        ...state,
        user_phone_valid: false,
        user_phone_errors: payload
      }
    case 'PHONE_TOUCHED':
      return {
        ...state,
        user_phone_touched: true
      }
    case 'PHONE_UNTOUCHED':
      return {
        ...state,
        user_phone_touched: false
      }

      //-> Position validation

    case 'POSITION_VALID':
      return {
        ...state,
        user_position_valid: true,
        user_position_errors: '',
      }

    case 'POSITION_INVALID':
      return {
        ...state,
        user_position_valid: false,
        user_position_errors: payload
      }

    case 'POSITION_TOUCHED':
      return {
        ...state,
        user_position_touched: true
      }
    case 'POSITION_UNTOUCHED':
      return {
        ...state,
        user_position_touched: false
      }

      //-> Photo validation

    case 'PHOTO_VALID':
      return {
        ...state,
        user_photo_valid: true,
        user_photo_errors: '',
      }

    case 'PHOTO_INVALID':
      return {
        ...state,
        user_photo_valid: false,
        user_photo_errors: payload
      }

    default:
      return state;
  }
}
