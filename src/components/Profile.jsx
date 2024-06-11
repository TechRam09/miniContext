/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';

function Profile() {
    const { user } = useContext(UserContext); // Correct usage of 'user'

    if (!user) return <div><br />Please Login!</div>;
    return <div>Welcome {user.username}</div>;
}

export default Profile;
