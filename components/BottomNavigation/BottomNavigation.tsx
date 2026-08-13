import Link from "next/link";

const navigationItems = [
  {
    name: "Dashboard",
    icon: "/Dashboard.png",
    href: "/",
  },
  {
    name: "Rooms",
    icon: "/Rooms.png",
    href: "/rooms",
  },
  {
    name: "Beds",
    icon: "/Beds.png",
    href: "/beds",
  },
  {
    name: "Rent",
    icon: "/Rent.png",
    href: "/rent",
  },
  {
    name: "Settings",
    icon: "/Setting.png",
    href: "/settings",
  },
];

export default function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 z-50 flex h-[52px] w-full items-center justify-around bg-white shadow-[0_2px_4px_-2px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)]">
      {navigationItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="flex flex-col items-center justify-center rounded-xl px-2 pt-[2.2px] pb-[2.2px]"
        >
          <img
            src={item.icon}
            alt={item.name}
            className="h-[26px] w-auto object-contain"
          />

          <span className="text-[10px] leading-none text-[#333333]">
            {item.name}
          </span>
        </Link>
      ))}
    </nav>
  );
}