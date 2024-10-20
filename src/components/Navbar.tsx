"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/Navbar-menu";  // Ensure the correct case
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }): JSX.Element {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-5 inset-x-0 max-w-md mx-auto z-50 bg-gradient-to-r from-black to-gray-800 rounded-lg p-0 py-0 ", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <Link href="/" onClick={() => setActive("Home")}>Home</Link>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <Link href="/courses" onClick={() => setActive("Our Courses")}>Our Courses</Link>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <Link href="/contact" onClick={() => setActive("Contact")}>Contact</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;