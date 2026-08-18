import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  loading?: boolean;
  loadingText?: string;
}

export default function Button({
  text,
  loading = false,
  loadingText = "Loading...",
  disabled = false,
  type = "button",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`h-12 w-full rounded bg-[#00634f] text-base font-medium text-white shadow-sm transition hover:bg-[#005442] focus:outline-none focus:ring-2 focus:ring-[#00634f] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
      {...props}
    >
      {loading ? loadingText : text}
    </button>
  );
}
