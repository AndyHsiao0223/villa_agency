"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import ScheduleVisit from "./ScheduleVisit";
import { navbarData } from "@/public/contents";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="sticky top-0 z-10 flex h-24 w-full items-center justify-between bg-white px-5 lg:justify-center lg:space-x-12">
      <h1 className=" text-3xl font-bold">
        <Link href="/">VILLA</Link>
      </h1>

      {/* large device */}
      {navbarData.map((data, key) => (
        <h2
          key={key}
          className="hidden text-slate-800 duration-500 hover:text-orange-600 lg:block"
        >
          <Link href={data.href}>{data.text}</Link>
        </h2>
      ))}
      <div className="hidden lg:block">
        <ScheduleVisit />
      </div>

      {/* small device */}
      <div className="lg:hidden">
        <DropdownMenu onOpenChange={handleMenuOpen}>
          <DropdownMenuTrigger asChild>
            <button>
              {menuOpen ? (
                <Image
                  src="/images/close.svg"
                  alt="close"
                  width={40}
                  height={40}
                />
              ) : (
                <Image
                  src="/images/menu.svg"
                  alt="menu"
                  width={40}
                  height={40}
                />
              )}
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="relative top-6 w-[100vw] bg-white">
            {navbarData.map((data, key) => (
              <div key={key}>
                <DropdownMenuItem className="flex justify-center">
                  <h2 className="font-bold text-slate-800 duration-500 hover:text-orange-600">
                    <Link href={data.href}>{data.text}</Link>
                  </h2>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="m-1 bg-slate-300" />
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
