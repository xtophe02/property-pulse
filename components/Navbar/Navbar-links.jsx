"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({ href, children }) {
  // console.log("🚀 ~ NavLink ~ href:", href);
  const pathname = usePathname();
  // console.log("🚀 ~ NavLink ~ pathname:", pathname === href);
  return (
    <Link
      href={href}
      className={`font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 ${
        pathname === href && "text-sky-600"
      }`}
    >
      {children}
    </Link>
  );
}
