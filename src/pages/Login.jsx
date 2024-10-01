/** @format */

import React from "react";
import LoginForm from "../components/FormItems/LoginForm";
import AuthenticationSidebar from "../components/layout/AuthenticationSidebar";

const Login = () => {
  return (
    <div className='md:flex h-screen'>
      <AuthenticationSidebar />
      <LoginForm />
    </div>
  );
};

export default Login;
