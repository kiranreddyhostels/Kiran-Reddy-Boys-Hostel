"use client";
interface RoomBedProps {
  room: string;
  bed: string;
  onRoomChange: (value: string) => void;
  onBedChange: (value: string) => void;
}

const rooms=[
  {name:"Room 101", id:"room 101"},
  {name:"Room 102", id:"room 102"},
  {name:"Room 103", id:"Room 103"},
]

const beds=[
  {name:"Bed 1", id:"bed 1"},
  {name:"Bed 2", id:"bed 2"},
  {name:"Bed 3", id:"bed 3"},
  {name:"Bed 4", id:"bed 4"},
]

export default function RoomBed({
  room,
  bed,
  onRoomChange,
  onBedChange,

}: RoomBedProps) {
  return (
    <section className="mx-4 mb-3">
    <div className="grid grid-cols-2 gap-2 sm:gap-4">
      <div>
        <label className="mb-1 block text-[9px] font-semibold text-[#374151] sm:text-xs">
          Room Number
        </label>

       <select
            value={room}
            onChange={(event) => onRoomChange(event.target.value)}
            className="h-8 w-full rounded-md border border-[#d9dce5] bg-white px-2 text-[9px] outline-none focus:border-[#00634f] sm:h-10 sm:text-xs placeholder:text-[#9ca3af] text-black"
          >
            {rooms.map((room)=>(
              <option key={room.id} value={room.name} >{room.name}</option>
            ))}
          </select>
      </div>

      <div>
        <label className="mb-1 block text-[9px] font-semibold text-[#374151] sm:text-xs">
          Bed Number
        </label>

         <select
            value={bed}
            onChange={(event) => onBedChange(event.target.value)}
            className="h-8 w-full rounded-md border border-[#d9dce5] bg-white px-2 text-[9px] outline-none focus:border-[#00634f] sm:h-10 sm:text-xs placeholder:text-[#9ca3af] text-black"
          >
            {beds.map((bed)=>(
              <option key={bed.id} value={bed.name}>{bed.name}</option>
            ))}
          </select>

        {/* <input
          value={bedNumber}
          readOnly
          placeholder="e.g. B-01"
          className="h-9 w-full rounded-md border border-[#d9dce5] bg-white px-2 text-[9px] text-[#202124] outline-none placeholder:text-[#9ca3af] sm:h-10 sm:text-xs"
        /> */}
      </div>
    </div>
    </section>
  );
}