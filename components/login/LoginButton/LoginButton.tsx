interface LoginButtonProps {
  loading: boolean;
}

export default function LoginButton({
  loading,
}: LoginButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="h-12 w-full rounded bg-[#00634f] text-base font-medium text-white shadow-sm transition hover:bg-[#005442] focus:outline-none focus:ring-2 focus:ring-[#00634f] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? "Logging in..." : "Login"}
    </button>
  );
}