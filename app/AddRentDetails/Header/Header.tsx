"use client";
import Icon from "@/components/Icons/Icons";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();


  
  return (
    <header className="flex h-12 items-center justify-between border-b border-[#e5e7eb] bg-white px-3 sm:h-14 sm:px-5 md:px-6">
      <button
        type="button"
        onClick={() => router.back()}
        className="flex items-center gap-2 text-xs font-semibold text-[#00634f] sm:text-sm"
      >
        <span className="text-lg"> <Icon src="/assets/leftArrow.svg" alt="close" /></span>
        <span>Add Rent Details</span>
      </button>

      <button
        type="button"
        onClick={() => router.back()}
        aria-label="Close"
        className="text-lg text-[#6b7280]"
      >
         <Icon src="/assets/close.svg" alt="close" />
      </button>
    </header>
  );
}