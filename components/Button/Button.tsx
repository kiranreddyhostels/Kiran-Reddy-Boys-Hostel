"use client";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  label,
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {label}
    </button>
  );
}