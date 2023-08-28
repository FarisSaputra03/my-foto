"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import Image from "next/image";

import "../styles/navbar.css";

export default function NavbarLogin() {
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
          <div className="grid gap-4 grid-cols-1">
            <Link href={"/"}>
              <button className="text-yellow-300 flex gap-3">
                Nugroho
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 21.5C4.45 21.5 3.979 21.304 3.587 20.912C3.195 20.52 2.99934 20.0493 3 19.5V5.5C3 4.95 3.196 4.479 3.588 4.087C3.98 3.695 4.45067 3.49934 5 3.5H11C11.2833 3.5 11.521 3.596 11.713 3.788C11.905 3.98 12.0007 4.21733 12 4.5C12 4.78333 11.904 5.021 11.712 5.213C11.52 5.405 11.2827 5.50067 11 5.5H5V19.5H11C11.2833 19.5 11.521 19.596 11.713 19.788C11.905 19.98 12.0007 20.2173 12 20.5C12 20.7833 11.904 21.021 11.712 21.213C11.52 21.405 11.2827 21.5007 11 21.5H5ZM17.175 13.5H10C9.71667 13.5 9.479 13.404 9.287 13.212C9.095 13.02 8.99934 12.7827 9 12.5C9 12.2167 9.096 11.979 9.288 11.787C9.48 11.595 9.71734 11.4993 10 11.5H17.175L15.3 9.625C15.1167 9.44167 15.025 9.21667 15.025 8.95C15.025 8.68333 15.1167 8.45 15.3 8.25C15.4833 8.05 15.7167 7.94567 16 7.937C16.2833 7.92834 16.525 8.02433 16.725 8.225L20.3 11.8C20.5 12 20.6 12.2333 20.6 12.5C20.6 12.7667 20.5 13 20.3 13.2L16.725 16.775C16.525 16.975 16.2873 17.071 16.012 17.063C15.7367 17.055 15.4993 16.9507 15.3 16.75C15.1167 16.55 15.029 16.3123 15.037 16.037C15.045 15.7617 15.141 15.5327 15.325 15.35L17.175 13.5Z"
                    fill="#F9E555"
                  />
                </svg>
              </button> 
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
