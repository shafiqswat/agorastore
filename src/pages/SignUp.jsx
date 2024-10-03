/** @format */

import SignUpForm from "../components/formItems/SignUpForm";
import AuthenticationSidebar from "../components/common/AuthSidebar";
import React from "react";

const SignUp = () => {
  return (
    <div className='md:flex h-screen'>
      <AuthenticationSidebar />
      <SignUpForm />
    </div>
  );
};

export default SignUp;
