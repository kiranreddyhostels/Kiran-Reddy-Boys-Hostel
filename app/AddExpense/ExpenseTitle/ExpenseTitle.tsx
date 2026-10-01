"use client";
interface ExpenseTitleProps{
    value:string;
    onChange:(value:string)=>void;
}
export default function ExpenseTitle({value,onChange}:ExpenseTitleProps){
return(
    <div>
        <label className="mb-1 block text-[10px] font-semibold text-[#374151] sm:text-xs">Expense Title</label>
        <input type="text" value={value} onChange={(event)=>onChange(event.target.value)}
        placeholder="e.g Electricity Bill July"
        className="h-8 w-full rounded-sm border border-[#d9dce5] bg-white px-2 text-[9px] outline-none placeholder:text-[#9ca3af] focus:border-[#00634f] sm:h-9 sm:text-xs text-black "

         />
    </div>
)
}