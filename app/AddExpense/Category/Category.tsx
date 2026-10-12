"use client";
import Icon from "@/components/Icons/Icons";

interface CategoryProps {
  value: string;
  onChange: (value: string) => void;
}

const categories = [
  {
    id: "maintenance",
    name: "Maintenance",
    icon: (<Icon src="/assets/maintenance.svg" alt="Maintenance"  />),
  },
  {
    id: "utility",
    name: "Utility",
    icon: (<Icon src="/assets/utility.svg" alt="Utility"  />),
  },
  {
    id: "salaries",
    name: "Salaries",
    icon: (<Icon src="/assets/salary.svg" alt="salaries"/>),
  },
  {
    id: "food",
    name: "Food",
    icon: (<Icon src="/assets/food.svg" alt="food" />),
  },
  {
    id: "others",
    name: "Others",
    icon: (<Icon src="/assets/others.svg" alt="others"  />),
  },
];

export default function Category({
  value,
  onChange,
}: CategoryProps) {
  return (
    <div>
      <label className="mb-1 block text-[8px] font-semibold text-[#374151] sm:text-xs">
        Category
      </label>

      <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
        {categories.map((category) => {
          const selected = value === category.id;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onChange(category.id)}
              className={`flex h-8 items-center justify-center gap-1 rounded-sm border text-[8px] font-medium transition sm:h-9 sm:text-xs ${
                selected
                  ? "border-[#00634f] bg-[#eef7f4] text-[#00634f]"
                  : "border-[#d9dce5] bg-white text-[#374151]"
              }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}