"use client";

import { FormEvent, useState } from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import LoginButton from "./LoginButton";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setUsernameError("");
    setPasswordError("");
    setLoginError("");

    let valid = true;

    if (!username.trim()) {
      setUsernameError("Email or username is required");
      valid = false;
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      valid = false;
    }

    if (!valid) {
      return;
    }

    try {
      setLoading(true);

      /*
       * Connect your existing login API here.
       *
       * Example:
       *
       * const response = await fetch("/login", {
       *   method: "POST",
       *   headers: {
       *     "Content-Type": "application/json",
       *   },
       *   body: JSON.stringify({
       *     username,
       *     password,
       *   }),
       * });
       */

      console.log({
        username,
        password,
      });

    } catch (error) {
      setLoginError("Unable to login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 rounded-md border border-gray-200 bg-white p-3 shadow-sm sm:p-5">
      {loginError && (
        <div
          role="alert"
          className="mb-4 rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600"
        >
          {loginError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <EmailInput
          value={username}
          onChange={setUsername}
          error={usernameError}
        />

        <div>
          <PasswordInput
            value={password}
            onChange={setPassword}
            error={passwordError}
          />

          {/* Forgot Password */}
          <div className="mt-4 text-right">
            <a
              href="/forgot-password"
              className="font-mono text-[10px] tracking-wider text-gray-700 hover:text-[#00634f] hover:underline focus:outline-none focus:ring-2 focus:ring-[#00634f]"
            >
              Forgot Password?
            </a>
          </div>
        </div>

        <LoginButton loading={loading} />
      </form>
    </div>
  );
}