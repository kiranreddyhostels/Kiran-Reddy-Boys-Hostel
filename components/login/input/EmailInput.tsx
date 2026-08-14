interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function EmailInput({
  value,
  onChange,
  error,
}: EmailInputProps) {
  return (
    <div>
      <label
        htmlFor="username"
        className="mb-2 block text-[10px] font-mono font-medium tracking-widest text-gray-700"
      >
        EMAIL OR USERNAME
      </label>

      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20 21a8 8 0 0 0-16 0" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </span>

        <input
          id="username"
          name="username"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="name@hostel.com"
          autoComplete="username"
          className="h-9 w-full rounded border border-gray-300 bg-white pl-8 pr-3 text-[12px] text-gray-700 outline-none placeholder:text-gray-300 focus:border-[#00695c] focus:ring-1 focus:ring-[#00695c]"
        />
      </div>

      {error && (
        <p role="alert" className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}