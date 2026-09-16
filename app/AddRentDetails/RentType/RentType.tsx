"use client";

interface RentTypeProps {
  type:"monthly"|"daily";
  onChange:(type:"monthly"|"daily")=> void;
}

export default function RentType({
  type,
  onChange,
}: RentTypeProps) {
  return (
    <section className="mx-4 mb-3 mt-1">
    <div className="flex h-10 w-full rounded-md bg-[#e9ecef] p-0.5 sm:h-9">
      <button
        type="button"
        onClick={()=>onChange("monthly")}
        className={`flex-1 rounded-md text-[9px] font-semibold transition sm:text-xs ${
          type === "monthly"
            ? "bg-[#00634f] text-white"
            : "text-[#374151]"
        }`}
      >
        Monthly
      </button>

      <button
        type="button"
        onClick={()=>onChange("daily")}
        className={`flex-1 rounded-md text-[9px] font-semibold transition sm:text-xs ${
          type === "daily"
            ? "bg-[#00634f] text-white"
            : "text-[#374151]"
        }`}
      >
        Daily
      </button>
    </div>
    </section>
  );
}