"use client";

import DashboardHeader from "@/components/DashboardHeader/DashboardHeader";
import BottomNavigation from "@/components/BottomNavigation/BottomNavigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <DashboardHeader />

      {/* Other dashboard ticket components will be added here */}

      <BottomNavigation />
    </main>
  );
}