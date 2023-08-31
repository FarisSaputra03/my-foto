import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function SuksesLogin() {
  return (
    <div>
    <div className="p-8 bg-ungu"></div>
    <div className="flex flex-col space-y-4">
      <div className=" h-auto">
        <Image width={1440} height={666} src="/img/awalan.png" alt="" />
      </div>
      <div className="flex justify-center ">
        <Link href={"/potrait"}>
          <button className="flex mx-auto mt-1 text-white bg-ungu border-0 italic py-2 px-8 focus:outline-none rounded-full text-lg">
            Booking Now
          </button>
        </Link>
      </div>
    </div>
  </div>
  )
}
