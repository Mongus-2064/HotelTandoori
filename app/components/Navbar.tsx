"use client"

import Image from "next/image"
import React, { useEffect, useState } from "react"
import logo from "@/images/Logo.png"
import Link from "next/link"
import {
  Contact,
  Home,
  InfoIcon,
  Menu,
  ShoppingBag,
  SquareX,
} from "lucide-react"
import Mobilemenu from "./Hamburgermenu"
import { usePathname, useRouter } from "next/navigation"
import { toast } from "react-toastify"

export default function Navbar() {
  const [isopen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [showusername, setShowUserName] = useState<string>("")
  const router = useRouter()

  const handlelogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    setShowUserName("")
    toast.success("Logged out")
    router.push("/")
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    const username = localStorage.getItem("username")
    if (token && username) setShowUserName(username)
  }, [pathname])

  const navlinks = [
    { label: "Home", href: "/", id: "1", icon: Home },
    { label: "Menu", href: "/Menu", id: "2", icon: Menu },
    { label: "About", href: "/About", id: "3", icon: InfoIcon },
    { label: "Contact", href: "/Contact", id: "4", icon: Contact },
    { label: "Cart", href: "/cart", id: "5", icon: ShoppingBag },
  ]

  return (
    <main
      className={`${
        pathname === "/cart" ? "bg-black" : "bg-black/80"
      } fixed z-50 w-full border-b border-white backdrop-blur-lg`}
    >
      {/* TOP BAR */}
      <section className="flex items-center justify-between w-full px-4 lg:px-8 h-20">
        {/* LOGO */}
        <div className="relative w-28 lg:w-32 h-full flex items-center">
          <Image src={logo} alt="logo" fill className="object-cover" />
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex gap-4 text-gray-400 text-[18px]">
          {navlinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="hover:bg-red-600 flex items-center gap-2 p-2 rounded-md hover:text-white hover:scale-105 transition"
            >
              <link.icon size={14} className="text-white" />
              {link.label}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE (AUTH / HAMBURGER) */}
        <div className="flex items-center gap-4">
          {/* DESKTOP AUTH */}
          {showusername ? (
            <div className="hidden lg:flex items-center gap-3">
              <p className="bg-gray-800 px-6 py-2 text-white rounded-2xl text-sm">
                Hello {showusername}
              </p>
              <button
                onClick={handlelogout}
                className="px-6 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden lg:flex gap-3">
              <Link
                href="/auth/login"
                className="border px-6 py-2 text-white rounded-md hover:bg-white hover:text-black transition"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="border border-red-500 bg-red-600 px-6 py-2 text-white rounded-md hover:bg-transparent hover:text-red-500 transition"
              >
                Signup
              </Link>
            </div>
          )}

          {/* HAMBURGER */}
          <button
            onClick={() => setIsOpen(!isopen)}
            className="lg:hidden text-white"
          >
            {isopen ? <SquareX size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </section>

      {/* MOBILE MENU */}
      {isopen && (
        <div className="lg:hidden w-full flex justify-center">
          <Mobilemenu />
        </div>
      )}
    </main>
  )
}
