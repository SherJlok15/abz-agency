import React from 'react';
import HeadShake from 'react-reveal/HeadShake';
import Fade from 'react-reveal/Fade';


import './RegisterForm.scss';

const RegisterForm = ({
  users,
  user_name, user_name_errors, user_name_touched,
  getUserNameValue, usernameValidatorOnBlur, usernameValidatorOnChange,
  user_email, user_email_errors, user_email_touched,
  getUserEmailValue, emailValidatorOnBlur, emailValidatorOnChange,
  user_phone, user_phone_errors, user_phone_touched,
  getUserPhoneValue, phoneValidatorOnBlur, phoneValidatorOnChange,
  user_position, user_position_errors,
  getUserPositionValue, positionValidatorOnChange,
  user_photo, user_photo_errors,
  photoValidatorOnChange,
  positions, user_token,
  onSubmitRegisterForm,
}) => {
  return (
    <section className="register-form" id='register-form'>
      <div className="page_container">
        <div className="register-form__container">

          <Fade top>
            <h2 className="register-form__title title">
              Register to get a work
            </h2>
          </Fade>

          <Fade left>
            <form className="register-form__form" onSubmit={(e) => onSubmitRegisterForm(e)}>
              <h3 className="register-form__form__info">
                Attention! After successful registration and alert, update the list of users in the block from the top
              </h3>

              <label className="register-form__form__name">
                <span>Name</span>
                <input
                  type='text'
                  placeholder="Your name"
                  value={user_name}
                  onChange={
                    user_name_touched ?
                      (event) => usernameValidatorOnChange(event.target.value) :
                      (event) => getUserNameValue(event.target.value)
                  }
                  onBlur={event => usernameValidatorOnBlur(event.target.value)}
                />
              </label>
              <div className="register-form__form__errors">
                {user_name_errors === '' ?
                  <span>{user_name_errors}</span> :
                  <HeadShake>{user_name_errors}</HeadShake>
                }
              </div>

              <label className="register-form__form__email">
                <span>Email</span>
                <input
                  type="text"
                  placeholder="Your email"
                  value={user_email}
                  onChange={
                    user_email_touched ?
                      (event) => emailValidatorOnChange(event.target.value.toLowerCase()) :
                      (event) => getUserEmailValue(event.target.value.toLowerCase())
                  }
                  onBlur={(event) => emailValidatorOnBlur(event.target.value)}
                />
              </label>
              <div className="register-form__form__errors">
                {user_email_errors === '' ?
                  <span>{user_email_errors}</span> :
                  <HeadShake>{user_email_errors}</HeadShake>
                }
              </div>

              <label className="register-form__form__phone">
                <span>Phone number</span>
                <input
                  type="phone"
                  placeholder="+380 XX XXX XX XX"
                  value={user_phone}
                  onChange={
                    user_phone_touched ?
                      (event) => phoneValidatorOnChange(event.target.value) :
                      (event) => getUserPhoneValue(event.target.value)
                  }
                  onBlur={(event) => phoneValidatorOnBlur(event.target.value)}
                />
              </label>
              <div className="register-form__form__errors">
                {user_phone_errors === '' ?
                  <span>{user_phone_errors}</span> :
                  <HeadShake>{user_phone_errors}</HeadShake>
                }
              </div>

              <div className="register-form__form__position">
                <span>Select your position</span>
                {positions.map(item =>
                  <label key={item.id}>
                    <input
                      type="radio"
                      name="position"
                      value={item.name}
                      onChange={(event) => positionValidatorOnChange(event.target)}
                      checked={item.name === user_position}
                    />
                  {item.name}
                  </label>
                )}
              </div>

              <div className="register-form__form__errors">
                {user_position_errors === '' ?
                  <span>{user_position_errors}</span> :
                  <HeadShake>{user_position_errors}</HeadShake>
                }
              </div>

              <div className="register-form__form__photo">
                <span>Photo</span>
                <div>
                  <input disabled value={user_photo !== undefined ? user_photo.name : ""} placeholder="Upload your photo"/>
                  <label>
                    <input
                      type="file"
                      onChange={(e) => photoValidatorOnChange(e.target.files[0])}
                      className="photo"
                    />
                  <span className="browse-button">Browse</span>
                  </label>
                </div>
              </div>

              <div className="register-form__form__errors">
                {user_photo_errors === '' ?
                  <span>{user_photo_errors}</span> :
                  <HeadShake>{user_photo_errors}</HeadShake>
                }
              </div>

              <div className="register-form__form__button">
                <button>
                  Sing up now
                </button>
              </div>
            </form>
          </Fade>

        </div>
      </div>
    </section>
  )
}

export default RegisterForm;
