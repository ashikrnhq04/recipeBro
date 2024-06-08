"use client";

import { authContext } from "../context/auth-context";
import useAuth from "../hooks/useAuth";

export default function AuthProvider({ children }) {
  const { auth, setAuth } = useAuth({});
  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {children}
    </authContext.Provider>
  );
}
