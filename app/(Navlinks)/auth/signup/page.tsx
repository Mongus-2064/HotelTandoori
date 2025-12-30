"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function page() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="pt-20 min-h-screen bg-black flex justify-center items-center">
      <section className="bg-[linear-gradient(to_right,#111,#222,#333,#444)] px-8 w-md shadow-md rounded-md shadow-white h-auto flex flex-col justify-center">

        {/* HEADER */}
        <p className="text-white text-[42px] font-bold text-center">
          Join <span className="bg-red-500 text-white px-2 rounded-md">Tandoori</span>
        </p>

        <p className="text-gray-300 text-center pt-2">
          Create your account & taste the tradition
        </p>

        {/* FORM */}
        <form className="flex gap-6 flex-col pt-8">

          {/* USERNAME */}
          <div className="flex flex-col gap-2">
            <label className="text-white">Username</label>
            <input
              type="text"
              placeholder="e.g: tandoori_lover"
              className="bg-transparent border-b border-white text-white outline-none placeholder:text-gray-400"
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-2">
            <label className="text-white">Email</label>
            <input
              type="email"
              placeholder="e.g: example@gmail.com"
              className="bg-transparent border-b border-white text-white outline-none placeholder:text-gray-400"
            />
          </div>

          {/* PASSWORD */}
          <div className="flex flex-col gap-2 relative">
            <label className="text-white">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              className="bg-transparent border-b border-white text-white outline-none placeholder:text-gray-400 pr-10"
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-9 cursor-pointer text-gray-300 hover:text-red-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="flex flex-col gap-2 relative">
            <label className="text-white">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter your password"
              className="bg-transparent border-b border-white text-white outline-none placeholder:text-gray-400 pr-10"
            />
            <div
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-2 top-9 cursor-pointer text-gray-300 hover:text-red-500"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
          </div>

          {/* BUTTON */}
          <button
            className="bg-red-500 text-white rounded-md p-3 mt-4 hover:scale-105 transition-transform"
          >
            Create Account
          </button>

          {/* FOOTER LINK */}
          <p className="text-gray-300 text-sm text-center">
            Already have an account?{" "}
            <span className="text-red-500 cursor-pointer hover:underline">
              Login
            </span>
          </p>
        </form>
      </section>
    </main>
  );
}
