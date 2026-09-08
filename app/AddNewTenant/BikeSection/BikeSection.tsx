"use client";
import Icon from "@/components/Icons/Icons";
import { useState } from "react";

interface BikeSectionProps {
  onBikePicChange: (file: File | null) => void;
  onBikeRcChange: (file: File | null) => void;
}

export default function BikeSection({
  onBikePicChange,
  onBikeRcChange,
}: BikeSectionProps) {
  const [hasBike, setHasBike] = useState(false);

  return (
    <section className="rounded-md border border-[#e5e7eb] bg-white p-3 sm:p-4 mx-4 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon src="/assets/bike-icon.svg" alt="" className="h-4 w-4" />

          <span className="text-[10px] font-medium text-[#111827] sm:text-xs">
            Do you have a bike?
          </span>
        </div>

        <div className="flex rounded-md border border-[#d1d5db] bg-[#f3f4f6] p-0.5">
          <button
            type="button"
            onClick={() => setHasBike(true)}
            className={`h-6 rounded px-3 text-[9px] font-medium sm:text-[10px] ${
              hasBike ? "bg-[#00634f] text-white" : "text-[#374151]"
            }`}
          >
            Yes
          </button>

          <button
            type="button"
            onClick={() => setHasBike(false)}
            className={`h-6 rounded px-3 text-[9px] font-medium sm:text-[10px] ${
              !hasBike ? "bg-[#00634f] text-white" : "text-[#374151]"
            }`}
          >
            No
          </button>
        </div>
      </div>

      {hasBike && (
        <div className="mt-7 space-y-3">
          <div>
            <label
              htmlFor="bikeNumber"
              className="mb-1.5 block text-[10px] font-medium text-[#374151] sm:text-xs"
            >
              Bike Number
            </label>

            <input
              id="bikeNumber"
              name="bikeNumber"
              type="text"
              placeholder="Enter number plate ID"
              className="h-10 w-full rounded-md border border-[#d1d5db] px-3 text-[10px] outline-none placeholder:text-[#6b7280] focus:border-[#00634f] focus:ring-1 focus:ring-[#00634f] sm:text-xs"
            />
          </div>

          <div>
            <label
              htmlFor="bikePic"
              className="mb-1.5 block text-[10px] font-medium text-[#374151] sm:text-xs"
            >
              Bike Pic
            </label>

            <label
              htmlFor="bikePic"
              className="flex h-21 cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-[#cbd5d1] bg-[#f8fafb]"
            >
              <Icon src="/assets/bike-pic.svg" alt="" className="h-4 w-4" />

              <span className="mt-1 text-[8px] text-[#374151] sm:text-[9px]">
                Upload Bike Pic
              </span>

              <input
                id="bikePic"
                name="bikePic"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(event) =>
                  onBikePicChange(event?.target.files?.[0] ?? null)
                }
              />
            </label>
          </div>

          <div>
            <label
              htmlFor="bikeRc"
              className="mb-1.5 block text-[10px] font-medium text-[#374151] sm:text-xs"
            >
              Bike RC
            </label>

            <label
              htmlFor="bikeRc"
              className="flex h-21 cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-[#cbd5d1] bg-[#f8fafb]"
            >
              <Icon src="/assets/RC-icon.svg" alt="" className="h-4 w-4" />

              <span className="mt-1 text-[8px] text-[#374151] sm:text-[9px]">
                Upload Bike RC
              </span>

              <input
                id="bikeRc"
                name="bikeRc"
                type="file"
                accept="image/*,.pdf"
                className="hidden"
                onChange={(event) =>
                  onBikeRcChange(event?.target.files?.[0] ?? null)
                }
              />
            </label>
          </div>
        </div>
      )}
    </section>
  );
}
