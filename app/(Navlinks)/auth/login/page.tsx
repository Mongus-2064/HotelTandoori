"use client";

import React, { useState } from "react";
import { Eye, EyeIcon, EyeOff } from "lucide-react";

export default function page() {

  const [showpassword , setShowSetPassword] = useState(false);

  return (
    <main className="pt-20  min-h-screen bg-black flex justify-center items-center">
      <section className="bg-[linear-gradient(to_right,#111,#222,#333,#444)] px-8 w-md shadow-md rounded-md shadow-white h-auto flex flex-col justify-center py-5">

        {/* HEADER */}
        <p className="text-white text-[42px] font-bold text-center">
          Login to <span className="bg-red-500 text-white px-2 rounded-md">Tandoori</span>
        </p>

        <p className="text-gray-300 text-center pt-2">
          Taste the tradition, one login away
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
              type={showpassword ? "text" : "password"}
              placeholder="Enter your password"
              className="bg-transparent border-b border-white text-white outline-none placeholder:text-gray-400 pr-10"
            />

            {/* EYE ICON */}

          <div
          onClick={()=> setShowSetPassword(!showpassword)}
          className="absolute right-2 top-7 hover:text-red-500 hover:cursor-pointer"
          >
          {showpassword  ? <EyeOff/> : <EyeIcon/>}

          </div>

          </div>

          {/* OPTIONS */}
          <div className="flex justify-between text-sm text-gray-300">
            <p className="hover:text-red-500 cursor-pointer">Forgot password?</p>
            <p className="hover:text-red-500 cursor-pointer">Create account</p>
          </div>

          {/* BUTTON */}
          <button
            className="bg-red-500 text-white rounded-md p-3 mt-4 hover:scale-105 transition-transform"
          >
            Login
          </button>
        </form>
      </section>
    </main>
  );
}
