/** @format */
import React, { useState } from "react";
import LoginInput from "./LoginInput";
import { useNavigate } from "react-router-dom";
import { RegisterSvgIcon } from "../constant/SvgIcons";
import axios from "axios";

const SignUpForm = () => {
  const navigate = useNavigate();

  // Form states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // Signup API request
  const postSignUpData = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://68.183.112.7/api/v1/user/signup`,
        {
          firstname: firstName,
          lastname: lastName,
          email,
          password,
        }
      );

      if (response.status === 201) {
        // Successfully registered
        console.log("Registration successful:", response.data);
        navigate("/login"); // Redirect to login page
      }
    } catch (err) {
      console.error("Error during signup:", err);
      setError("Failed to sign up. Please check your details and try again.");
    }
  };

  return (
    <div className='flex justify-center items-center border w-full'>
      <form
        className='p-3 md:max-w-[600px] w-full px-6'
        onSubmit={postSignUpData}>
        <p className='text-center font-sans text-xl mb-4'>Sign Up</p>
        {error && <p className='text-red-500 text-center'>{error}</p>}{" "}
        {/* Error message */}
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
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <LoginInput
            placeholder='Store Url'
            type='text'
          />
          <LoginInput
            placeholder='Password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginInput
            placeholder='Confirm Password'
            type='password'
          />
        </div>
        <p className='text-center text-sm mt-20'>
          By creating an account, you agree to our
          <span
            className='text-blue-500 cursor-pointer'
            onClick={() => navigate("/terms")}>
            {" "}
            Terms{" "}
          </span>
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
            onClick={(e) => navigate("/login")}>
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
