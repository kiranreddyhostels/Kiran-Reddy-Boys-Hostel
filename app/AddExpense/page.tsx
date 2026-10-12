"use client";
import Header from "./Header/Header";
import Amount from "./Amount/Amount";
import ExpenseTitle from "./ExpenseTitle/ExpenseTitle";
import ExpenseDate from "./ExpenseDate/ExpenseDate";
import { useState } from "react";
import Category from "./Category/Category";
import PaymentMethod from "./PaymentMethod/PaymentMethod";
import ReceiptUpload from "./ReceiptUpload/ReceiptUpload";
import Notes from "./Notes/Notes";

export default function AddExpense(){
  const [amount,setAmount]=useState("");
  const[title,setTitle]=useState("");
  const[date,setDate]=useState("");
  const [category, setCategory] = useState("maintenance");
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [receipt, setReceipt] = useState<File | null>(null);
    const [notes, setNotes] = useState("");

  
    return(

      <main className="min-h-screen bg-[#f4f6f7]">
        <div className="mx-auto flex min-h-screen w-full flex-col bg-[#f8fafb] sm:mx-w-xl md:max-w-2xl lg:mx-w-3xl ">
             <Header/>
             <div className="flex-1 overflow-y-auto px-2 pb-20 pt-2 sm:px-5 sm:pb-24 sm:pt-4 md:px-6 rounded-md border border-[#B3D0CF] mt-5">
              <div className="space-y-2.5 sm:space-y-4">
                {/* amount */}
                <Amount value={amount} onChange={setAmount}/>

                {/* expense title */}
                 <ExpenseTitle  value={title} onChange={setTitle}/>


                 {/* expense date */}
                 <ExpenseDate value={date} onChange={setDate}  />

                  {/* category */}
                 <Category
              value={category}
              onChange={setCategory}
            />


            {/* payment method */}
               <PaymentMethod
              value={paymentMethod}
              onChange={setPaymentMethod}
            />


            {/* receipt upload*/}
            <ReceiptUpload  file={receipt}
              onChange={setReceipt}/>

              {/* notes */}

               <Notes
              value={notes}
              onChange={setNotes}
            />
              </div>
             </div>

        </div>
      </main>
       
    )
}