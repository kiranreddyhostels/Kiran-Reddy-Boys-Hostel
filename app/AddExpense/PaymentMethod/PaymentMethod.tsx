"use client";

interface PaymentMethodProps {
  value: string;
  onChange: (value: string) => void;
}

const paymentMethods = ["Cash", "Digital", "UPI"];

export default function PaymentMethod({
  value,
  onChange,
}: PaymentMethodProps) {
  return (
    <div >
      <label className="mb-1 block text-[8px] font-semibold text-[#374151] sm:text-xs">
        Payment Method
      </label>



      <div className="h-8 w-full rounded-md bg-[#e5e7eb] p-0.5 sm:h-9">
      <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
        {paymentMethods.map((method) => {
          const selected = value === method;

          return (
            <button
              key={method}
              type="button"
              onClick={() => onChange(method)}
              className={`h-8 rounded-sm  text-[8px] font-medium sm:h-9 sm:text-xs ${
                selected
                ? " border-[#00634f] bg-white text-[#00634f]"
                  :" border-[#d9dce5] bg-transparent text-[#374151]"
                  
              }`}
            >
              {method}
            </button>
          );
        })}
      </div>
      </div>
    </div>
  );
}