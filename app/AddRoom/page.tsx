"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import RoomNumber from "./RoomNumber/RoomNumber";
import Floor from "./Floor/Floor";
import NumberOfBeds from "./NumberOfBeds/NumberOfBeds";
import BedRent from "./BedRent/BedRent";

export default function AddRoomPage() {
  const router = useRouter();
  const [roomNumber, setRoomNumber] = useState("");
  const [floor, setFloor] = useState("Ground Floor");
  const [numberOfBeds, setNumberOfBeds] = useState(4);
  const [bedRent,setBedRent]= useState("");

  const handleSaveRoom = () => {
    const roomData = {
      roomNumber,
      floor,
      numberOfBeds,
      bedRent
    };
    console.log("Room Data: ", roomData);
  };
  const handleCancel = () => {
    router.back();
  };
  return (
    <main className="min-h-screen bg-[#f5f7f8]">
      <div className="mx-auto flex min-h-screen w-full flex-col bg-[#f8fafb] sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
        {/* Header */}
        <header className="flex h-14 shrink-0 items-center justify-between border-b border-[#e5e7eb] bg-white px-4">
          <Link
            href="/"
            onClick={() => router.back()}
            aria-label="Go back"
            className="flex items-center gap-2 text-sm font-semibold text-[#00634f]"
          >
            <span className="text-md">
              <img
                src="/assets/leftArrow.svg"
                alt="arrow"
                className="h-3 w-4"
              />
            </span>
            <span>Add Room</span>
          </Link>

          <Link href="/" onClick={() => router.back()} aria-label="Close">
            <img src="/assets/close.svg" alt="close" />
          </Link>
        </header>

        {/* RoomImage */}

        <section className="px-3 py-4 sm:px-5 md:px-6">
          <div className="relative h-32 w-full overflow-hidden rounded-xl sm:h-40 md:h-48">
            <img
              src="/image 1.png"
              alt="Room configuration"
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-[#374151] shadow-md">
              <span className="flex items-center gap-2">
                <img src="/assets/bed.svg" alt="Bed" className="h-5 w-5" />
                <span>Room 102 Configuration</span>
              </span>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 border-b border-[#e5e7eb] px-3 py-3 sm:px-5 md:px-6">
            <span className="text-sm">
              {" "}
              <img src="/assets/info.svg" alt="info" className="h-4 w-4" />
            </span>

            <h2 className="text-xs font-bold text-[#202124] sm:text-sm">
              Basic Information
            </h2>
          </div>

          <RoomNumber value={roomNumber} onChange={setRoomNumber} />

          <Floor value={floor} onChange={setFloor} />
        </section>

        {/* configuration */}
        <section>
          <div className="flex items-center gap-2 border-b border-[#e5e7eb] px-3 py-3 sm:px-5 md:px-6">
            <span className="text-sm">
              <img
                src="/assets/setting.svg"
                alt="setting"
                className="h-5 w-5"
              />
            </span>

            <h2 className="text-xs font-bold text-[#202124] sm:text-sm">
              Configuration
            </h2>
          </div>

          {/* number of beds */}
          <NumberOfBeds value={numberOfBeds} onChange={setNumberOfBeds} />

          {/* bed rent */}
          <BedRent value={bedRent} onChange={setBedRent}/>
        </section>
      </div>
    </main>
  );
}
