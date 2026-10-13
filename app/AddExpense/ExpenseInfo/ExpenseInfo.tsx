
import Icon from "@/components/Icons/Icons";
export default function ExpenseInfo() {
  return (
    <div className="flex gap-2 rounded-md bg-[#eef6ff] p-2 text-[8px] text-[#3525CD] sm:text-xs">
      <span> <Icon src="/assets/info.svg" alt="Info" className="h-4 w-4"  /></span>

      <p>
        This expense will be added to the current month's
        financial report and deducted from available budget.
      </p>
    </div>
  );
}