"use client";

import { useState } from "react";

import Header from "./Header/Header";
import RentType from "./RentType/RentType";
import TenantSelect from "./TenantSelect/TenantSelect";
import TenantModal from "./TenantSelect/TenantModal";

interface Tenant {
  id: number;
  name: string;
  room: string;
  rent: string;
}

const tenants: Tenant[] = [
  {
    id: 1,
    name: "John Doe",
    room: "Room 104",
    rent: "1,200",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    room: "Room 202",
    rent: "1,450",
  },
  {
    id: 3,
    name: "Michael Smith",
    room: "Room 101",
    rent: "1,100",
  },
  {
    id: 4,
    name: "Alex Rivera",
    room: "Room 305",
    rent: "1,600",
  },
  {
    id: 5,
    name: "Priya Kapur",
    room: "Room 204",
    rent: "1,450",
  },
];

export default function AddRentDetails() {
  const [rentType, setRentType] =
    useState<"monthly" | "daily">("daily");

  // selected tenant
  const [selectedTenant, setSelectedTenant] =
    useState<Tenant | null>(null);

  // controls bottom sheet
  const [showTenantModal, setShowTenantModal] =
    useState(false);

  return (
    <main className="min-h-screen bg-[#f4f6f7]">
      <div className="mx-auto flex min-h-screen w-full flex-col sm:max-w-xl md:max-w-2xl lg:max-w-3xl">

        {/* header */}
        <Header />

        {/* renttype */}
        <RentType
          type={rentType}
          onChange={setRentType}
        />

        {/* tenant select */}
        <TenantSelect
          tenant={selectedTenant}
          onClick={() => setShowTenantModal(true)}
        />

        {/* tenant bottom sheet */}
        {showTenantModal && (
          <TenantModal
            tenants={tenants}
            onClose={() => setShowTenantModal(false)}
            onSelect={(tenant) => {
              setSelectedTenant(tenant);
              setShowTenantModal(false);
            }}
          />
        )}

      </div>
    </main>
  );
}