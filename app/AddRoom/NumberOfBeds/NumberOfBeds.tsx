"use client";

interface NumberOfBedsProps {
  value: number;
  onChange: (value: number) => void;
}

export default function NumberOfBeds({ value, onChange }: NumberOfBedsProps) {
  const decreaseBeds = () => {
    if (value > 1) {
      onChange(value - 1);
    }
  };
  const increaseBeds = () => {
    if (value < 6) {
      onChange(value + 1);
    }
  };
  return (
    <div className="border-b border-[#e5e7eb] px-3 py-3 " >
      <label className="mb-2 block text-xs font-semibold text-[#202124]">
        Number of Beds
      </label>

      <div className="flex h-10 items-center justify-between rounded-md border-[#d9dce5] bg-white px-3">
        <button
          type="button"
          onClick={decreaseBeds}
          aria-label="Decrease number of beds"
          className="text-xs leading-none hover:text-[#004f3e]"
        >
          <img
            src="/assets/decrease-icon.svg"
            alt="decrease"
            className="h-4 w-4"
          />
        </button>

        <span className="text-xs font-semibold text-[#202124]">{value}</span>

        <button
          type="button"
          onClick={increaseBeds}
          aria-label="Increase number of beds"
          className="text-xl leading-none  hover:text-[#004f3e]"
        >
          <img
            src="/assets/increase-icon.svg"
            alt="increase"
            className="h-4 w-4"
          />
        </button>
      </div>
    </div>
  );
}
