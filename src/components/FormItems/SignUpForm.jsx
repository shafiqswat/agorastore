/** @format */

import React, { useState } from "react";
import LoginInput from "./LoginInput";
import { useNavigate } from "react-router-dom";
import { RegisterSvgIcon } from "../constant/SvgIcons";

const SignUpForm = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className='flex justify-center items-center border w-full'>
      <form className='p-3 md:max-w-[600px] w-full px-6'>
        <p className='text-center font-sans text-xl mb-4'>Sign Up</p>
        <div className='grid w-full md:grid-cols-2 gap-x-6 gap-y-2'>
          <LoginInput
            placeholder='First name'
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <LoginInput
            placeholder='Last name'
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <LoginInput
            placeholder='Work Email'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <LoginInput
            placeholder='Store Url'
            type='text'
          />
          <LoginInput
            placeholder='Password'
            type='text'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginInput
            placeholder='Confirm Password'
            type='text'
          />
        </div>
        <p className='text-center text-sm mt-20'>
          By creating an account, you agree to our
          <span
            className='text-blue-500 cursor-pointer'
            onClick={() => navigate("/terms")}>
            {" "}
            Terms{" "}
          </span>{" "}
          and
          <span
            className='text-blue-400 cursor-pointer'
            onClick={() => navigate("/privacy")}>
            {" "}
            Privacy policy.
          </span>
        </p>
        <p className='text-center font-sans text-sm my-4'>
          Already have a merchant account?
          <span
            className='text-blue-500 cursor-pointer'
            onClick={handleClick}>
            {" "}
            Log in
          </span>
        </p>
        <div className='flex md:justify-center lg:justify-end'>
          <button
            type='submit'
            className='bg-black w-fit px-5 h-14 rounded-sm text-white font-sans text-xl'>
            Register <RegisterSvgIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
