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
    <div className="px-3 py-3">
      <label
        htmlFor="notes"
        className="mb-2 block text-xs font-semibold text-[#202124]"
      >
      </label>
      <div className="flex items-center gap-2 border-b border-[#e5e7eb] px-3 py-3 sm:px-5 md:px-6">
              <span className="text-sm "><img
                src="/assets/file-icon.svg"
                alt="file"
                className="h-5 w-5 " 
              /></span>

              <h2 className="text-xs font-bold text-[#202124] sm:text-sm">
                Notes
              </h2>
              </div>
      <textarea
        id="notes"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Mention specific amenities or maintenance status..."
        rows={4}
        className="w-full resize-none rounded-md border border-[#d9dce5] bg-white px-3 py-3 text-xs text-[#202124] outline-none placeholder:text-[#9ca3af] focus:border-[#00634f] focus:ring-1 focus:ring-[#00634f]"
      />
    </div>
  );
}