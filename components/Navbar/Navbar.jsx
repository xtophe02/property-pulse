"use client";

import NavLink from "./Navbar-links";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 dark:bg-neutral-800">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between"
        aria-label="Global"
      >
        <Link
          className="sm:order-1 flex-none text-xl font-semibold dark:text-white"
          href="/"
        >
          Brand
        </Link>
        <div className="sm:order-3 flex items-center gap-x-2">
          <button
            type="button"
            className="sm:hidden e p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10"
            data-hs-collapse="#navbar-alignment"
            aria-controls="navbar-alignment"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <svg
              className="hs-collapse-open:hidden flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg
              className="hs-collapse-open:block hidden flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
          {!isLoggedIn && (
            <button
              type="button"
              className="hidden py-2 px-3 sm:inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            >
              <svg
                enableBackground="new 0 0 24 24"
                height="24"
                viewBox="0 0 48 48"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 size-4"
              >
                <path
                  d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-11.045 0-20 8.955-20 20s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                  fill="#ffc107"
                />
                <path
                  d="m6.306 14.691 6.571 4.819c1.778-4.402 6.084-7.51 11.123-7.51 3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-7.682 0-14.344 4.337-17.694 10.691z"
                  fill="#ff3d00"
                />
                <path
                  d="m24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238c-2.008 1.521-4.504 2.43-7.219 2.43-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025c3.31 6.477 10.032 10.921 17.805 10.921z"
                  fill="#4caf50"
                />
                <path
                  d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238c-.438.398 6.591-4.807 6.591-14.807 0-1.341-.138-2.65-.389-3.917z"
                  fill="#1976d2"
                />
              </svg>
              Login or Register
            </button>
          )}
          {isLoggedIn && (
            <>
              <button
                type="button"
                className="relative inline-flex justify-center items-center h-[46px] w-[46px] text-sm font-semibold rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
              >
                <svg
                  className="size-full text-gray-300"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.62854"
                    y="0.359985"
                    width="15"
                    height="15"
                    rx="7.5"
                    fill="white"
                  ></rect>
                  <path
                    d="M8.12421 7.20374C9.21151 7.20374 10.093 6.32229 10.093 5.23499C10.093 4.14767 9.21151 3.26624 8.12421 3.26624C7.0369 3.26624 6.15546 4.14767 6.15546 5.23499C6.15546 6.32229 7.0369 7.20374 8.12421 7.20374Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M11.818 10.5975C10.2992 12.6412 7.42106 13.0631 5.37731 11.5537C5.01171 11.2818 4.69296 10.9631 4.42107 10.5975C4.28982 10.4006 4.27107 10.1475 4.37419 9.94123L4.51482 9.65059C4.84296 8.95684 5.53671 8.51624 6.30546 8.51624H9.95231C10.7023 8.51624 11.3867 8.94749 11.7242 9.62249L11.8742 9.93184C11.968 10.1475 11.9586 10.4006 11.818 10.5975Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="absolute top-0 end-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-red-500 text-white">
                  99+
                </span>
              </button>
              <img
                className="inline-block size-[46px] rounded-full"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Image Description"
              />{" "}
            </>
          )}
        </div>
        <div
          id="navbar-alignment"
          className={` ${
            !menuOpen && "hidden"
          } overflow-hidden  basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2`}
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/properties">Properties</NavLink>
            {isLoggedIn && (
              <NavLink href="/properties/add">Add Property</NavLink>
            )}
            {!isLoggedIn && (
              <button
                type="button"
                className="sm:hidden py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
              >
                Login or Register
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
