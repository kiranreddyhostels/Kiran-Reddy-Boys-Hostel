"use client";
import Icon from "@/components/Icons/Icons";
interface PersonalInformationProps {
  fullName: string;
  onFullNameChange: (value: string) => void;
  mobileNumber:string;
  onMobileNumberChange:(value:string)=>void;
  idNumber:string;
  onIdNumberChange:(value:string)=>void;
 emergencyContact: string;
  onEmergencyContactChange:(value:string)=>void;
}
export default function PersonalInformation({
  fullName,
  onFullNameChange,
  mobileNumber,
  onMobileNumberChange,
  idNumber,
  onIdNumberChange,
  emergencyContact,
  onEmergencyContactChange
}: PersonalInformationProps) {
  return (
    <section className="rounded-md border border-[#e5e7eb] bg-white p-3 sm:p-4 mx-4 my-3">
      <h2 className="mb-3 flex items-center gap-1.5 text-[9px] font-bold uppercase text-[#374151] sm:text-xs">
        <span className="text-[#00634f]">
          <Icon
            src="/assets/contact-icon.svg"
            alt="contact"
            className="h-3 w-4"
          />
        </span>
        PERSONAL INFORMATION
      </h2>
      <div className="space-y-3">
        <div>
          <label
            htmlFor="fullName"
            className="mb-1 block text-[9px] font-bold text-[#3E4947] sm:text-xs"
          >
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(event) => onFullNameChange(event.target.value)}
            placeholder="John Doe"
            className="h-8 w-full rounded-md border border-[#d9dce5] px-2 text-[11px] outline-none placeholder:text-[#9ca3af] text-black sm:h-10 sm:text-xs "
          ></input>
        </div>
        
         <div>
            <label
              htmlFor="mobileNumber"
              className="mb-1 block text-[9px] font-bold text-[#3E4947] sm:text-xs"
            >
              Mobile Number
            </label>

            <input id="mobileNumber" value={mobileNumber} type="tel" onChange={(event)=>onMobileNumberChange(event.target.value)} placeholder="+1 (555) 000-0000" className="h-8 w-full rounded-md border border-[#d9dce5] px-2 text-[10px] outline-none placeholder:text-[#9ca3af] focus:border-[#00634f] text-black sm:h-10 sm:text-xs" ></input>

        </div>

        <div className="grid grid-cols-2 gap-2">
            <div>
                <label htmlFor="idNumber" className="mb-1 block text-[9px] font-bold text-[#3E4947] sm:text-xs ">ID Number</label>
                <input type="tel"  id="idNumber" value={idNumber} onChange={(event)=>onIdNumberChange(event.target.value)} placeholder="ID#12345"
              className="h-8 w-full rounded-md border border-[#d9dce5] px-2 text-[10px] outline-none placeholder:text-[#9ca3af] focus:border-[#00634f] text-black sm:h-10 sm:text-xs "/>
            </div>
            <div>
                <label htmlFor="emergencyContact" className="mb-1 block text-[9px] font-bold text-[#3E4947] ">Emergency Contact</label>
                <input type="tel"  id="emergencyContact" value={emergencyContact} onChange={(event)=>onEmergencyContactChange(event.target.value)} placeholder="+1 (555) 999-9999"
              className="h-8 w-full rounded-md border border-[#d9dce5] px-2 text-[10px] text-black outline-none placeholder:text-[#9ca3af] focus:border-[#00634f] "/>
            </div>
        </div>

      </div>
    </section>
  );
}
