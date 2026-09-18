"use client";

interface FinancialOverviewProps {
  totalFee: string;
  paidAmount: string;
  dueAmount: string;
  onTotalFeeChange: (value: string) => void;
  onPaidAmountChange: (value: string) => void;
  onDueAmountChange: (value: string) => void;
}

export default function FinancialOverview({
  totalFee,
  paidAmount,
  dueAmount,
  onTotalFeeChange,
  onPaidAmountChange,
  onDueAmountChange,
}: FinancialOverviewProps) {
  return (
    <section className="rounded-md bg-[#eef3f2] p-3 sm:p-4 mx-4">
      <h2 className="mb-3 text-[9px] font-bold uppercase text-[#00634f] sm:text-xs">
        Financial Overview
      </h2>

      <div className="space-y-2.5">
        <div>
          <label className="mb-1 block text-[8px] text-[#374151] sm:text-xs">
            Total Fee
          </label>

          <div className="flex h-9 items-center rounded-md border border-[#d9dce5] bg-white sm:h-10 text-black">
            <span className="pl-2 text-[9px] text-[#6b7280] ">₹</span>

            <input
              type="number"
              value={totalFee}
              onChange={(e) => onTotalFeeChange(e.target.value)}
              placeholder="0.00"
              className="h-full w-full bg-transparent px-2 text-[9px] outline-none sm:text-xs"
            />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-[8px] text-[#374151] sm:text-xs">
            Paid Amount
          </label>

          <div className="flex h-9 items-center rounded-md border border-[#d9dce5] bg-white sm:h-10 text-black">
            <span className="pl-2 text-[9px] text-[#6b7280]">₹</span>

            <input
              type="number"
              value={paidAmount}
              onChange={(e) => onPaidAmountChange(e.target.value)}
              placeholder="0.00"
              className="h-full w-full bg-transparent px-2 text-[9px] outline-none sm:text-xs"
            />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-[8px] text-[#374151] sm:text-xs">
            Due (Auto-calculated)
          </label>

          <div className="flex h-9 items-center rounded-md bg-[#dfe3e2] sm:h-10 text-black">
            <span className="pl-2 text-[9px] text-[#6b7280]">₹</span>

            

            <input
              type="number"
              value={dueAmount}
              onChange={(e) => onDueAmountChange(e.target.value)}
              placeholder="0.00"
              className="h-full w-full bg-transparent px-2 text-[9px] outline-none sm:text-xs"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
