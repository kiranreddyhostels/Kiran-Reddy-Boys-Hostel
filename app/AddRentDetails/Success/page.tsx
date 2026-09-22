"use client";
import Icon from "@/components/Icons/Icons";

import { useNavigation } from "@/hooks/useNavigation";

export default function RentDetailsSuccessPage() {
  const { handleCancel } = useNavigation();

  return (
    <main className="min-h-screen bg-[#f4f6f7]">
      <div className="relative mx-auto flex min-h-screen w-full flex-col overflow-hidden rounded-xl bg-[#f8fafb] sm:max-w-xl md:max-w-2xl lg:max-w-3xl">

        {/* Close Button */}
        <button
          type="button"
          onClick={handleCancel}
          aria-label="Close"
          className="absolute right-5 top-5 z-10 text-lg text-[#374151] transition hover:text-[#00634f]"
        >
          <span className="text-base "> <Icon src="/assets/close.svg" alt="close" /></span>
        </button>

       
        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-col items-center justify-center">

          
            
                <span className="-mt-1 text-lg font-bold text-white sm:text-xl">
                   <Icon src="/assets/success.svg" alt="Success" />
                </span>
              

            <p className="text-[9px] font-semibold text-[#00634f] sm:text-xs md:text-sm">
              Rent Details Added Successfully
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}