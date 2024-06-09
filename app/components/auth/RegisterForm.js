"use client";

import { createAccount } from "@/app/actions";
import {
  errorKeyValue,
  isValidationError,
  serverErrorToReadableError,
} from "@/util/utli";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({});

  const router = useRouter();

  const [error, setError] = useState({});

  function handleOnChange(event) {
    setError((prevError) => ({ ...prevError, [event.target.name]: "" }));
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  async function registerUser(event) {
    event.preventDefault();
    try {
      const register = await createAccount(formData);
      if (register) {
        router.push("/login");
      }
    } catch (err) {
      if (isValidationError(err)) {
        const serverErr = serverErrorToReadableError(err);
        setError((prevErr) => ({
          ...prevErr,
          ...serverErr.reduce((acc, { errKey, errVal }) => {
            acc[errKey] = errVal;
            return acc;
          }, {}),
        }));
      } else {
        error.common = err.message;
      }
    }
  }
  return (
    <form className='login-form' onSubmit={registerUser}>
      <div>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          value={formData.firstName}
          onChange={handleOnChange}
          name='firstName'
          id='firstName'
        />
        {error.firstName && (
          <p className='text-sm text-red-600'>{error.firstName}</p>
        )}
      </div>

      <div>
        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          onChange={handleOnChange}
          value={formData.lastName}
          name='lastName'
          id='lastName'
        />
        {error.lastName && (
          <p className='text-sm text-red-600'>{error.lastName}</p>
        )}
      </div>
      <div>
        <label htmlFor='email'>Email Address</label>
        <input
          type='email'
          onChange={handleOnChange}
          value={formData.email}
          name='email'
          id='email'
        />
        {error?.email && <p className='text-sm text-red-600'>{error.email}</p>}
      </div>

      <div>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          onChange={handleOnChange}
          name='password'
          value={formData.password}
          id='password'
        />
        {error.password && (
          <p className='text-sm text-red-600'>{error.password}</p>
        )}
      </div>

      <button
        type='submit'
        className='bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4'>
        Create Account
      </button>
      {error.common && <p className='text-sm text-red-600'>{error.common}</p>}
    </form>
  );
}
