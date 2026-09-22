"use client";

import { useState } from "react";

import Header from "./Header/Header";
import RentType from "./RentType/RentType";
import TenantSelect from "./TenantSelect/TenantSelect";
import TenantModal from "./TenantSelect/TenantModal";
import RoomBed from "./RoomBed/RoomBed";
import FinancialOverview from "./FinancialOverview/FinancialOverview";
import RentDates from "./RentDates/RentDates";
import WhatsaapNotification from "./WhatsappNotification/WhatsappNotification";
import { useNavigation } from "@/hooks/useNavigation";
import { useRouter } from "next/navigation";
import Button from "@/components/Button/Button";



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
  const [selectedTenant, setSelectedTenant] =
    useState<Tenant | null>(null);
  const [showTenantModal, setShowTenantModal] =
    useState(false);
    const [room, setRoom] = useState("");
  const [bed, setBed] = useState("");

  const [totalFee, setTotalFee] = useState("");
  const [paidAmount, setPaidAmount] = useState("");
  const [dueAmount,setDueAmount] = useState("");

  const [dateOfJoin,setDateOfJoin]=useState("");
  const [paidDate, setPaidDate]=useState("");
  const [dueDate,setDueDate]=useState("");
   const [whatsappEnabled, setWhatsappEnabled] =
    useState(true);
    const { handleCancel, goToAddRentSuccess } = useNavigation();


    const handleSaveRoom = () => {
    const rentData = {
      rentType,
      selectedTenant,
      room,
      bed,
      totalFee,
      paidAmount,
      paidDate,
      dueAmount,
      dateOfJoin,
      dueDate,
      whatsappEnabled
    };
    console.log("Room Data: ", rentData);
    goToAddRentSuccess();
  };

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

        {/* room and bed  number*/}
        <RoomBed
            room={room}
            bed={bed}
            onRoomChange={setRoom}
            onBedChange={setBed}
          />

          {/* Financial Overview */}
          <FinancialOverview
            totalFee={totalFee}
            paidAmount={paidAmount}
            dueAmount={dueAmount}
            onTotalFeeChange={setTotalFee}
            onPaidAmountChange={setPaidAmount}
            onDueAmountChange={setDueAmount}
          />

          {/* rentdates */}
          <RentDates
          dateOfJoin={dateOfJoin} onDateOfJoinChange={setDateOfJoin} paidDate={paidDate} onPaidDateChange={setPaidDate} dueDate={dueDate} onDueDateChange={setDueDate}
          />


          {/* whatsapp notification */}
          <WhatsaapNotification  enabled={whatsappEnabled}
            onChange={setWhatsappEnabled}/>


            {/* submit Button */}
        <div className=" bottom-0 border-t  p-2 sm:p-4">
          <Button
            text="Submit Rent Details"
            type="button"
            onClick={handleSaveRoom}
            className="h-9 text-[9px] sm:h-11 sm:text-xs"
          />
        </div>

      </div>
    </main>
  );
}