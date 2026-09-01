"use client";
interface RoomNumberProps {
    value: string;
    onChange:(value:string)=>void;
}
export default function RoomNumber({value,onChange}: RoomNumberProps){
    return(
        <div className="border-b border-[#e5e7eb] px-3 py-3">
            <label htmlFor="roomNumber" className="mb-2 block text-xs font-semibold text-[#202124]">Room Number</label>

            <input type="text" id="roomNumber" value={value}onChange={(event)=> onChange(event.target.value)} 
            placeholder="e.g. 101"
            className="h-10 w-full rounded-md border border-[#d9dce5] bg-white px-3 text-xs text-[#202124] outline-none placeholder:text-[#9ca3af]"/>

            <p className="mt-1.5 text-xs text-[#6b7280]">
              Unique identifier for the room.
            </p>
        </div>
    )
}