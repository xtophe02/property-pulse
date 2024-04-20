"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 ${
        pathname === href && "text-blue-600"
      }`}
    >
      {children}
    </Link>
  );
}
