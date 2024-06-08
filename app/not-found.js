import Link from "next/link";

export default function NotFound() {
  return (
    <div className='col-span-12 text-center my-32'>
      <h3 className='text-[130px] font-bold leading-none'>404</h3>
      <div className='text-[50px] leading-none'>Not found!</div>
      <button className='btn-primary py-2 px-6 m-2 rounded-md bg-slate-200'>
        <Link href='/'>Back to Home</Link>
      </button>
    </div>
  );
}
