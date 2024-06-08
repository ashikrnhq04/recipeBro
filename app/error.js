"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <section className='flex flex-center flex-col items-center'>
      <div className='my-8'>{error.message}</div>
      <div>
        <button
          className='btn-primary py-2 px-6 m-2 rounded-md bg-slate-200'
          onClick={() => reset()}>
          Retry
        </button>
      </div>
    </section>
  );
}
