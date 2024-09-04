/** @format */

import SignUpForm from "../../components/FormItems/SignUpForm";
import AuthenticationSidebar from "../../components/layout/AuthenticationSidebar";
import React from "react";

const SignUp = () => {
  return (
    <div className='md:flex'>
      <AuthenticationSidebar />
      <SignUpForm />
    </div>
  );
};

export default SignUp;
