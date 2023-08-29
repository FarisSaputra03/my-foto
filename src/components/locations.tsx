import React from "react";
import Image from "next/image";
export default function Locations() {
  return (
    <section className="text-gray-600 bg-white body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-black">
            Temukan Kami di Kotamu
          </h1>
        </div>
        <div className=" mx-auto">
          <div className="flex flex-wrap w-full relative mb-4">
          <Image width={1338} height={677} src='/img/map.png' alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
}
