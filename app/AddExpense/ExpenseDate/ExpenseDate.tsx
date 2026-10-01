"use client";
interface ExpenseDateProps{
    value:string;
    onChange:(value:string)=>void;
}
export default function ExpenseDate({value,onChange}:ExpenseDateProps){
    return(
        <div>
            <label className="mb-1 block text-[10px] font-semibold text-[#374151] sm:text-xs">Date</label>
            <input type="date" value={value} onChange={(event)=>onChange(event.target.value)} className="h-8 w-full rounded-sm border border-[#d9dce5] bg-white px-2 text-[9px] outline-none focus:border-[#00634f] sm:h-9 sm:text-xs text-black"/>
        </div>
    )
}