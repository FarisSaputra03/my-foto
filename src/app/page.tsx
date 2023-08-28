"use client";
import { usePathname } from "next/navigation";
import Image from 'next/image'
import Tampilan from '@/components/tampilan'

export default function Home() {
  const pathname = usePathname();
  return (
   <>
   <Tampilan/>
   
   </>
  )
}
