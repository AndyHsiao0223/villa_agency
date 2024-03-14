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
      <h2 className="hidden text-slate-800 duration-500 hover:text-orange-600 lg:block">
        <Link href="/">Home</Link>
      </h2>
      <h2 className="hidden text-slate-800 duration-500 hover:text-orange-600 lg:block">
        <Link href="/properties">Properties</Link>
      </h2>
      <h2 className="hidden text-slate-800 duration-500 hover:text-orange-600 lg:block">
        <Link href="/property_details">Property Details</Link>
      </h2>
      <h2 className="hidden text-slate-800 duration-500 hover:text-orange-600 lg:block">
        <Link href="/contact_us">Contact Us</Link>
      </h2>
      <ScheduleVisit hidden={true} />

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

          {/* DRY */}
          <DropdownMenuContent className="relative top-6 w-[100vw] bg-white">
            <DropdownMenuItem className="flex justify-center">
              <h2 className="font-bold text-slate-800 duration-500 hover:text-orange-600">
                <Link href="/">Home</Link>
              </h2>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="m-1 bg-slate-300" />

            <DropdownMenuItem className="flex justify-center">
              <h2 className="font-bold text-slate-800 duration-500 hover:text-orange-600">
                <Link href="/properties">Properties</Link>
              </h2>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="m-1 bg-slate-300" />

            <DropdownMenuItem className="flex justify-center">
              <h2 className="font-bold text-slate-800 duration-500 hover:text-orange-600">
                <Link href="/property_details">Property Details</Link>
              </h2>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="m-1 bg-slate-300" />

            <DropdownMenuItem className="flex justify-center">
              <h2 className="font-bold text-slate-800 duration-500 hover:text-orange-600">
                <Link href="/contact_us">Contact Us</Link>
              </h2>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
