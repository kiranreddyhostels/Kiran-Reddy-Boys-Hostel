"use client";
import Header from "./Header/Header";
import Amount from "./Amount/Amount";
import { useState } from "react";
export default function AddExpense(){
  const [amount,setAmount]=useState("");
  
    return(

      <main className="min-h-screen bg-[#f4f6f7]">
        <div className="mx-auto flex min-h-screen w-full flex-col bg-[#f8fafb] sm:mx-w-xl md:max-w-2xl lg:mx-w-3xl ">
             <Header/>
             <div className="flex-1 overflow-y-auto px-2 pb-20 pt-2 sm:px-5 sm:pb-24 sm:pt-4 md:px-6 rounded-md border border-[#B3D0CF] mt-5">
              <div className="space-y-2.5 sm:space-y-4">
                <Amount value={amount} onChange={setAmount}/>
              </div>
             </div>

        </div>
      </main>
       
    )
}