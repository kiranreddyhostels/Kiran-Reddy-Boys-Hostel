"use client";
import Icon from "@/components/Icons/Icons";
interface ReceiptUploadProps {
  file: File | null;
  onChange: (file: File | null) => void;
}

export default function ReceiptUpload({file,onChange}:ReceiptUploadProps){
    return(
        <div>
            <label className="mb-1 block text-[8px] font-semibold text-[#374151] sm:text-xs">Attach Receipt</label>

            <label className="flex h-34 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-[#cbd5d1] bg-[#f8faf9] sm:h-38 md:h-24">
        <span className="mb-1 text-sm text-[#00634f]"><Icon src="/assets/upload-file.svg" alt="File"  /></span>

        <span className="text-[8px] text-[#374151] sm:text-xs">
          {file ? file.name : "Click or drag to upload"}
        </span>

        {!file && (
          <span className="mt-0.5 text-[7px] text-[#9ca3af] sm:text-[10px]">
            PNG, JPG or PDF up to 5MB
          </span>
        )}

        <input
          type="file"
          accept="image/png,image/jpeg,application/pdf"
          className="hidden"
          onChange={(event) =>
            onChange(event.target.files?.[0] ?? null)
          }
        />
      </label>
    
        </div>
    )
}