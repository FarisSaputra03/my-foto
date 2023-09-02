import React from "react";
import Image from "next/image";
import "../styles/popular.css";

export default function Popular() {
  const listView = [
    {
      img: "/img/wide box.png",
      title: "Ultra Wide Box",
      price: "Start From IDR 15.000",
    },
    {
      img: "/img/4box.png",
      title: "Portrait 4 Box",
      price: "Start From IDR 15.000",
    },
    {
      img: "/img/big box.png",
      title: "Big Box",
      price: "Start From IDR 15.000",
    },
    {
      img: "/img/wide box.png",
      title: "Ultra Wide Box",
      price: "Start From IDR 15.000",
    },
    {
      img: "/img/4box.png",
      title: "Portrait 4 Box",
      price: "Start From IDR 15.000",
    },
    {
      img: "/img/big box.png",
      title: "Big Box",
      price: "Start From IDR 15.000",
    },
    {
      img: "/img/wide box.png",
      title: "Ultra Wide Box",
      price: "Start From IDR 15.000",
    },
    {
      img: "/img/4box.png",
      title: "Portrait 4 Box",
      price: "Start From IDR 15.000",
    },
    {
      img: "/img/big box.png",
      title: "Big Box",
      price: "Start From IDR 15.000",
    },
  ];
  return (
    <section className="text-gray-600 bg-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-black">
            Layanan Photo Terbaik Kami
          </h1>
        </div>
        <div className="flex flex-wrap no-scrollbar overflow-auto -m-4">
          <div className="flex justify-center w-full  -m-4">
            {listView.map((data: any, index) => (
              <div key={index + 1} className="p-5">
                <div className="h-auto w-56 border-2 group-hover:scale-110  card hover:shadow border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <div className="h-48 rounded w-full object-cover relative object-center mb-6">
                    <Image fill src={data.img} alt="" />
                  </div>
                  <div className="p-5">
                    <h2 className="text-sm text-gray-900 font-bold title-font">
                      {data.title}
                    </h2>
                    <div className="flex text-gray-500 gap-5">
                      <p>{data.price}</p>
                    </div>
                    <div className="w-auto flex justify-center pt-5">
                      <button className=" flex text-white bg-ungu border-0 py-2 px-6 italic focus:outline-none rounded-lg text-xs">
                        Ayok Buruan Daftar !
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}