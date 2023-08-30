"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import Image from "next/image";

import "../styles/navbar.css";

export default function Navbar() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    if (window != undefined) {
      window.addEventListener("scroll", changeColor);
    }
  });

  return (
    <header className={color ? "header header-bg" : "header"}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image width={347.66} height={40} src="/img/logo.png" alt="" />
        </a>
        <nav className="md:ml-auto flex text-ls font-sans flex-wrap items-center justify-center">
          <a className="mr-5 text-white">Booking</a>
          <a className="mr-5 text-white">Location</a>
          <a className="mr-5 text-white">Request</a>
          <div className="grid gap-4 grid-cols-2">
            <Link href={"/login"}>
              <button className="inline-flex text-white border-2 border-tertiary py-1 px-4 focus:outline-none rounded">
                <p className="text-yellow-300">Masuk</p>
              </button>
            </Link>
            <Link href={"/register"}>
              <button className="inline-flex text-white border-2 border-tertiary py-1 px-4 focus:outline-none rounded">
                <p className="text-yellow-300">Daftar</p>
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
