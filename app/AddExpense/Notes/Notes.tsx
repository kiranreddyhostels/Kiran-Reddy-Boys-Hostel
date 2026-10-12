"use client";


interface NotesProps {
  value: string;
  onChange: (value: string) => void;
}

export default function Notes({
  value,
  onChange,
}: NotesProps) {
  return (
    <div>
      <label className="mb-1 block text-[8px] font-semibold text-[#374151] sm:text-xs">
        Notes/Remarks
      </label>

      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Add any additional details here..."
        rows={3}
        className="w-full resize-none rounded-sm border border-[#d9dce5] bg-white px-2 py-2 text-[8px] outline-none placeholder:text-[#9ca3af] focus:border-[#00634f] sm:text-xs text-black"
      />
    </div>
  );
}