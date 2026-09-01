"use client";

import Icon from "@/components/Icons/Icons";

interface FloorProps {
  value: string;
  onChange: (value: string) => void;
}
const floors=[
  {name:"Ground Floor", id:"ground floor"},
  {name:"1st Floor", id:"1st floor"},
  {name:"2nd Floor", id:"2nd floor"},
  {name:"3rd Floor", id:"3rd floor"},
  {name:"4th Floor", id:"4th floor"}
]

export default function Floor({
  value,
  onChange,
}: FloorProps) {
  return (
    <div className="border-b border-[#e5e7eb] px-3 py-3">
      <label
        htmlFor="floor"
        className="mb-2 block text-xs font-semibold text-[#202124]"
      >
        Floor
      </label>

      <div className="relative">
        <select
          id="floor"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-10 w-full appearance-none rounded-md border border-[#d9dce5] bg-white px-3 text-xs text-[#202124] outline-none focus:border-[#00634f] focus:ring-1 focus:ring-[#00634f]"
        >
          {floors.map((floor)=>(
            <option key={floor.id} value={floor.name}>{floor.name}</option>
          ))}
        </select>

        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#6b7280]">
         <Icon src="/assets/dropdown.svg" alt="Drop down" className="h-4 w-4" />
        </span>
      </div>
    </div>
  );
}