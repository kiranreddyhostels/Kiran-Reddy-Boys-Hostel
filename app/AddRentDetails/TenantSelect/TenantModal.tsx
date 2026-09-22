"use client";

import { useEffect, useRef, useState } from "react";

import Icon from "@/components/Icons/Icons";
import Button from "@/components/Button/Button";

interface Tenant {
  id: number;
  name: string;
  room: string;
  rent: string;
}

interface TenantModalProps {
  tenants: Tenant[];
  onClose: () => void;
  onSelect: (tenant: Tenant) => void;
}

export default function TenantModal({
  tenants,
  onClose,
  onSelect,
}: TenantModalProps) {
  const [search, setSearch] = useState("");

  // Bottom sheet height
  const [sheetHeight, setSheetHeight] = useState(55);

  // Drag information
  const startY = useRef(0);
  const startHeight = useRef(55);
  const currentHeight = useRef(55);
  const isDragging = useRef(false);

  const filteredTenants = tenants.filter((tenant) =>
    `${tenant.name} ${tenant.room}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  /*
   * Start dragging
   */
  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    startY.current = event.clientY;
    startHeight.current = currentHeight.current;
    isDragging.current = true;
  };

  /*
   * Handle dragging
   */
  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (!isDragging.current) return;

      const screenHeight = window.innerHeight;

      // Positive value when dragging upward
      const difference = startY.current - event.clientY;

      const heightChange =
        (difference / screenHeight) * 100;

      let newHeight =
        startHeight.current + heightChange;

      // Minimum = 30vh
      // Maximum = 90vh
      newHeight = Math.max(
        30,
        Math.min(90, newHeight)
      );

      currentHeight.current = newHeight;
      setSheetHeight(newHeight);
    };

    /*
     * Stop dragging
     */
    const handlePointerUp = () => {
      if (!isDragging.current) return;

      isDragging.current = false;

      const height = currentHeight.current;

      // Close sheet if dragged down too far
      if (height < 35) {
        onClose();
        return;
      }

      // Snap to 40vh
      if (height < 55) {
        currentHeight.current = 40;
        setSheetHeight(40);
      }

      // Snap to 85vh
      else {
        currentHeight.current = 85;
        setSheetHeight(85);
      }
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove
    );

    window.addEventListener(
      "pointerup",
      handlePointerUp
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "pointerup",
        handlePointerUp
      );
    };
  }, [onClose]);

  /*
   * Cancel dragging
   */
  const handlePointerCancel = () => {
    isDragging.current = false;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/30">

      {/* Bottom Sheet */}
      <div
        className="absolute bottom-0 left-0 right-0 mx-auto flex flex-col overflow-hidden rounded-t-2xl bg-white shadow-xl sm:max-w-xl md:max-w-2xl"
        style={{
          height: `${sheetHeight}vh`,
        }}
      >

        {/* =========================
            Drag Handle
        ========================== */}
        <div
          className="flex h-8 shrink-0 touch-none select-none items-center justify-center"
          onPointerDown={handlePointerDown}
          onPointerCancel={handlePointerCancel}
        >
          <div className="h-1 w-5 rounded-full bg-[#cbd5e1]" />
        </div>

        {/* 
            Header
        */}
        <div className="flex shrink-0 items-center justify-between px-4 py-2">
          <h2 className="text-sm font-bold text-[#202124] sm:text-base">
            Select Tenant
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-6 w-6 items-center justify-center"
          >
            <Icon
              src="/assets/close.svg"
              alt="Close"
              className="h-3 w-4"
            />
          </button>
        </div>

        {/* 
            Search
        */}
        <div className="shrink-0 px-4">
          <div className="flex h-9 items-center rounded-md border border-[#d9dce5] px-2.5 sm:h-10">
            <Icon
              src="/assets/search.svg"
              alt="Search"
              className="mr-2 h-3 w-4"
            />

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search by name or room..."
              className="w-full text-[9px] text-black outline-none placeholder:text-[#9ca3af] sm:text-xs"
            />
          </div>
        </div>

        {/*
            Tenant List
        */}
        <div className="min-h-0 flex-1 space-y-2 overflow-y-auto p-4">

          {filteredTenants.map((tenant) => (
            <button
              key={tenant.id}
              type="button"
              onClick={() => onSelect(tenant)}
              className="flex w-full items-center gap-3 rounded-lg border border-[#e5e7eb] p-2 text-left transition hover:border-[#00634f] hover:bg-[#f4faf8]"
            >

              {/* User Icon */}
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e5e7eb] sm:h-9 sm:w-9">
                <Icon
                  src="/assets/user-icon.svg"
                  alt="User"
                  className="h-3 w-4"
                />
              </div>

              {/* Tenant Details */}
              <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-[#00634f]">
                  {tenant.name}
                </p>
                 <span className="flex text-[9px] text-[#6b7280] sm:text-[10px]">
                  
                  
                  {tenant.room} •<Icon
                  src="/assets/rupee-icon.svg"
                  alt="rupee"
                  className="h-3 w-1.5 text-[#6b7280]"
                />{tenant.rent}/mo
                
                </span>
              </div>
            </button>
          ))}

          {/* No Results */}
          {filteredTenants.length === 0 && (
            <p className="py-6 text-center text-xs text-[#6b7280]">
              No tenants found
            </p>
          )}
        </div>

        
        <div className="shrink-0 border-t border-[#e5e7eb] bg-white p-3">
          <Button
            text="+ Add New Tenant"
            type="button"
            variant="outline"
            className="h-9 text-xs"
          />
        </div>
      </div>
    </div>
  );
}