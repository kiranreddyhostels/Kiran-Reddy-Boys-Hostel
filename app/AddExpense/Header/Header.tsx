"use client";
import { useRouter } from "next/navigation";
import Icon from "@/components/Icons/Icons";
import Link from "next/link";
export default function Header(){
    const router =useRouter();

    return(
        <header className="flex h-14 items-center justify-between border-b border-b-[#B3D0CF] bg-white px-3 sm-h-16 sm:px-5 md:px-6">
            <Link href="/" onClick={()=>router.back()}  className="flex items-center gap-1 text-[9px] font-semibold text-[#00634f] sm:text-xs">
                <span className="text-sm "> <Icon
                                src="/assets/leftArrow.svg"
                                alt="arrow"
                                className="h-3 w-4"
                              /></span> Add Expense
            </Link>
            <Link href="/"
        
        onClick={() => router.back()}
        aria-label="Close"
        className="text-sm text-[#374151] sm:text-base"
      >
         <Icon src="/assets/close.svg" alt="close" />
      </Link>
            
            
             </header>
    )
}