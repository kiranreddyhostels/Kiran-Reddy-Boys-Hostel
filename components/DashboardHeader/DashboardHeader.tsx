export default function DashboardHeader() {
  return (
    <header className="flex h-16 w-full items-center justify-between border-b border-[#C7C4D8] bg-[#F8F9FA] px-4">
      {/* Logo */}
      <div className="flex h-[50px] w-[50px] items-center gap-2">
        <img
          src="/logo.png"
          alt="Kiran Reddy Boys Hostel Logo"
          className="h-10 w-auto object-contain"
        />
      </div>

      {/* Header Actions */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="flex h-10 w-[42px] flex-col items-center justify-center rounded-xl px-2"
          aria-label="Logout"
        >
          <img
            src="/Icon1.png"
            alt="Logout"
            className="h-5 w-5 object-contain"
          />
        </button>

        <button
          type="button"
          className="flex h-10 w-[42px] flex-col items-center justify-center rounded-xl px-2"
          aria-label="Menu"
        >
          <img
            src="/Icon2.png"
            alt="Menu"
            className="h-5 w-5 object-contain"
          />
        </button>
      </div>
    </header>
  );
}