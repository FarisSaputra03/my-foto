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
      title: "4R - Bobokkie",
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
        <li className={`step text-black ${
          selectResume !== false ? "step-primary" : ""
        }`}>Resume</li>
        </ul>
      </div>
      {selectedCity == null ? (
        <div className="container px-5 py-24 mx-auto">
          <div className="grid grid-cols-4 gap-4">
            {listKota.map((data: any, index) => (
              <div
                onClick={() => {
                  setSelectedCity(data);
                }}
                key={index + 1}
                className="flex flex-wrap -m-4"
              >
                <div className=" p-4 gap-10 w-64">
                  <div className="h-48 rounded w-full object-cover relative object-center mb-6">
                    <Image fill src={data.img} alt="" />
                  </div>
                  <div className="flex justify-center mt-4">
                    <h2 className="text-gray-900 title-font text-lg font-medium">
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
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="grid lg:grid-cols-4">
              {listView.map((data: any, index) => (
                <div
                  onClick={() => {
                    setSelectedView(data);
                  }}
                  key={index + 1}
                  className="p-12"
                >
                  <div className="h-auto w-56 border-2 group-hover:scale-110  card hover:shadow border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div className="h-48 rounded w-full object-cover relative object-center mb-6">
                      <Image fill src={data.img} alt="" />
                    </div>
                    <div className="p-5 pb-5">
                      <h2 className="text-lg text-gray-900 font-bold title-font">
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
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="grid lg:grid-cols-4">
              {listBox.map((data: any, index) => (
                <div
                  onClick={() => {
                    setSelectedBox(data);
                  }}
                  key={index + 1}
                  className="p-12"
                >
                  <div className="h-auto w-56 border-2 group-hover:scale-110  card hover:shadow border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div className="h-48 rounded w-full object-cover relative object-center mb-6">
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
                          <button className=" justify-center flex text-white bg-purple-700 border-0 py-2 px-6 focus:outline-none rounded-full text-xs">
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
                <h1 className="text-black w-full text-2xl title-font font-normal mb-1">
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
                  <div className="rounded-full focus:outline-none bg-purple-700 py-2 px-5">
                    <div className="flex gap-10">
                      <p className="text-white">{jumlahOrang} Orang</p>
                      <p className="text-white">IDR {jumlahOrang * 20000} </p>
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
                  <p className="text-red-600 text-sm">
                    * UMUR 4 tahun kebawah tidak perlu di hitung (tidak dapat
                    cetakan)
                  </p>
                  <p className="text-red-600 text-sm">
                    ** Jika tetap ingin dapat cetakan, maka anak juga harus
                    bayar
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setNextReservation(true);
                    }}
                    className="flex mx-auto mt-10 text-white bg-purple-700 border-0 py-2 px-8 focus:outline-none hover:bg-purple-800 rounded-full text-lg"
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
        <div>
          <div className="flex p-5 justify-center mt-10">
            <div className="flex justify-between gap-36 w-auto rounded-lg bg-purple-900">
              <div className="py-3 p-5">
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
              <h1 className="text-white flex py-2 px-8 text-3xl">September</h1>
              <div className="py-3 p-5">
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
          <div className="flex p-5 justify-center">
            <div className="flex justify-between py-4 p-5 w-auto gap-5 rounded-lg bg-purple-900">
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
              <div className="rounded-lg py-2 p-2 bg-white flex flex-col">
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
          <div className="flex p-5 justify-center">
            <div className="flex justify-between py-4 p-5 w-auto gap-5 rounded-lg bg-purple-700">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
                <div className="rounded-full py-1 p-2 bg-gray-700">
                  <h1 className="text-white py-1 p-1">10:00</h1>
                </div>
                <div className="rounded-full py-1 p-2 bg-gray-700">
                  <h1 className="text-white py-1 p-1">10:10</h1>
                </div>
                <div className="rounded-full py-1 p-2 bg-gray-700">
                  <h1 className="text-white py-1 p-1">10:20</h1>
                </div>
                <div className="rounded-full py-1 p-2 bg-gray-700">
                  <h1 className="text-white py-1 p-1">10:30</h1>
                </div>
                <div className="rounded-full py-1 p-2 bg-gray-700">
                  <h1 className="text-white py-1 p-1">10:40</h1>
                </div>
                <div className="rounded-full py-1 p-2 bg-gray-700">
                  <h1 className="text-white py-1 p-1">10:50</h1>
                </div>
                <div className="rounded-full py-1 p-2 bg-white">
                  <h1 className="text-black py-1 p-1">11:00</h1>
                </div>
                <div className="rounded-full py-1 p-2 bg-white">
                  <h1 className="text-black py-1 p-1">11:40</h1>
                </div>
                <div className="rounded-full py-1 p-2 bg-white">
                  <h1 className="text-black py-1 p-1">11:40</h1>
                </div>
                <div className="rounded-full py-1 p-2 bg-white">
                  <h1 className="text-black py-1 p-1">11:40</h1>
                </div>
                <div className="rounded-full py-1 p-2 bg-white">
                  <h1 className="text-black py-1 p-1">11:40</h1>
                </div>
                <div className="rounded-full py-1 p-2 bg-white">
                  <h1 className="text-black py-1 p-1">11:40</h1>
                </div>
                <div className="rounded-full py-1 p-2 bg-white">
                  <h1 className="text-black py-1 p-1">11:40</h1>
                </div>
                <div className="rounded-full py-1 p-2 bg-white">
                  <h1 className="text-black py-1 p-1">11:40</h1>
                </div>
                <div className="rounded-full py-1 p-2 bg-white">
                  <h1 className="text-black py-1 p-1">11:50</h1>
                </div>
                <div className="rounded-full py-1 p-2 bg-white">
                  <h1 className="text-black py-1 p-1">11:40</h1>
                </div>
                <div className="rounded-full py-1 p-2 bg-white">
                  <h1 className="text-black py-1 p-1">11:40</h1>
                </div>
                <div className="rounded-full py-1 p-2 bg-white">
                  <h1 className="text-black py-1 p-1">11:40</h1>
                </div>
                <div className="rounded-full py-1 p-2">
                  <h1 className="text-black py-1 p-1"></h1>
                </div>
                <div className="rounded-full py-1 p-2 bg-white">
                  <h1 className="text-black py-1 p-1">11:40</h1>
                </div>
                <div className="rounded-full py-1 p-2 bg-white">
                  <h1 className="text-black py-1 p-1">11:40</h1>
                </div>
                <div className="rounded-full py-1 p-2 bg-white">
                  <h1 className="text-black py-1 p-1">11:40</h1>
                </div>
                <div className="rounded-full py-1 p-2 bg-white">
                  <h1 className="text-black py-1 p-1">11:40</h1>
                </div>
                <div className="rounded-full py-1 p-2 ">
                  <h1 className="text-black py-1 p-1"></h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-2 justify-center">
            <button 
            onClick={() => {
              setSelectedResume(true);
            }}
            className="flex justify-between py-4 px-64 text-2xl w-auto gap-5 rounded-lg text-white bg-purple-700">
              Konfirmasi
            </button>
          </div>
          <div className="flex justify-center pr-72">
            <p className="text-red-500">
              * Waktu booking tidak dapat melebihi 7 hari
            </p>
          </div>
          <div className="flex p-2 pr-96 ltr justify-center">
            <div className="py-4 pe-20 w-auto gap-5 rounded-lg text-white bg-purple-700">
              <div className="justify-start">
                <div className="flex p-2 ">
                  <Image width={25} height={25} src="/img/white.jpg" alt="" />
                  <p>: Tersedia</p>
                </div>
                <div className="flex p-2 ">
                  <Image width={25} height={25} src="/img/yellow.png" alt="" />
                  <p>: Dipilih</p>
                </div>
                <div className="flex p-2 ">
                  <Image width={25} height={25} src="/img/black.png" alt="" />
                  <p>: Tidak dapat dipilih</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {selectResume == true ?
      <div>
       <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <Image width={720} height={600} src="/img/wakwaw.png" alt="" />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Knausgaard typewriter readymade marfa</h1>
      <p className="mb-8 leading-relaxed">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
      <div className="flex w-full md:justify-start justify-center items-end">
        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
          <label className="leading-7 text-sm text-gray-600">Placeholder</label>
          <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      </div>
      <p className="text-sm mt-2 text-gray-500 mb-8 w-full">Neutra shabby chic ramps, viral fixie.</p>
      <div className="flex lg:flex-row md:flex-col">
        <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
            <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
          </svg>
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
            <span className="title-font font-medium">Google Play</span>
          </span>
        </button>
        <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
            <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
            <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
          </svg>
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="text-xs text-gray-600 mb-1">Download on the</span>
            <span className="title-font font-medium">App Store</span>
          </span>
        </button>
      </div>
    </div>
  </div>
      </div>
        : null
      }
    </div>
  );
}
