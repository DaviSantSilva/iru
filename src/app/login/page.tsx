'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  return (
    <>
      <div className="flex flex-col lg:flex-row h-full py-24">
        login
      </div>
    </>
  );
}