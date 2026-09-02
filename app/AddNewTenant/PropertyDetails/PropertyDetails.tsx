"use client";
import Icon from "@/components/Icons/Icons";

interface PropertyDetailsProps{
    room:string;
    bed:string;
    onRoomChange:(value:string)=> void;
    onBedChange:(value:string)=>void;
}

const rooms=[
  {name:"Select a Room", id:"room no"},
  {name:"101", id:"101"},
  {name:"102", id:"102"},
  {name:"103", id:"103"},
  {name:"104", id:"104"}
]

const beds=[
  {name:"Select a Bed", id:"select a bed"},
  {name:"Bed 1", id:"bed 1"},
  {name:"Bed 2", id:"bed 2"},
  {name:"Bed 3", id:"bed 3"},
  {name:"Bed 4", id:"bed 4"}
]


export default function ({room,bed,onRoomChange,onBedChange}:PropertyDetailsProps) {
  return (
    <section className="rounded-md border border-[#e5e7eb] bg-white p-3 sm:p-4 mx-4">
      <h2 className="mb-3 flex items-center gap-1.5 text-[9px] font-bold text-[#374151] sm:text-xs">
        <span>
          <Icon
            src="/assets/property-icon.svg"
            alt="property"
            className="h-3 w-4"
          />
        </span>
        PROPERTY DETAILS
      </h2>
      <div className="grid grid-cols-2 gap-2 sm:gap-4">
        <div>
        <label className="mb-1 block text-[9px] font-bold text-[#3E4947] sm:text-xs">Room No</label>
         
         <select value={room}
         onChange={(event)=>onRoomChange(event.target.value)}
         className="h-8 w-full rounded-md border border-[#d9dce5] bg-white px-2 text-[9px] outline-none focus:border-[#00634f] sm:h-10 sm:text-xs text-[#3E4947]">
           {rooms.map((room)=>(
            <option key={room.id} value={room.name}>{room.name}</option>
          ))}
         </select>
        </div>
         
         <div>
            <label className="mb-1 block text-[9px] font-bold text-[#3E4947] sm:text-xs">Bed No</label>
            <select value={bed} onChange={(event)=>onBedChange(event.target.value)} className="h-8 w-full rounded-md border border-[#d9dce5] bg-white px-2 text-[9px] outline-none focus:border-[#00634f] sm:h-10 sm:text-xs text-black">
               {beds.map((bed)=>(<option key={bed.id} value={bed.name}>{bed.name}</option>))}
            </select>
         </div>
        </div>
    </section>
  );
}


