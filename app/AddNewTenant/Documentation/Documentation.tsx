"use client";
import Icon from "@/components/Icons/Icons";
interface DocumentationProps{
onProfileChange:(file:File|null)=>void;
onDocumentChange:(file:File|null)=>void;
}
export default function Documentation({onProfileChange,onDocumentChange}:DocumentationProps){
    return(
        <section className="rounded-md border border-[#e5e7eb] bg-white p-3 sm:p-4 mx-4">
           <h2 className="mb-3 flex items-center gap-1.5 text-[9px] font-bold text-[#374151] sm:text-xs"><span><Icon src="/assets/file-icon.svg"
            alt="file"
            className="h-3 w-4"/></span>DOCUMENTATION</h2> 

            <div className="space-y-2">
              <label className="flex h-20 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-[#bfc7c5] bg-[#f8faf9] text-center sm:h-18 md:h-26">
                <span className="text-xs"><Icon src="/assets/camera.svg"
            alt="image"
            className="h-6 w-6"/></span>
             <span className="mt-1 text-[8px] text-[#6b7280] sm:text-xs">
            Profile Image
          </span>
          <input type="file" accept="image/*" className="hidden" onChange={(event)=>onProfileChange(event?.target.files?.[0]?? null)}/>
              
              </label>

              <label className="flex h-20 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-[#bfc7c5] bg-[#f8faf9] text-center sm:h-18 md:h-26">
                <span className="text-xs"><Icon src="/assets/id-icon.svg"
            alt="Id document"
            className="h-6 w-6"/></span>
             <span className="mt-1 text-[8px] text-[#6b7280] sm:text-xs">
               ID Document
          </span>
          <input type="file" accept="image/*" className="hidden" onChange={(event)=>onProfileChange(event?.target.files?.[0]?? null)}/>
              
              </label>
            </div>
        </section>
    )
}