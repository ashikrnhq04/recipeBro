"use client";

import { authContext } from "@/app/context/auth-context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function LoginLogout() {
  const { auth, setAuth } = useContext(authContext);
  const route = useRouter();

  function handleLogout() {
    setAuth(null);
    route.push("/login");
  }
  return auth ? (
    <>
      <p>{`Hello, ${auth?.firstName} ${auth.lastName}`}</p>
      <button
        className='text-red-600 px-2 rounded-md content-center'
        onClick={handleLogout}>
        Logout
      </button>
    </>
  ) : (
    <Link
      className='py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center'
      href='/login'>
      Login
    </Link>
  );
}
