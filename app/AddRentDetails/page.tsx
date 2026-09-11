"use client";
import Header from "./Header/Header";
import RentType from "./RentType/RentType";
import { useState } from "react";
export default function AddRentDetails(){
    const  [rentType, setRentType] =
    useState<"monthly" | "daily">("daily");
    return(
        <main className="min-h-screen bg-[#f4f6f7]">
            <div className="mx-auto flex min-h-screen w-full flex-col sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
                {/* header */}
                 <Header/>

                 {/* rent type */}
                 <RentType  type={rentType}
            onChange={setRentType}/>
                
            </div>
        </main>

       
    )
}