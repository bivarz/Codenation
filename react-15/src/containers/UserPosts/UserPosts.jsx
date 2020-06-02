import React from 'react';

import Post from '../../components/Post';

import './UserPosts.scss';

const UserPosts = ({ posts }) => (
  <div className="container" data-testid="users-post">
    <div className="user-posts">

    </div>
    <div className="no-posts">

    </div>
  </div>
);

export default UserPosts;
