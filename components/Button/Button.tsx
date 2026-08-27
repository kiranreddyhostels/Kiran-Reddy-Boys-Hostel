import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  loading?: boolean;
  loadingText?: string;
  variant?: "default" | "outline";
}
const buttonVariants={
  default: "bg-[#00634f] text-white hover:bg-[#005542]",
  outline: "border border-[#00634f] bg-white text-[#00634f] hover:bg-[#f0f8f6]",
}

export default function Button({
  text,
  loading = false,
  loadingText = "Loading...",
  disabled = false,
  type = "button",
  className = "",
  variant="default",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`h-10 w-full rounded-lg text-sm font-semibold shadow-none transition focus:outline-none focus:ring-2 focus:ring-[#00634f] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${buttonVariants[variant]}${className}`}
      {...props}
    >
      {loading ? loadingText : text}
    </button>
  );
}
