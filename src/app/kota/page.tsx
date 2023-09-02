"use client";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Kota() {
  const [selectedCity, setSelectedCity] = useState<any>(null);
  const [selectedBox, setSelectedBox] = useState<any>(null);
  const [selectedView, setSelectedView] = useState<any>(null);
  const [jumlahOrang, setJumlahOrang] = useState<number>(1);
  const [nextReservation, setNextReservation] = useState<boolean>(false);
  const [selectResume, setSelectedResume] = useState<boolean>(false);
  const listBox = [
    {
      img: "/img/familylg.png",
      title: "BOX 1 Fire Wood",
      info: "Square - Ultra Wide",
    },
    {
      img: "/img/couplelg.png",
      title: "BOX 2 Sage",
      info: "4R - Ultra Wide",
    },
    {
      img: "/img/wakwaw.png",
      title: "BOX 3 Cadangan",
      info: "Classic",
    },
    {
      img: "/img/4boxlg.png",
      title: "BOX 4 White",
      info: "Classic",
    },
    {
      img: "/img/siswa.png",
      title: "BOX 5 White Circle",
      info: "Square",
    },
    {
      img: "/img/wle.png",
      title: "BOX 6 RnD",
      info: "4R - Ultra Wide",
    },
  ];
  const listView = [
    {
      img: "/img/garut1.jpg",
      title: "FOTOHOKKIE GARUT 001",
      alamat:
        "Jl. Muhammadiyah No.14, Regol, Kec. Garut Kota, Kabupaten Garut, Jawa Barat 44114",
    },
    {
      img: "/img/garut2.jpg",
      title: "Fotohokkie Garut",
      alamat:
        "Jl. Ahmad Yani No.1, Paminggir, Kec. Garut Kota, Kabupaten Garut, Jawa Barat 44111",
    },
  ];
  const listKota = [
    {
      img: "/img/Tasikmalaya.png",
      title: "Tasikmalaya",
    },
    {
      img: "/img/Garut.png",
      title: "Garut",
    },
    {
      img: "/img/Cianjur.png",
      title: "Cianjur",
    },
    {
      img: "/img/Jakarta.png",
      title: "Jakarta",
    },
    {
      img: "/img/Tangerang.png",
      title: "Tanggerang",
    },
    {
      img: "/img/KARAWANG.png",
      title: "Karawang",
    },
    {
      img: "/img/Bandung.png",
      title: "Bandung",
    },
    {
      img: "/img/Sukabumi.png",
      title: "Sukabumi",
    },
    {
      img: "/img/Cimahi.png",
      title: "Cimahi",
    },
    {
      img: "/img/Sumedang.png",
      title: "Jatinangor",
    },
  ];
  return (
    <div>
      {selectedCity == null ? (
        <div className="p-5">
          <Link href={"/potrait"}>
            <button>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 0C26.2167 0 28.3417 0.283333 30.375 0.85C32.4083 1.41667 34.325 2.21667 36.125 3.25C37.925 4.28333 39.5417 5.53333 40.975 7C42.4083 8.46667 43.6583 10.0917 44.725 11.875C45.7917 13.6583 46.6 15.5667 47.15 17.6C47.7 19.6333 47.9833 21.7667 48 24C48 26.2167 47.7167 28.3417 47.15 30.375C46.5833 32.4083 45.7833 34.325 44.75 36.125C43.7167 37.925 42.4667 39.5417 41 40.975C39.5333 42.4083 37.9083 43.6583 36.125 44.725C34.3417 45.7917 32.4333 46.6 30.4 47.15C28.3667 47.7 26.2333 47.9833 24 48C21.7833 48 19.6583 47.7167 17.625 47.15C15.5917 46.5833 13.675 45.7833 11.875 44.75C10.075 43.7167 8.45833 42.4667 7.025 41C5.59167 39.5333 4.34167 37.9083 3.275 36.125C2.20833 34.3417 1.4 32.4333 0.85 30.4C0.3 28.3667 0.0166667 26.2333 0 24C0 21.7833 0.283333 19.6583 0.85 17.625C1.41667 15.5917 2.21667 13.675 3.25 11.875C4.28333 10.075 5.53333 8.45833 7 7.025C8.46667 5.59167 10.0917 4.34167 11.875 3.275C13.6583 2.20833 15.5667 1.4 17.6 0.85C19.6333 0.3 21.7667 0.0166667 24 0ZM24 44.8C25.9167 44.8 27.7583 44.55 29.525 44.05C31.2917 43.55 32.9417 42.85 34.475 41.95C36.0083 41.05 37.4167 39.9667 38.7 38.7C39.9833 37.4333 41.0667 36.0333 41.95 34.5C42.8333 32.9667 43.5333 31.3083 44.05 29.525C44.5667 27.7417 44.8167 25.9 44.8 24C44.8 22.0833 44.55 20.2417 44.05 18.475C43.55 16.7083 42.85 15.0583 41.95 13.525C41.05 11.9917 39.9667 10.5833 38.7 9.3C37.4333 8.01667 36.0333 6.93333 34.5 6.05C32.9667 5.16667 31.3083 4.46667 29.525 3.95C27.7417 3.43333 25.9 3.18333 24 3.2C22.0833 3.2 20.2417 3.45 18.475 3.95C16.7083 4.45 15.0583 5.15 13.525 6.05C11.9917 6.95 10.5833 8.03333 9.3 9.3C8.01667 10.5667 6.93333 11.9667 6.05 13.5C5.16667 15.0333 4.46667 16.6917 3.95 18.475C3.43333 20.2583 3.18333 22.1 3.2 24C3.2 25.9167 3.45 27.7583 3.95 29.525C4.45 31.2917 5.15 32.9417 6.05 34.475C6.95 36.0083 8.03333 37.4167 9.3 38.7C10.5667 39.9833 11.9667 41.0667 13.5 41.95C15.0333 42.8333 16.6917 43.5333 18.475 44.05C20.2583 44.5667 22.1 44.8167 24 44.8ZM18.175 22.4H35.2V25.6H18.175L25.125 32.45L22.875 34.75L12.025 24L22.875 13.25L25.125 15.55L18.175 22.4Z"
                  fill="#732C80"
                />
              </svg>
            </button>
          </Link>
        </div>
      ) : (
        <div className="p-5">
          <button>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 0C26.2167 0 28.3417 0.283333 30.375 0.85C32.4083 1.41667 34.325 2.21667 36.125 3.25C37.925 4.28333 39.5417 5.53333 40.975 7C42.4083 8.46667 43.6583 10.0917 44.725 11.875C45.7917 13.6583 46.6 15.5667 47.15 17.6C47.7 19.6333 47.9833 21.7667 48 24C48 26.2167 47.7167 28.3417 47.15 30.375C46.5833 32.4083 45.7833 34.325 44.75 36.125C43.7167 37.925 42.4667 39.5417 41 40.975C39.5333 42.4083 37.9083 43.6583 36.125 44.725C34.3417 45.7917 32.4333 46.6 30.4 47.15C28.3667 47.7 26.2333 47.9833 24 48C21.7833 48 19.6583 47.7167 17.625 47.15C15.5917 46.5833 13.675 45.7833 11.875 44.75C10.075 43.7167 8.45833 42.4667 7.025 41C5.59167 39.5333 4.34167 37.9083 3.275 36.125C2.20833 34.3417 1.4 32.4333 0.85 30.4C0.3 28.3667 0.0166667 26.2333 0 24C0 21.7833 0.283333 19.6583 0.85 17.625C1.41667 15.5917 2.21667 13.675 3.25 11.875C4.28333 10.075 5.53333 8.45833 7 7.025C8.46667 5.59167 10.0917 4.34167 11.875 3.275C13.6583 2.20833 15.5667 1.4 17.6 0.85C19.6333 0.3 21.7667 0.0166667 24 0ZM24 44.8C25.9167 44.8 27.7583 44.55 29.525 44.05C31.2917 43.55 32.9417 42.85 34.475 41.95C36.0083 41.05 37.4167 39.9667 38.7 38.7C39.9833 37.4333 41.0667 36.0333 41.95 34.5C42.8333 32.9667 43.5333 31.3083 44.05 29.525C44.5667 27.7417 44.8167 25.9 44.8 24C44.8 22.0833 44.55 20.2417 44.05 18.475C43.55 16.7083 42.85 15.0583 41.95 13.525C41.05 11.9917 39.9667 10.5833 38.7 9.3C37.4333 8.01667 36.0333 6.93333 34.5 6.05C32.9667 5.16667 31.3083 4.46667 29.525 3.95C27.7417 3.43333 25.9 3.18333 24 3.2C22.0833 3.2 20.2417 3.45 18.475 3.95C16.7083 4.45 15.0583 5.15 13.525 6.05C11.9917 6.95 10.5833 8.03333 9.3 9.3C8.01667 10.5667 6.93333 11.9667 6.05 13.5C5.16667 15.0333 4.46667 16.6917 3.95 18.475C3.43333 20.2583 3.18333 22.1 3.2 24C3.2 25.9167 3.45 27.7583 3.95 29.525C4.45 31.2917 5.15 32.9417 6.05 34.475C6.95 36.0083 8.03333 37.4167 9.3 38.7C10.5667 39.9833 11.9667 41.0667 13.5 41.95C15.0333 42.8333 16.6917 43.5333 18.475 44.05C20.2583 44.5667 22.1 44.8167 24 44.8ZM18.175 22.4H35.2V25.6H18.175L25.125 32.45L22.875 34.75L12.025 24L22.875 13.25L25.125 15.55L18.175 22.4Z"
                fill="#732C80"
              />
            </svg>
          </button>
        </div>
      )}
      <div className="flex justify-center bg-white">
        <ul className="steps  bg-white">
          <li className="step step-primary text-black">Pilih</li>
          <li
            className={`step text-black
          
          ${selectedCity !== null ? "step-primary" : ""}`}
          >
            Pilih Cabang
          </li>
          <li
            className={`step text-black
          ${selectedView !== null ? "step-primary" : ""}`}
          >
            Pilih Box
          </li>
          <li
            className={`step text-black ${
              selectedBox !== null ? "step-primary" : ""
            }`}
          >
            Jumlah Orang
          </li>
          <li
            className={`step text-black ${
              nextReservation !== false ? "step-primary" : ""
            }`}
          >
            Waktu Reservasi
          </li>
          <li
            className={`step text-black ${
              selectResume !== false ? "step-primary" : ""
            }`}
          >
            Resume
          </li>
        </ul>
      </div>
      {selectedCity == null ? (
        <div className="container px-5 py-24 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {listKota.map((data: any, index) => (
              <div
                onClick={() => {
                  setSelectedCity(data);
                }}
                key={index + 1}
                className="flex flex-wrap"
              >
                <div className="p-4 gap-10 w-64">
                  <div className="h-48 rounded w-full object-cover relative object-center mb-6">
                    <Image fill src={data.img} alt="" />
                  </div>
                  <div className="flex justify-center mt-1">
                    <h2 className="title-font text-lg font-bold text-ungu">
                      {data.title}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {selectedCity !== null && selectedView == null ? (
        <div className="px-5 py-10 w-full">
          <div className="container flex justify-start">
            <div className="grid grid-cols-2  lg:grid-cols-5">
              {listView.map((data: any, index) => (
                <div
                  onClick={() => {
                    setSelectedView(data);
                  }}
                  key={index + 1}
                  className="p-5"
                >
                  <div className="h-auto w-full border-2 group-hover:scale-110  card hover:shadow border-gray-200 border-opacity-60 rounded-lg">
                    <div className="h-48 rounded w-full object-cover relative object-center mb-1">
                      <Image fill src={data.img} alt="" />
                    </div>
                    <div className="p-5 pb-5">
                      <h2 className="text-sm text-gray-900 font-bold title-font">
                        {data.title}
                      </h2>
                      <div className="flex text-gray-500 gap-5">
                        <p>{data.alamat}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
      {selectedView !== null && selectedBox == null ? (
        <div className="px-5 py-10">
          <div className="container flex justify-center">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {listBox.map((data: any, index) => (
                <div
                  onClick={() => {
                    setSelectedBox(data);
                  }}
                  key={index + 1}
                  className="p-5"
                >
                  <div className="h-auto w-full border-2 group-hover:scale-110  card hover:shadow border-gray-200 border-opacity-60 rounded-lg">
                    <div className="h-48 rounded w-full object-cover relative object-center mb-1">
                      <Image fill src={data.img} alt="" />
                    </div>
                    <div className="p-5 pb-5">
                      <h2 className="text-lg text-gray-900 font-bold title-font">
                        {data.title}
                      </h2>
                      <div className="flex text-gray-500 gap-5">
                        <p>{data.info}</p>
                      </div>
                      <div className="w-auto flex flex-col gap-4 justify-center pt-5">
                        <button className=" flex justify-center text-gray-400 bg-white border-2 border-gray-400 py-2 px-6 focus:outline-none rounded-full text-xs">
                          Lihat Cetakan
                        </button>
                        <div className="w-auto flex flex-col gap-4 justify-center">
                          <button className=" justify-center flex text-white bg-ungu border-0 py-2 px-6 focus:outline-none rounded-full text-xs">
                            Pilih
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
      {selectedBox !== null && nextReservation == false ? (
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 w-full py-24 mx-auto">
            <div className="mx-auto flex flex-wrap">
              <Image width={400} height={400} src="/img/siswalg.png" alt="" />
              <div className="lg:w-1/2 w-full lg:pl-40 lg:py-6">
                <h1 className="text-black flex justify-center w-full text-xl title-font mb-1">
                  Jumlah hookiers yang akan di foto :
                </h1>
                <div className="flex w-full p-5 gap-3 justify-center">
                  <div
                    onClick={() => {
                      if (jumlahOrang > 1) {
                        setJumlahOrang(jumlahOrang - 1);
                      }
                    }}
                  >
                    <div style={{ color: "purple" }}>
                      <AiFillMinusCircle size={40} />
                    </div>
                  </div>
                  <div className="rounded-full bg-ungu p-3">
                    <div className="flex gap-10">
                      <p className="text-white text-sm">{jumlahOrang} Orang</p>
                      <p className="text-white text-sm">
                        IDR {jumlahOrang * 20000}{" "}
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setJumlahOrang(jumlahOrang + 1);
                    }}
                  >
                    <div style={{ color: "purple" }}>
                      <AiFillPlusCircle size={40} />
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-merah text-sm">
                    * UMUR 4 tahun kebawah tidak perlu di hitung (tidak dapat
                    cetakan)
                  </p>
                  <p className="text-merah text-sm">
                    ** Jika tetap ingin dapat cetakan, maka anak juga harus
                    bayar
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setNextReservation(true);
                    }}
                    className="flex mx-auto mt-5 text-white bg-ungu border-0 py-2 px-8 focus:outline-none hover:bg-ungu rounded-full text-lg"
                  >
                    Lanjutkan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
      {nextReservation == true && selectResume == false ? (
        <div className="flex justify-center">
          <div className="w-full md:w-1/2">
            <div className="flex p-5 justify-center mt-5">
              <div className="flex justify-between w-full  rounded-lg bg-ungu">
                <div className="py-3 p-3">
                  <svg
                    width="21"
                    height="29"
                    viewBox="0 0 21 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5 2L3 14.5L19.5 27"
                      stroke="#F8F7F3"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <h1 className="text-white flex py-2 text-3xl">September</h1>
                <div className="py-3 p-3">
                  <svg
                    width="21"
                    height="29"
                    viewBox="0 0 21 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 27L18.5 14.5L2 2"
                      stroke="#F8F7F3"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex p-2 justify-center">
              <div className=" py-4 p-5 w-auto rounded-lg bg-ungu">
                <div className="grid grid-cols-4 md:grid-cols-7 gap-3">
                  <div className="rounded-lg py-2 p-2 bg-white flex flex-col">
                    <div className="flex justify-center">
                      <h1 className="font-bold text-black">3</h1>
                    </div>
                    <div className="flex justify-center">
                      <p className="text-black">Rabu</p>
                    </div>
                  </div>
                  <div className="rounded-lg py-2 p-2 bg-white flex flex-col">
                    <div className="flex justify-center">
                      <h1 className="font-bold text-black">4</h1>
                    </div>
                    <div className="flex justify-center">
                      <p className="text-black">Kamis</p>
                    </div>
                  </div>
                  <div className="rounded-lg py-2 p-2 bg-white flex flex-col">
                    <div className="flex justify-center">
                      <h1 className="font-bold text-black">5</h1>
                    </div>
                    <div className="flex justify-center">
                      <p className="text-black">Jumat</p>
                    </div>
                  </div>
                  <div className="rounded-lg py-2 p-2 bg-white flex flex-col">
                    <div className="flex justify-center">
                      <h1 className="font-bold text-black">6</h1>
                    </div>
                    <div className="flex justify-center">
                      <p className="text-black">Sabtu</p>
                    </div>
                  </div>
                  <div className="rounded-lg py-2 p-2 bg-white flex flex-col">
                    <div className="flex justify-center">
                      <h1 className="font-bold text-black">7</h1>
                    </div>
                    <div className="flex justify-center">
                      <p className="text-black">Minggu</p>
                    </div>
                  </div>
                  <div className="rounded-lg py-2 p-2 bg-kuning flex flex-col">
                    <div className="flex justify-center">
                      <h1 className="font-bold text-black">8</h1>
                    </div>
                    <div className="flex justify-center">
                      <p className="text-black">Senin</p>
                    </div>
                  </div>
                  <div className="rounded-lg py-2 p-2 bg-white flex flex-col">
                    <div className="flex justify-center">
                      <h1 className="font-bold text-black">9</h1>
                    </div>
                    <div className="flex justify-center">
                      <p className="text-black">Selasa</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex p-1 justify-center">
              <div className="flex  justify-between p-5 w-full gap-5 rounded-lg bg-ungu">
                <div className="grid grid-cols-4 lg:grid-cols-6  gap-x-8 gap-y-4">
                  <div className="rounded-full hidden space-x-8 sm:flex w-20 h-8 text-center bg-gray-700">
                    <h1 className="text-white flex items-center justify-center w-full  text-base">10:00</h1>
                  </div>
                  <div className="rounded-full hidden space-x-8 sm:flex w-20 h-8 bg-gray-700">
                    <h1 className="text-white flex items-center justify-center w-full text-base">10:10</h1>
                  </div>
                  <div className="rounded-full hidden space-x-8 sm:flex w-20 h-8 bg-gray-700">
                    <h1 className="text-white flex items-center justify-center w-full text-base">10:20</h1>
                  </div>
                  <div className="rounded-full hidden space-x-8 sm:flex w-20 h-8 bg-gray-700">
                    <h1 className="text-white flex items-center justify-center w-full text-base">10:30</h1>
                  </div>
                  <div className="rounded-full hidden space-x-8 sm:flex w-20 h-8 bg-gray-700">
                    <h1 className="text-white flex items-center justify-center w-full text-base">10:40</h1>
                  </div>
                  <div className="rounded-full hidden space-x-8 sm:flex w-20 h-8 bg-gray-700">
                    <h1 className="text-white flex items-center justify-center w-full text-base">10:50</h1>
                  </div>
                  <div className="rounded-full w-20 h-8 sm:flex bg-white">
                    <h1 className="text-black flex items-center justify-center w-full text-base">11:00</h1>
                  </div>
                  <div className="rounded-full w-20 h-8 sm:flex bg-white">
                    <h1 className="text-black flex items-center justify-center w-full text-base">11:40</h1>
                  </div>
                  <div className="rounded-full w-20 h-8 sm:flex bg-white">
                    <h1 className="text-black flex items-center justify-center w-full text-base">11:40</h1>
                  </div>
                  <div className="rounded-full w-20 h-8 sm:flex bg-white">
                    <h1 className="text-black flex items-center justify-center w-full text-base">11:40</h1>
                  </div>
                  <div className="rounded-full w-20 h-8 sm:flex bg-white">
                    <h1 className="text-black flex items-center justify-center w-full text-base">11:40</h1>
                  </div>
                  <div className="rounded-full w-20 h-8 sm:flex bg-white">
                    <h1 className="text-black flex items-center justify-center w-full text-base">11:40</h1>
                  </div>
                  <div className="rounded-full w-20 h-8 sm:flex bg-white">
                    <h1 className="text-black flex items-center justify-center w-full text-base">11:40</h1>
                  </div>
                  <div className="rounded-full w-20 h-8 sm:flex bg-white">
                    <h1 className="text-black flex items-center justify-center w-full text-base">11:40</h1>
                  </div>
                  <div className="rounded-full w-20 h-8 sm:flex bg-kuning">
                    <h1 className="text-black flex items-center justify-center w-full text-base">11:50</h1>
                  </div>
                  <div className="rounded-full w-20 h-8 sm:flex bg-white">
                    <h1 className="text-black flex items-center justify-center w-full text-base">11:40</h1>
                  </div>
                  <div className="rounded-full w-20 h-8 sm:flex bg-white">
                    <h1 className="text-black flex items-center justify-center w-full text-base">11:40</h1>
                  </div>
                  <div className="rounded-full w-20 h-8 sm:flex bg-white">
                    <h1 className="text-black flex items-center justify-center w-full text-base">11:40</h1>
                  </div>
                  <div className="rounded-full hidden space-x-8 sm:flex w-20 h-8">
                    <h1 className="text-black flex items-center justify-center w-full text-base"></h1>
                  </div>
                  <div className="rounded-full w-20  h-8 sm:flex bg-white">
                    <h1 className="text-black flex items-center justify-center w-full text-base">11:40</h1>
                  </div>
                  <div className="rounded-full w-20 h-8 sm:flex bg-white">
                    <h1 className="text-black flex items-center justify-center w-full text-base">11:40</h1>
                  </div>
                  <div className="rounded-full w-20 h-8 sm:flex bg-white">
                    <h1 className="text-black flex items-center justify-center w-full text-base">11:40</h1>
                  </div>
                  <div className="rounded-full w-20 h-8 sm:flex bg-white">
                    <h1 className="text-black flex items-center justify-center w-full text-base">11:40</h1>
                  </div>
                  <div className="rounded-full hidden space-x-8 sm:flex w-20 h-8  ">
                    <h1 className="text-black flex items-center justify-center w-full text-base"></h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex p-2 justify-center">
              <button
                onClick={() => {
                  setSelectedResume(true);
                }}
                className="flex justify-center py-3 p-3 w-full text-2xl rounded-lg text-white bg-ungu"
              >
                Konfirmasi
              </button>
            </div>
            <div className="flex">
              <p className="text-merah flex text-sm">
                * Waktu booking tidak dapat melebihi 7 hari
              </p>
            </div>
            <div className="flex p-2 ltr">
              <div className="py-4 pe-20 w-auto gap-1 rounded-lg text-white bg-ungu">
                <div className="justify-start">
                  <div className="flex p-1 ">
                    <Image width={25} height={25} src="/img/white.jpg" alt="" />
                    <p>: Tersedia</p>
                  </div>
                  <div className="flex p-1 ">
                    <Image
                      width={25}
                      height={25}
                      src="/img/yellow.png"
                      alt=""
                    />
                    <p>: Dipilih</p>
                  </div>
                  <div className="flex p-1 ">
                    <Image width={25} height={25} src="/img/black.png" alt="" />
                    <p>: Tidak dapat dipilih</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {selectResume == true ? (
        <div>
          <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div className="mb-10">
              <Image width={620} height={600} src="/img/wakwaw.png" alt="" />
            </div>
            <div className="bg-ungu rounded-lg  mb-20 p-2">
              <div className="flex justify-center">
                <h1 className="flex flex-col space-y-1 title-font p-1 text-2xl text-tertiary">
                  Detail Pesanan
                  <span className="inline-block h-1 w-44 rounded bg-tertiary mt-1 mb-4"></span>
                </h1>
              </div>
              <div className="flex gap-1">
                <p className="mb-8 font-bold text-tertiary">BOX 2 Sage</p>
                <p className="mb-8 font-bold text-white"> - Garut</p>
              </div>
              <div className="gap-1">
                <p className="font-bold text-tertiary">
                  Senin, 8 September 2023
                </p>
                <p className="font-bold text-white">11:50 WIB</p>
              </div>
              <div className="mt-3">
                <p className="font-bold text-tertiary">
                  Senin, 8 September 2023
                </p>
                <p className="ml-3 text-white">- 5 Menit foto sepuasnya</p>
                <p className="ml-3 text-white">- 1 Menit persiapan</p>
                <p className="ml-3 text-white">- Free All Soft File</p>
                <p className="ml-3 text-white">- Free 1 Cetakan/Orang</p>
                <p className="ml-3 text-white">- Cetakan 4R 4R - Ultra Wide</p>
              </div>
              <div className="flex justify-center gap-4">
                <label className="block">
                  <input
                    type="kode"
                    name="kode"
                    className="mt-1 px-3 py-2 bg-ungu border-2 border-tertiary shadow-sm placeholder-white  block w-60 rounded-full sm:text-sm"
                    placeholder="Masukkan Kode Promo"
                  />
                </label>
                <button className="flex bg-tertiary border-0 py-2 px-8 focus:outline-none hover:bg-tertiary text-primary rounded-full text-lg">
                  Claim
                </button>
              </div>
              <div className="mt-5">
                <div className="flex justify-between">
                  <div className="ml-2">
                    <p className="text-white">Harga Box</p>
                  </div>
                  <div></div>
                  <div className="mr-2">
                    <p className="text-white">IDR 20.000</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="ml-1">
                    <p className="text-white">Jumlah Orang</p>
                  </div>
                  <div></div>
                  <div className="mr-2">
                    <p className="text-white">1</p>
                  </div>
                </div>
                <span className=" inline-block h-1 w-full mr-2 rounded bg-white mt-1 mb-1"></span>
              </div>
              <div className="">
                <div className="flex justify-between">
                  <div className="ml-1">
                    <p className="text-tertiary">Diskon</p>
                  </div>
                  <div></div>
                  <div className="mr-2">
                    <p className="text-tertiary">0</p>
                  </div>
                </div>
                <span className=" inline-block h-1 w-full mr-2 rounded bg-white mt-1 mb-1"></span>
                <div className="flex justify-between">
                  <div className="ml-1">
                    <p className="text-white">Total Pembayaran</p>
                  </div>
                  <div></div>
                  <div className="mr-2">
                    <p className="text-white">IDR 20.000</p>
                  </div>
                </div>
              </div>
              <div className="flex mt-6 justify-center">
                <button className="flex bg-tertiary border-0 py-2 px-8 focus:outline-none hover:bg-tertiary text-primary rounded-full text-lg">
                  Lanjutkan Pembayaran
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
