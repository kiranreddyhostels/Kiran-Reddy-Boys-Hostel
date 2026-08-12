"use client";

import Button from "@/components/Button/Button";
import { useCounter } from "@/hooks/useCounter";
import TestComponent from "@/components/TestComponent";

export default function Home() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <>
    <TestComponent/>
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">
        Kiran Reddy Boys Hostel
      </h1>

      <p className="text-2xl">
        Count: {count}
      </p>

      <div className="flex gap-3">
        <Button label="-" onClick={decrement} />
        <Button label="Reset" onClick={reset} />
        <Button label="+" onClick={increment} />
      </div>
    </main>
    </>
  );
}