import Image from "next/image";
import Link from "next/link";
import NavItem from "./NavItem";
import LoginLogout from "./auth/LoginLogout";

export default function Navbar() {
  return (
    <nav>
      <div className='container flex justify-between py-6'>
        <Link href='/'>
          <Image
            src='/assets/images/logo.png'
            alt=''
            className='object-cover h-[40px]'
            width={120}
            height={80}
          />
        </Link>

        <ul className='flex flex-center gap-4 text-sm text-gray-500'>
          <NavItem path='/'>Home</NavItem>
          <NavItem path='/recipes'>Recipe</NavItem>
          <li className='flex gap-2 py-2  items-center'>
            <LoginLogout />
          </li>
        </ul>
      </div>
    </nav>
  );
}
