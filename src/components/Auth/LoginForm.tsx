// src/components/Auth/LoginForm.tsx
"use client";

import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="space-y-5">
      <div>
        <label htmlFor="email" className="block text-sm font-medium">Email address</label>
        <input
          type="email"
          id="email"
          className="mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium">Password</label>
        <input
          type="password"
          id="password"
          className="mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center space-x-2 text-sm">
          <input type="checkbox" className="rounded border-gray-300" />
          <span>Remember me</span>
        </label>
        <a href="#" className="text-sm text-indigo-600 hover:underline">Forgot password?</a>
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
      >
        Sign in
      </button>

      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-gray-500">Or continue with</span>
        </div>
      </div>

      <div className="flex space-x-4">
        <button className="flex-1 flex items-center justify-center border border-gray-300 rounded-md py-2 hover:bg-gray-50">
          <img src="/google.svg" alt="Google" className="w-5 h-5 mr-2" />
          Google
        </button>
        <button className="flex-1 flex items-center justify-center border border-gray-300 rounded-md py-2 hover:bg-gray-50">
          <img src="/github.svg" alt="GitHub" className="w-5 h-5 mr-2" />
          GitHub
        </button>
      </div>
    </form>
  );
}
