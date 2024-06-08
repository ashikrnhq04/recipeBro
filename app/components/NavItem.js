"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({ path, children }) {
  const pathName = usePathname();

  return (
    <li
      className={`py-2 flex flex-center items-center ${
        path === pathName ? "active" : ""
      }`}>
      <Link href={path}>{children}</Link>
    </li>
  );
}
