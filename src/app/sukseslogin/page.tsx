import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function SuksesLogin() {
  return (
    <div>
      <div className="h-64">
        <Image width={1440} height={666} src="/img/awalan.png" alt="" />
      </div>
      <div className="flex justify-center ">
        <Link href={"/potrait"}>
          <button className="flex mx-auto mt-96 text-white bg-ungu border-0 italic py-2 px-8 focus:outline-none rounded-full text-lg">
            Booking Now
          </button>
        </Link>
      </div>
    </div>
  )
}
