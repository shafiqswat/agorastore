/** @format */

import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  DisplayPasswordIcon,
  HidePasswordIcon,
  RegisterSvgIcon,
  SpinnerIcon,
} from "../../assets/SvgIcons";
import { AuthContext } from "../../context/AuthContext";
import InputComponents from "./Input";

const SignUpForm = () => {
  const navigate = useNavigate();
  const { signup, error, loading, setError, isAuthenticated } =
    useContext(AuthContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    // Redirect if the user is already authenticated
    if (isAuthenticated) {
      navigate("/");
    }
    // Clear error when the component is mounted or form is loaded
    setError(null);
  }, [setError, isAuthenticated, navigate]);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Toggle confirm password visibility
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const postSignUpData = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    } else if (password.length < 6) {
      setError("Minimum Password is Required 6 characters.");
      return;
    }

    await signup(firstName, lastName, email, password);
  };

  return (
    <div className='flex justify-center items-center border w-full'>
      <form
        className='p-3 md:max-w-[600px] w-full px-6'
        onSubmit={postSignUpData}>
        <p className='text-center font-sans text-xl mb-4'>Sign Up</p>
        <div className='grid w-full md:grid-cols-2 gap-x-6 gap-y-2'>
          <InputComponents
            placeholder='First name'
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <InputComponents
            placeholder='Last name'
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <InputComponents
            placeholder='Work Email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className='relative border'>
            <InputComponents
              placeholder='Password'
              type={showPassword ? "text" : "password"}
              className='pr-10 '
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              onClick={togglePasswordVisibility}
              className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer'>
              {showPassword ? <DisplayPasswordIcon /> : <HidePasswordIcon />}
            </span>
          </div>

          <div className='relative'>
            <InputComponents
              placeholder='Confirm Password'
              type={showConfirmPassword ? "text" : "password"}
              className='pr-10'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span
              onClick={toggleConfirmPasswordVisibility}
              className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer'>
              {showConfirmPassword ? (
                <DisplayPasswordIcon />
              ) : (
                <HidePasswordIcon />
              )}
            </span>
          </div>
        </div>
        {error && <p className='text-red-500 text-center'>{error}</p>}
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
            onClick={() => navigate("/login")}>
            {" "}
            Log in
          </span>
        </p>
        <div className='flex md:justify-center lg:justify-end'>
          <button
            type='submit'
            className='bg-black w-fit px-5 h-14 rounded-sm text-white font-sans text-xl'
            disabled={loading}>
            {loading ? (
              <div
                role='status'
                className='flex justify-center gap-2'>
                <span>Sign Up</span> <SpinnerIcon />
              </div>
            ) : (
              <>
                <span>Register</span> <RegisterSvgIcon />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
