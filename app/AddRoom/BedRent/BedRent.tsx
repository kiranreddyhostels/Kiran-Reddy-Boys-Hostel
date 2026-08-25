"use client";
interface BedRentProps {
  value: string;
  onChange: (value: string) => void;
}
export default function BedRent({ value, onChange }: BedRentProps) {
  return (
    <div className="border-b border-[#e5e7eb] px-3 py-3">
      <label
        htmlFor="bedRent"
        className="mb-2 block text-xs font-semibold text-[#202124]"
      >
        Bed Rent
      </label>

      <div className="flex h-10 items-center rounded-md border border-[#d9dce5] bg-white focus-within:border-[#00634f] focus-within:ring-1 focus-within:ring-[#00634f]">
        <span className="pl-3 text-xs text-[#6b7280]">
          <img src="/assets/rupee-icon.svg" alt="close" />
        </span>

        <input
          id="bedRent"
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="0.00"
          className="h-full w-full border-none bg-transparent px-2 text-xs outline-none placeholder:text-[#9ca3af] text-[#202124]"
        />
      </div>

      <p className="mt-1.5 text-xs text-[#6b7280]">
        Base rate per bed per month.
      </p>
    </div>
  );
}
