import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';



const ProfileRoute = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const resp = await fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users?search=${username}`)
      const data = await resp.json();
      setUser(data[0])
    }
    getUser();
  }, [username])

  useEffect(() => {
    if (user?.id) {
      const getPost = async () => {
        try {
          const res = await fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${user.id}/posts/`)
          const data = await res.json();
          setPosts(data)
        } catch (err) {
          alert("err")
        }
      }
      getPost();
    }


  }, [user])

  return (
    <div data-testid="profile-route">
      {user
        ?
        <>
          <UserProfile avatar={user?.avatar} name={user?.name} username={user?.username} />
          <UserPosts posts={posts} />
        </>
        : <Loading />
      }
    </div>
  );
};

export default ProfileRoute;
