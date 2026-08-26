"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white p-1 sm:p-3">
      <div className="relative flex min-h-[calc(100vh-8px)] w-full flex-col items-center justify-center rounded-xl bg-[#f6f8f9] sm:min-h-[calc(100vh-24px)] sm:rounded-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="Close"
          className="absolute right-5 top-5 text-lg text-[#374151] sm:right-7 sm:top-7 sm:text-xl"
        >
          
            <img src="/assets/close.svg" alt="close" />
         
        </button>

        {/* Success Content */}
        <div className="flex flex-col items-center">
          <Image
            src="/assets/success.svg"
            alt="Success"
            width={64}
            height={64}
            className="h-12 w-12 sm:h-16 sm:w-16"
          />

          <p className="mt-4 text-center text-[10px] font-semibold text-[#00634f] sm:mt-5 sm:text-xs">
            Room Added Successfully
          </p>
        </div>
      </div>
    </main>
  );
}