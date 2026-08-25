"use client";

interface FloorProps {
  value: string;
  onChange: (value: string) => void;
}

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
          <option value="Ground Floor">Ground Floor</option>
          <option value="1st Floor">1st Floor</option>
          <option value="2nd Floor">2nd Floor</option>
          <option value="3rd Floor">3rd Floor</option>
          <option value="4th Floor">4th Floor</option>
        </select>

        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#6b7280]">
         <img src="/assets/dropdown.svg" alt="Drop down" className="h-4 w-4" />
        </span>
      </div>
    </div>
  );
}