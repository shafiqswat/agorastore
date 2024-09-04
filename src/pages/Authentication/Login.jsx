/** @format */

import LoginForm from "../../components/FormItems/LoginForm";
import AuthenticationSidebar from "../../components/layout/AuthenticationSidebar";
import React from "react";

const Login = () => {
  return (
    <div className='md:flex'>
      <AuthenticationSidebar />
      <LoginForm />
    </div>
  );
};

export default Login;
