"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/Navbar-menu"; // Ensure correct path and case
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }): JSX.Element {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 z-50 max-w-md mx-auto bg-gradient-to-r from-black to-gray-800 p-4 py-2 rounded-lg shadow-lg", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <Link href="/" onClick={() => setActive("Home")} className={`text-white text-lg font-semibold hover:text-gray-300 transition duration-300 ease-in-out ${active === "Home" ? "text-blue-400" : ""}`}>
            Home
          </Link>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <Link href="/courses" onClick={() => setActive("Our Courses")} className={`text-white text-lg font-semibold hover:text-gray-300 transition duration-300 ease-in-out ${active === "Our Courses" ? "text-blue-400" : ""}`}>
            Our Courses
          </Link>
          <div className="mt-2 space-y-2 text-sm text-gray-300">
            <Link href="/courses/content-marketing" className="hover:text-white">Content Marketing</Link>
            <Link href="/courses/ai" className="hover:text-white">Generative AI</Link>
            <Link href="/courses/nextjs" className="hover:text-white">Next.js</Link>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Contact">
          <Link href="/contact" onClick={() => setActive("Contact")} className={`text-white text-lg font-semibold hover:text-gray-300 transition duration-300 ease-in-out ${active === "Contact" ? "text-blue-400" : ""}`}>
            Contact
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
