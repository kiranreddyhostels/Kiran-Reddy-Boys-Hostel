"use clint";
import Icon from "@/components/Icons/Icons";

interface Tenant {
  id: number;
  name: string;
  room: string;
  rent: string;
}

interface TenantSelectProps {
  tenant: Tenant | null;
  onClick: () => void;
}

export default function TenantSelect({ tenant, onClick }: TenantSelectProps) {
  return (
    <section className="mb-2">
      <div className=" p-3 sm:p-4">
        <label className="mb-1 block text-[9px] font-semibold text-[#374151] sm:text-xs">
          Select a Tenant *
        </label>

        <div className="flex h-10 w-full  p-0.5 sm:h-9">
          <button
            type="button"
            onClick={onClick}
            className="flex h-9 w-full items-center justify-between rounded-md border border-[#d9dce5] bg-white px-3 text-left text-[9px] sm:h-10 sm:text-xs"
          >
            <span className={tenant ? "text-[#202124]" : "text-[#9ca3af]"}>
              {tenant ? tenant.name : "Choose a tenant..."}
            </span>

            <span className="text-[#6b7280]">
              <Icon
                src="/assets/dropdown2.svg"
                alt="dropdown"
                className="h-3 w-4"
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
