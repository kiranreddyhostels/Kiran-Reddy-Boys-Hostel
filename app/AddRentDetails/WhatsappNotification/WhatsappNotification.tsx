"use client";
import Icon from "@/components/Icons/Icons";

interface WhatsAppNotificationProps{
    enabled: boolean;
    onChange:(value:boolean)=>void;
}

export default function WhatsaapNotification({enabled,onChange}:WhatsAppNotificationProps){
    return(
        <section className="mx-4 mb-3">
           <div className="flex items-center justify-between rounded-md border border-[#e5e7eb] bg-white px-3 py-2.5 sm:px-4"><div className="flex items-center gap-2">
            <span className="text-base text-[#25D366]"> <Icon src="/assets/Whatsapp-icon.svg" alt="Whatsapp" /></span>

            <div> <p className="text=[9px] font-semibold text-[#202124] sm-text-xs ">WhatsApp Notification</p>
            <p className="text-[7px] text-[#6b7280] sm:text-[10px]">Send receipt automatically</p>
            </div>
           </div>

           <button type="button"  onClick={() => onChange(!enabled)} className={`flex h-4 w-4 items-center justify-center rounded-sm text-[px]text-white sm:h-5 sm:w-5${ enabled ? "bg-[#00634f]" : "bg-[#d1d5db]"}`}> {enabled && <span className="text-base bg-[#00634f]"> <Icon src="/assets/selector-icon.svg" alt="selector" /></span>}</button>
           </div>

           
        </section>
    );
}