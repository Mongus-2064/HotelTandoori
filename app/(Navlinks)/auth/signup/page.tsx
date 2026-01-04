"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      const response = await fetch("/api/Signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const res = await response.json();

      if (!response.ok) {
        return toast.error(res.msg || "Error while signing up");
      }

      toast.success(res.msg || "Account created successfully");
      setTimeout(() => router.push("/auth/login"), 2000);
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Internal Server Error");
    }
  };

  return (
    <main className="pt-20 min-h-screen bg-black flex justify-center items-center">
      <section className="bg-[linear-gradient(to_right,#111,#222,#333,#444)] px-8 w-md shadow-md rounded-md shadow-white h-auto flex flex-col justify-center py-5">

        {/* HEADER */}
        <p className="text-white text-[42px] font-bold text-center">
          Join <span className="bg-red-500 text-white px-2 rounded-md">Tandoori</span>
        </p>
        <p className="text-gray-300 text-center pt-2">
          Create your account & taste the tradition
        </p>

        {/* FORM */}
        <form onSubmit={handleSignup} className="flex gap-6 flex-col pt-8">

          {/* USERNAME */}
          <div className="flex flex-col gap-2">
            <label className="text-white">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g: tandoori_lover"
              className="bg-transparent border-b border-white text-white outline-none placeholder:text-gray-400"
              required
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-2">
            <label className="text-white">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g: example@gmail.com"
              className="bg-transparent border-b border-white text-white outline-none placeholder:text-gray-400"
              required
            />
          </div>

          {/* PASSWORD */}
          <div className="flex flex-col gap-2 relative">
            <label className="text-white">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="bg-transparent border-b border-white text-white outline-none placeholder:text-gray-400 pr-10"
              required
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter your password"
              className="bg-transparent border-b border-white text-white outline-none placeholder:text-gray-400 pr-10"
              required
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
            type="submit"
            className="bg-red-500 text-white rounded-md p-3 mt-4 hover:scale-105 transition-transform"
          >
            Create Account
          </button>

          {/* FOOTER LINK */}
          <p className="text-gray-300 text-sm text-center">
            Already have an account?{" "}
            <span
              className="text-red-500 cursor-pointer hover:underline"
              onClick={() => router.push("/auth/login")}
            >
              Login
            </span>
          </p>
        </form>
      </section>
    </main>
  );
}
