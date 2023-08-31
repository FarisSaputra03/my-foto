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
      <div className="container mx-auto flex  p-5 flex-col md:flex-row items-center">
        <nav className="container flex justify-between px-4 mx-auto">
          <div className="flex justify-start">
            <Image width={347.66} height={40} src="/img/logo.png" alt="" />
          </div>
          <div className="hidden space-x-8 sm:flex">
            <a className="ml-5 text-white">Booking</a>
            <a className="ml-5 text-white">Location</a>
            <a className="ml-5 text-white">Request</a>
            <div className="grid gap-1 grid-cols-1">
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
          </div>
          <div className="flex mt-3 ml-10 sm:hidden">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.666656 0.5C0.666656 0.223858 0.890514 0 1.16666 0H11.1667C11.4428 0 11.6667 0.223858 11.6667 0.5C11.6667 0.776142 11.4428 1 11.1667 1H1.16666C0.890514 1 0.666656 0.776142 0.666656 0.5ZM5.66666 6C5.66666 5.72386 5.89051 5.5 6.16666 5.5L11.1667 5.5C11.4428 5.5 11.6667 5.72386 11.6667 6C11.6667 6.27614 11.4428 6.5 11.1667 6.5L6.16666 6.5C5.89051 6.5 5.66666 6.27614 5.66666 6ZM1.16666 11C0.890514 11 0.666656 11.2239 0.666656 11.5C0.666656 11.7761 0.890514 12 1.16666 12H11.1667C11.4428 12 11.6667 11.7761 11.6667 11.5C11.6667 11.2239 11.4428 11 11.1667 11H1.16666Z"
                fill="white"
              />
            </svg>
          </div>
        </nav>
      </div>
    </header>
  );
}
