'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  return (
    <>
      <div className="flex flex-col lg:flex-row h-full py-24">
        <div className="flex justify-center items-center h-auto w-auto pb-12 lg:pl-60 lg:mt-40">
          <Image
            alt="IRU logo"
            src="/images/iru-logo.svg"
            width="401"
            height="438"
            className="scale-75 lg:scale-110"
          />
        </div>
        <div className="flex-col lg:ml-40">
          <h1 className="text-5xl font-bold text-center lg:text-5xl text-blue-400 lg:mt-60">
            Interative Roleplay Unifier
          </h1>
          <p className="hidden lg:flex justify-center text-2xl">
            Seja um dos primeiros a experimentar o futuro
          </p>
          <div className="flex justify-center mt-24">
            <div className="p-2 rounded-md bg-blue-400 flex justify-center items-center" onClick={() => router.push('/login')}>
              <button type="button" className="font-bold text-4xl">
                Descobrir
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
