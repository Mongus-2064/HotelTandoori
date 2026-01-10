"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Circleloader from "@/Loaders/Circleloader";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isloggedin , setIsLoggedIn] = useState<boolean>(false)

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const res = await response.json();

      if (!response.ok) {
        setIsLoggedIn(false)

        return toast.error(res.msg);
      }

      localStorage.setItem("token", res.token);
      localStorage.setItem("username", res.user.username);
      toast.success(res.msg);
      setIsLoggedIn(false);

      router.push("/");
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Internal Server Error");
      setIsLoggedIn(false);

    }
  };

  return (
    <main className="pt-20 min-h-screen bg-black flex justify-center items-center">
      <section className="bg-[linear-gradient(to_right,#111,#222,#333,#444)] px-8 w-md shadow-md rounded-md shadow-white h-auto flex flex-col justify-center py-5">

        {/* HEADER */}
        <p className="text-white text-[42px] font-bold text-center">
          Login to <span className="bg-red-500 text-white px-2 rounded-md">Tandoori</span>
        </p>
        <p className="text-gray-300 text-center pt-2">
          Taste the tradition, one login away
        </p>

        {/* FORM */}
        <form onSubmit={handleLogin} className="flex gap-6 flex-col pt-8">

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
              placeholder="Enter your password"
              className="bg-transparent border-b border-white text-white outline-none placeholder:text-gray-400 pr-10"
              required
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-7 hover:text-red-500 hover:cursor-pointer"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </div>
          </div>

          {/* OPTIONS */}
          <div className="flex justify-between text-sm text-gray-300">
            <p className="hover:text-red-500 cursor-pointer">Forgot password?</p>
            <p className="hover:text-red-500 cursor-pointer">Create account</p>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            onClick={()=> setIsLoggedIn(true)}
            className="bg-red-500 flex justify-center text-white rounded-md p-3 mt-4 hover:scale-105 transition-transform hover:cursor-pointer" 
          >
            {isloggedin ? <Circleloader/> : <p className="py-1">Login</p>}
          </button>
        </form>
      </section>
    </main>
  );
}
