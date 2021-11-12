import React from "react";
import { Link } from "react-router-dom";

const Profile = ({ users }) => {
  return (
    <div>
      <h1>Profile</h1>
      {users.map((user) => (
        <Link to={`/ProfileDetails/${user.id}`}>
          <h1>{user.name}</h1>
        </Link>
      ))}
    </div>
  );
};

export default Profile;
