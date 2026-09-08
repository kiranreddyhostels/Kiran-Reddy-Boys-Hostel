"use cline";
import Icon from "@/components/Icons/Icons";
interface LeaseAddressProps{
    dateOfJoin:string;
    onChangeDateOfJoin:(value:string)=>void;
    status:string;
    onStatusChange:(value:string)=>void;
    address:string;
    onAddressChange:(value:string)=>void;
}
const statuses=[
    {id:"occupied",name:"Occupied"},
    {id:"pending",name:"Pending"},
    {id:"inactive",name:"Inactive"},
]
export default function LeaseAddress({dateOfJoin,onChangeDateOfJoin,status,onStatusChange,address,onAddressChange}:LeaseAddressProps){
    return(
        <section className="rounded-md border border-[#e5e7eb] bg-white p-3 sm:p-4 mx-4 my-3"><h2 className="mb-3 flex items-center gap-1.5 text-[9px] font-bold  text-[#374151] sm:text-xs">
        <span className="text-[#00634f]"><Icon src="/assets/address-icon.svg"
                    alt="Address"
                    className="h-3 w-4"/></span>
        LEASE & ADDRESS
      </h2>
        <div className="grid grid-cols-2 gap-2 sm:gap-4">
            <div>
                <label htmlFor="dateOfJoin"
                className="mb-1 block text-[9px] font-bold text-[#3E4947]  sm:text-xs">Date of Join</label>
                <input type="date" id="dateOfJoin" value={dateOfJoin} onChange={(event)=>onChangeDateOfJoin(event.target.value)} className="h-8 w-full rounded-md border border-[#d9dce5] px-2 text-[8px]  text-black focus:border-[#00634f] sm:h-10 sm:text-xs"/>
            </div>
               
               <div>
                <label htmlFor="dateOfJoin"
                className="mb-1 block text-[9px] font-bold text-[#3E4947]  sm:text-xs">Status</label>
                <select id="status" value={status} onChange={(event)=>onStatusChange(event.target.value)}className="h-8 w-full rounded-md border border-[#d9dce5] bg-white px-2 text-[9px] outline-none focus:border-[#00634f] sm:h-10 sm:text-xs  text-[#3E4947] ">{statuses.map((status)=>(
                    <option value={status.name} key={status.id}>{status.name}</option>
                ))}</select>
                
            </div>
        </div>

        <div className="mt-3">
        <label
          htmlFor="address"
          className="mb-1 block text-[9px] font-bold text-[#374151] sm:text-xs"
        >
          Permanent Address
        </label>

        <textarea
          id="address"
          value={address}
          onChange={(event) => onAddressChange(event.target.value)}
          placeholder="Enter complete address..."
          rows={3}
          className="w-full resize-none rounded-md border border-[#d9dce5] px-2 py-2 text-[9px] outline-none placeholder:text-[#9ca3af] focus:border-[#00634f] sm:text-xs"
        />
      </div>
      </section>
    )
}