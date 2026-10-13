"use client";
import { useRouter } from "next/navigation";
export function useNavigation(){
    const router = useRouter();

    const handleCancel=()=>{
        router.back();
    };

    const goToAddRoomSuccess=()=>{
        router.push("/AddRoom/Success")
    };
     const goToAddExpenseSuccess=()=>{
        router.push("/AddExpense/Success")
    };
    
    return {
    handleCancel,
    goToAddRoomSuccess,
    goToAddExpenseSuccess,
  };
}