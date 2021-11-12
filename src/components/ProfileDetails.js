import React from "react";
import { useParams } from "react-router-dom";

const ProfileDetails = ({ users }) => {
  const { id } = useParams();
  return (
    <div>
       {users.map(use=> id==use.id? use.username : '' )} 
    </div>
  );
};

export default ProfileDetails;
