import React from 'react';
import Fade from 'react-reveal/Fade';

import './FullUser.scss';

const FullUser = ({ user }) => {
  return (
    <Fade bottom>
      <div className="full-user">
        <img className="full-user__photo" src={user.photo} alt={user.name} title={user.name}/>
        <h3 className="full-user__name" title={user.name}>
          { user.name }
        </h3>
        <span className="full-user__position" title={user.position}>
          { user.position }
        </span>

        <span className="full-user__email" title={user.email}>
          { user.email }
        </span>

        <span className="full-user__phone" title={user.phone}>
          { user.phone }
        </span>

      </div>
    </Fade>
  )
}

export default FullUser;
