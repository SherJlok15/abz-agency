import React from 'react';
import Fade from 'react-reveal/Fade';
import { FullUser } from '../';

import './Users.scss';

const Users = ({ users, showMoreUsers, total_users }) => {
  return (
    <section className="users" id="users">
      <div className="page_container">
        <div className="users-container">
          <Fade top>
            <h2 className="users__title title">
              Our cheerful users
            </h2>
            <h4 className="users__info">
              Attention! Sorting users by registration date
            </h4>
          </Fade>

          <div className="users__list">
            {
              users === null ?
                <div className="users__list__loading">
                  Loading...
                </div> :
                users.map(user =>
                  <FullUser user={user} key={user.id}/>
                )
            }
          </div>
          <Fade bottom>
            <div className="users__button">
              <button
                onClick={showMoreUsers}
                className={
                  users !== null ? users.length >= total_users ? "users__button--hide" : "users__button" : "users__button"
                  }
              >
                Show more
              </button>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default Users;
