/** @format */

import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import InputComponents from "./Input";
import {
  DisplayPasswordIcon,
  HidePasswordIcon,
  SpinnerIcon,
} from "../../assets/SvgIcons";

const LoginForm = () => {
  const { login, error, loading, setError, isAuthenticated } =
    useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if the user is already authenticated
    if (isAuthenticated) {
      navigate("/");
    }
    // Clear error when the component is mounted or form is loaded
    setError(null);
  }, [setError, isAuthenticated, navigate]);

  const handleClick = () => {
    navigate("/signup");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className='flex justify-center items-center w-full md:mt-0'>
      <form
        className='md:w-80'
        onSubmit={handleSubmit}>
        <p className='text-center font-sans text-xl mb-4'>Log in</p>

        <InputComponents
          placeholder='Email'
          type='email'
          className='my-5'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className='relative'>
          <InputComponents
            placeholder='Password'
            type={showPassword ? "text" : "password"}
            className='my-5 pr-10'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            onClick={togglePasswordVisibility}
            className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer'>
            {showPassword ? <DisplayPasswordIcon /> : <HidePasswordIcon />}
          </span>
        </div>

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
        <p className='text-center font-sans text-xl my-4'>
          Don't have an account?
          <span
            className='text-blue-500 cursor-pointer'
            onClick={handleClick}>
            SignUp
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
