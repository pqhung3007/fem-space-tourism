/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleOpenMenu = (e: React.MouseEvent) => {
    setOpen(!open);
    document.getElementById("menu-btn").classList.toggle("open");
  };

  return (
    <header className="absolute flex justify-between w-full items-center pl-12 pt-6 md:pt-0 lg:pt-12 pr-8 md:pr-0">
      <Link href="/">
        <img
          src="/assets/shared/logo.svg"
          alt=""
          className="w-12 h-12 cursor-pointer"
        />
      </Link>

      <nav className="hidden md:block">
        <div className="flex space-x-8 px-16 h-24 text-indigo-100 bg-white/20 backdrop-blur-sm font-sanCondensed tracking-[3px] relative">
          <Link href="/" passHref>
            <a
              className={`uppercase flex items-center h-full hover:text-white duration-200 ${
                router.pathname === "/" && " border-b-2 border-white text-white"
              }`}
            >
              <span className="font-bold mr-2 hidden lg:inline">00</span> Home
            </a>
          </Link>
          <Link href="/destination" passHref>
            <a
              className={`uppercase flex items-center h-full hover:text-white duration-200 ${
                router.pathname === "/destination" &&
                " border-b-2 border-white text-white"
              }`}
            >
              <span className="font-bold mr-2 hidden lg:inline">01</span>
              Destination
            </a>
          </Link>
          <Link href="/crew" passHref>
            <a
              className={`uppercase flex items-center h-full hover:text-white duration-200 ${
                router.pathname === "/crew" &&
                " border-b-2 border-white text-white"
              }`}
            >
              <span className="font-bold mr-2 hidden lg:inline">02</span>crew
            </a>
          </Link>
          <Link href="/technology" passHref>
            <a
              className={`uppercase flex items-center h-full hover:text-white duration-200 ${
                router.pathname === "/technology" &&
                " border-b-2 border-white text-white"
              }`}
            >
              <span className="font-bold mr-2 hidden lg:inline">03</span>
              technology
            </a>
          </Link>
        </div>
      </nav>

      {/* Hamburger menu */}
      <button
        id="menu-btn"
        className="block relative md:hidden focus:outline-none hamburger z-20"
        onClick={handleOpenMenu}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          id="menu"
          className="absolute top-0 right-0 flex-col items-center w-2/3 min-h-screen pl-8 pt-32 space-y-6 font-sanCondensed text-white uppercase tracking-wider bg-white/10 backdrop-blur-lg duration-200 transition"
        >
          <Link href="/">
            <a className="uppercase flex items-center h-full text-white/75 hover:text-white duration-200">
              <span className="font-bold mr-2 lg:inline">00</span> Home
            </a>
          </Link>
          <Link href="/destination">
            <a className="uppercase flex items-center text-white/75 hover:text-white duration-200">
              <span className="font-bold mr-2 lg:inline">01</span>
              Destination
            </a>
          </Link>
          <Link href="/crew">
            <a className="uppercase flex items-center text-white/75 hover:text-white duration-200">
              <span className="font-bold mr-2 lg:inline">02</span>crew
            </a>
          </Link>
          <Link href="/technology">
            <a className="uppercase flex items-center text-white/75 hover:text-white duration-200">
              <span className="font-bold mr-2 lg:inline">03</span>
              technology
            </a>
          </Link>
        </div>
      )}
    </header>
  );
}
