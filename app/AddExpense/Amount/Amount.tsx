"use client";
import Icon from "@/components/Icons/Icons";
interface AmountProps{
  value:string;
  onChange:(value:string)=>void;
}
export default function Amount({value,onChange}:AmountProps) {
  return (
    <div>
      <label className="mb-1 block text-[10px] font-semibold text-[#374151] sm:text-xs">
        Amount
      </label>
      <div className="flex h-12 item-center rounded-md bg-[#eef0f1] px-2 sm:h-13">
        <span className="pt-4 sm-pt-4">
          <Icon src="/assets/rupee-icon.svg" alt="Rupee" className="h-3 sm:h-5" />
        </span>
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="0.00"
          className="h-full w-full bg-transparent px-2 text-[14px] outline-none placeholder:text-[#6b7280] sm:text-xl text-black"
        />
      </div>
    </div>
  );
}
