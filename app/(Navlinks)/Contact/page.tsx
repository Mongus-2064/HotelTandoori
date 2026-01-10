"use client";

import Image from "next/image";
import React, { useState } from "react";
import contact from "@/images/Contac.png";
import Footer from "@/app/components/Footer";
import { toast } from "react-toastify";
import Circleloader from "@/Loaders/Circleloader";


export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isloading , setIsLoading] = useState<boolean>(false)

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

   

    try {

       if (!email || !message) {
        setIsLoading(false);
      return toast.error("Please fill all fields");
    }

      const response = await fetch("/api/Contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });


      const res = await response.json();

      if (!response.ok) {
        return toast.error(res.msg || "Error while sending message");
      }

      toast.success(res.msg || "Message sent successfully");
      setEmail("");
      setMessage("");
      setIsLoading(false);
    } catch (error) {
      console.error("Contact error:", error);
      toast.error("Error sending message");
      setIsLoading(false);
    }
  };

  return (
    <main className="pt-25 gap-8 min-h-screen w-full bg-black flex flex-col justify-center items-center">
      <section className="bg-[linear-gradient(to_right,#111,#222,#333,#444)] px-3 lg:w-5xl shadow-md w-[90%] rounded-md shadow-white h-128 flex items-center lg:flex-row flex-col justify-between">

        {/* HEADER TEXT */}
        <section className="h-full w-[90%]">
          <p className="text-white lg:text-[50px] text-[20px] font-bold">
            How can we <span className="bg-red-500 text-white px-1 rounded-md">Assist</span> you?
          </p>

          {/* FORM */}
          <form onSubmit={handleSendMessage} className="flex gap-5 flex-col">

            {/* EMAIL INPUT */}
            <div className="flex flex-col lg:w-sm w-48 gap-2 pt-5">
              <label className="text-white">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g: berojgari@gmail.com"
                type="email"
                className="bg-transparent border-b text-white border-white outline-none"
                
              />
            </div>

            {/* MESSAGE INPUT */}
            <div className="flex flex-col lg:w-sm w-68 gap-2">
              <label className="text-white">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter Your Message...."
                className="bg-gray-700 rounded-md h-32 placeholder:text-white p-2 text-white"
                
              />
            </div>

            {/* SUBMIT BUTTON */}
            <div className="lg:w-sm pt-8 flex items-center justify-center">
              <button
                type="submit"
                onClick={()=> setIsLoading(true)}
                className="text-center bg-red-500 lg:w-full w-48 hover:cursor-pointer hover:scale-105 transition-transform rounded-md p-2 flex justify-center text-white"
              >
                {isloading ? <Circleloader/> : <p>Send Message</p>}
              </button>
            </div>
          </form>
        </section>

        {/* IMAGE */}
        <section>
          <div className="w-105 hidden lg:inline-block h-96 relative">
            <Image
              src={contact}
              alt="contact-image"
              fill
              className="object-cover object-center"
            />
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}
