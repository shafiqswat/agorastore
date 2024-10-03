/** @format */
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className='border rounded-xl p-5 mt-10'>
      <h2 className='font-semibold text-2xl'>Profile</h2>
      <p className='text-sm text-neutral-500 mb-7'>
        Manage your profile below.
      </p>

      {user ? (
        <>
          <p>
            <strong>Email</strong> : {user.email}
          </p>
          <p>
            <strong>Name</strong> : {user.firstname} {user.lastname}
          </p>
        </>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
};

export default Profile;
