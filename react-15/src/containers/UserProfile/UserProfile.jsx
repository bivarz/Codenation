import React from 'react';

import './UserProfile.scss';

const UserProfile = ({ avatar, name, username }) => {
  return (
    <section className="profile" data-testid="user-profile">
      <div className="container">
        <div className="profile-data">
          <div className="user">
            <div className="user_thumb">
              {avatar.length > 0 ? <img src={avatar} alt=" " /> : <img src="#" alt=" " />}
            </div>
            <p className="user__name">
              {name || 'Darth'}
              <span>@{username || 'vader'}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default UserProfile;
