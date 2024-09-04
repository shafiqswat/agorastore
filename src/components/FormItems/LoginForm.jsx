/** @format */

import React from "react";
import LoginInput from "./LoginInput";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signup");
  };
  return (
    <div className='flex justify-center items-center border w-full'>
      <form className='md:w-80'>
        <p className='text-center font-sans text-xl mb-4'>Log in</p>
        <LoginInput
          placeholder='Email'
          type='email'
          className='my-5'
        />
        <LoginInput
          placeholder='Password'
          type='password'
          className='my-5'
        />
        <button
          type='submit'
          className='bg-black w-full h-14 rounded-sm text-white font-sans text-xl'>
          Go to the Home Page
        </button>
        <p className='text-center font-sans text-xl my-4'>
          Don't have an account?
          <span
            className='text-blue-500 cursor-pointer'
            onClick={handleClick}>
            {"   "}
            SignUp
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
