/** @format */

import React, { useContext, useState } from "react";
import LoginInput from "./LoginInput";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { SpinnerIcon } from "../constant/SvgIcons";

const LoginForm = () => {
  const { login, error, loading } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signup");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className='flex justify-center items-center border w-full'>
      <form
        className='md:w-80'
        onSubmit={handleSubmit}>
        <p className='text-center font-sans text-xl mb-4'>Log in</p>

        {/* Email Input */}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className='text-red-500 text-center mb-4'>{error}</p>}

        <button
          type='submit'
          className='bg-black w-full h-14 rounded-sm text-white font-sans text-xl'
          disabled={loading}>
          {loading ? (
            <div
              role='status'
              className='flex justify-center gap-2'>
              Login in <SpinnerIcon />
            </div>
          ) : (
            "Go to the Home Page"
          )}
        </button>

        {/* Signup link */}
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
