/** @format */

import React from "react";
import LoginForm from "../components/formItems/LoginForm";
import AuthenticationSidebar from "../components/common/AuthSidebar";

const Login = () => {
  return (
    <div className='flex md:flex-row flex-col md:gap-0 gap-10 md:h-screen'>
      <AuthenticationSidebar />
      <LoginForm />
    </div>
  );
};

export default Login;
