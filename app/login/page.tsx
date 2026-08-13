import LoginForm from "@/components/login/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#f5f7f8] flex flex-col">
      <div className="flex flex-1 items-start justify-center px-4 pt-0 sm:items-center sm:pt-8 mt-24 sm:mt-0">
        <div className="w-full max-w-[284px] sm:max-w-md">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="flex h-[82px] w-[82px] items-center justify-center overflow-hidden rounded-sm bg-[#004d40]">
              <img
                src="/logo.png"
                alt="Kiran Reddy Hostel"
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          {/* Subtitle */}
          <p className="mt-3 text-center text-[13px] text-gray-600">
            Sign in to manage your hostel.
          </p>

          <LoginForm />

          {/* Contact Admin */}
          <p className="mt-6 text-center text-[13px] text-gray-700">
            Don't have an account?{" "}
            <a
              href="/contact-admin"
              className="text-[#d84315] hover:underline"
            >
              Contact Admin
            </a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-5">
        <div className="flex justify-center gap-7 text-[11px] font-mono tracking-wider text-gray-500">
          <a href="/privacy-policy" className="hover:text-gray-800">
            Privacy Policy
          </a>

          <a href="/support" className="hover:text-gray-800">
            Support
          </a>
        </div>
      </footer>
    </main>
  );
}