import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
export default function Cabang() {
    const listView = [
        {
          img: "/img/garut1.jpg",
          title: "FOTOHOKKIE GARUT 001",
          alamat:"Jl. Muhammadiyah No.14, Regol, Kec. Garut Kota, Kabupaten Garut, Jawa Barat 44114",
        },
        {
          img: "/img/garut2.jpg",
          title: "Fotohokkie Garut",
          alamat:"Jl. Ahmad Yani No.1, Paminggir, Kec. Garut Kota, Kabupaten Garut, Jawa Barat 44111",
        },
      ];
      return (
        <div>
          <div className="p-5">
            <Link href={"/kota"}>
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
          <div className="flex justify-center bg-white">
            <ul className="steps bg-white">
              <li className="step step-primary font-bold text-black">Pilih</li>
              <li className="step ">Jumlah Orang</li>
              <li className="step ">Jumlah Orang</li>
              <li className="step ">Waktu Reservasi</li>
              <li className="step ">Resume</li>
            </ul>
          </div>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="grid lg:grid-cols-4">
                {listView.map((data: any, index) => (
                  <div key={index + 1} className="p-12">
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
        </div>
  )
}
