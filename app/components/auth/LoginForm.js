"use client";
import { makeLogin } from "@/app/actions";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { authContext } from "@/app/context/auth-context";
import { FaSpinner } from "react-icons/fa";

export default function LoginForm() {
  const [error, setError] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const { setAuth } = useContext(authContext);

  const router = useRouter();

  async function handleLogin(event) {
    event.preventDefault();

    try {
      setIsLoading(true);
      const formData = new FormData(event.target);
      const foundUser = await makeLogin(formData);
      if (foundUser) {
        setAuth(foundUser);
        router.push("/");
      } else {
        formData.get("email") === "" &&
          setError((prevError) => ({
            ...prevError,
            email: "Email field can't be blank!",
          }));

        formData.get("password") === "" &&
          setError((prevError) => ({
            ...prevError,
            password: "Password field can't be blank!",
          }));

        formData.get("email") !== "" &&
          formData.get("password") !== "" &&
          setError((prevError) => ({
            ...prevError,
            email: "",
            password: "",
            common: "Invalid email or password",
          }));
      }
    } catch (error) {
      console.log(error);
      if (error.message.startsWith("connect ECONNREFUSED")) {
        setError((prevError) => ({
          ...prevError,
          common: "Database connection failed!",
        }));
      } else {
        setError((prevError) => ({
          ...prevError,
          common: error.message,
        }));
      }
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <h4 className='font-bold text-2xl'>Sign in</h4>
      <form className='login-form' onSubmit={handleLogin}>
        <div>
          <label htmlFor='email'>Email Address</label>
          <input type='email' autoComplete='username' name='email' id='email' />
          {error?.email && (
            <p className='text-red-600 text-sm'>{error.email}</p>
          )}
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            autoComplete='current-password'
            id='password'
          />
          {error?.password && (
            <p className='text-red-600 text-sm'>{error.password}</p>
          )}
        </div>

        <button
          type='submit'
          className='bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4'>
          {isLoading ? <FaSpinner className='animate-spin m-auto' /> : "Login"}
        </button>
        {error?.common && (
          <p className='text-red-600 my-4 text-center'>{error.common}</p>
        )}
      </form>
    </>
  );
}
