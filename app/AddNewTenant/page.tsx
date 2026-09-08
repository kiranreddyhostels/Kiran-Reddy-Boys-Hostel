"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Icon from "@/components/Icons/Icons";
import PropertyDetails from "./PropertyDetails/PropertyDetails";
import { useState } from "react";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import Documentation from "./Documentation/Documentation";
import LeaseAddress from "./LeaseAddress/LeaseAddress";
import BikeSection from "./BikeSection/BikeSection";
import Button from "@/components/Button/Button";
import { useNavigation } from "@/hooks/useNavigation";


export default function AddNewTenantPage() {
  const [room, setRoom] = useState("");
  const [bed, setBed] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [idDocument, setIdDocument] = useState<File | null>(null);
  const [dateOfJoin, setDateOfJoin] = useState("");
  const [status, setStatus] = useState("");
  const [address, setAddress] = useState("");
  const [bikePic, setBikePic] = useState<File | null>(null);
  const [bikeRc, setBikeRc] = useState<File | null>(null);
  const {  goToAddNewTenantSuccess } = useNavigation();
  const router = useRouter();

  const handleSaveTenant = () => {
    const tenantData = {
      room,
      bed,
      fullName,
      mobileNumber,
      idNumber,
      emergencyContact,
      profileImage,
      idDocument,
      dateOfJoin,
      status,
      address,
      bikePic,
      bikeRc,
    };
    console.log("Room Data: ", tenantData);
    goToAddNewTenantSuccess();
  };

  return (
    <main className="min-h-screen bg-[#f4f6f7]">
      <div className="mx-auto flex min-h-screen w-full flex-col sm:max-w-xl md:max-w-2xl lg:max-w-3xl ">
        {/* header */}
        <header className="flex h-12 items-center justify-between border-b border-[#e5e7eb] bg-white px-3 sm:h-14 sm:px-5 md:px-6">
          <Link
            href="/"
            onClick={() => router.back}
            aria-label="Go back"
            className="flex items-center gap-2 text-xs font-semibold text-[#00634f] sm:text-sm"
          >
            <span className="text-md">
              <Icon
                src="/assets/leftArrow.svg"
                alt="arrow"
                className="h-3 w-4"
              />
            </span>
            <span>Add New Tenant</span>
          </Link>

          <Link
            href="/"
            onClick={() => router.back()}
            aria-label="close"
            className="text-lg text-[#6b7280]"
          >
            <Icon src="/assets/close.svg" alt="close" />
          </Link>
        </header>

        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-1">
            <div className="h-1 w-7 rounded-full bg-[#00634f] sm:w-10"></div>
            <div className="h-1 w-6 rounded-full bg-[#cbd5d3] sm:w-9"></div>
          </div>
          <span className="text-[9px] text-[#6b7280] sm:text-xs">
            Step 1 of 2
          </span>
        </div>

        {/* property Details */}
        <PropertyDetails
          room={room}
          bed={bed}
          onRoomChange={setRoom}
          onBedChange={setBed}
        />

        {/* Personal information */}
        <PersonalInformation
          fullName={fullName}
          mobileNumber={mobileNumber}
          idNumber={idNumber}
          emergencyContact={emergencyContact}
          onFullNameChange={setFullName}
          onMobileNumberChange={setMobileNumber}
          onIdNumberChange={setIdNumber}
          onEmergencyContactChange={setEmergencyContact}
        />

        {/* documentation */}
        <Documentation
          onProfileChange={setProfileImage}
          onDocumentChange={setIdDocument}
        />

        {/* lease&address */}
        <LeaseAddress
          dateOfJoin={dateOfJoin}
          onChangeDateOfJoin={setDateOfJoin}
          status={status}
          onStatusChange={setStatus}
          address={address}
          onAddressChange={setAddress}
        />

        {/* bike section */}
        <BikeSection onBikePicChange={setBikePic} onBikeRcChange={setBikeRc} />

        {/* button */}
        <div className="border-t border-[#e5e7eb] p-5 sm:p-4">
  <Button
    text="Add Tenant"
    type="button"
    onClick={handleSaveTenant}
    className="h-9 text-[14px] sm:h-12 sm:text-xs"
  />
</div>
      </div>
    </main>
  );
}
