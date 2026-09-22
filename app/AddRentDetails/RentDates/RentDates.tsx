"use client";
import Icon from "@/components/Icons/Icons";

interface RentDatesProps {
  dateOfJoin: string;
  paidDate: string;
  dueDate: string;
  onDateOfJoinChange: (value: string) => void;
  onPaidDateChange: (value: string) => void;
  onDueDateChange: (value: string) => void;
}

export default function RentDates({
  dateOfJoin,
  paidDate,
  dueDate,
  onDateOfJoinChange,
  onPaidDateChange,
  onDueDateChange,
}: RentDatesProps) {
  return (
    <section className="mx-4 my-4">
    <div className="space-y-2.5">
      <div>
        <label className="mb-1 block text-[8px] text-[#374151] sm:text-xs">
          Date of Join
        </label>
            
                   
        <input
            type="date"
            value={paidDate}
            onChange={(e) => onPaidDateChange(e.target.value)}
            className="h-9 w-full rounded-md border border-[#d9dce5] bg-white px-2 text-[9px] outline-none sm:h-10 sm:text-xs text-black"
          />
        
      </div>

      <div className="grid grid-cols-2 gap-2 sm:gap-4">
        <div>
          <label className="mb-1 block text-[8px] text-[#374151] sm:text-xs">
            Paid Date
          </label>
          
          
          <input
            type="date"
            value={paidDate}
            onChange={(e) => onPaidDateChange(e.target.value)}
            className="h-9 w-full rounded-md border border-[#d9dce5] bg-white px-2 text-[9px] outline-none sm:h-10 sm:text-xs text-black"
          />
        </div>

        <div>
          <label className="mb-1 block text-[8px] text-[#374151] sm:text-xs">
            Due Date
          </label>

          <input
            type="date"
            value={dueDate}
            onChange={(e) => onDueDateChange(e.target.value)}
            className="h-9 w-full rounded-md border border-[#d9dce5] bg-white px-2 text-[9px] outline-none sm:h-10 sm:text-xs text-black"
          />
        </div>
      </div>
    </div>
    </section>
  );
}