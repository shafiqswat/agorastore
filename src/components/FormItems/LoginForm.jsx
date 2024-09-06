/** @format */

import React, { useContext, useState } from "react";
import LoginInput from "./LoginInput";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signup");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/profile");
    } catch (error) {
      setError("Invalid credentials, please try again.");
    }
  };
  return (
    <div className='flex justify-center items-center border w-full'>
      <form
        className='md:w-80'
        onSubmit={handleSubmit}>
        <p className='text-center font-sans text-xl mb-4'>Log in</p>
        <LoginInput
          placeholder='Email'
          type='email'
          className='my-5'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LoginInput
          placeholder='Password'
          type='password'
          className='my-5'
          onChange={(e) => setPassword(e.target.value)}
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
