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

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex h-24 w-full items-center justify-between px-5 lg:px-28">
      <h1 className=" text-3xl font-bold">
        <Link href="/">VILLA</Link>
      </h1>

      {/* large device */}
      <h2 className="hidden text-slate-800 lg:block">
        <Link href="/" className="duration-500 hover:text-orange-600">
          Home
        </Link>
      </h2>
      <h2 className="hidden text-slate-800 lg:block">
        <Link href="/properties" className="duration-500 hover:text-orange-600">
          Properties
        </Link>
      </h2>
      <h2 className="hidden text-slate-800 lg:block">
        <Link
          href="/property_details"
          className="duration-500 hover:text-orange-600"
        >
          Property Details
        </Link>
      </h2>
      <h2 className="hidden text-slate-800 lg:block">
        <Link href="/contact_us" className="duration-500 hover:text-orange-600">
          Contact Us
        </Link>
      </h2>
      <div className="group hidden h-fit w-fit rounded-full bg-black lg:flex">
        <div className="relative right-[1px] rounded-full bg-orange-600 p-3">
          <Image
            src="/images/calendar.png"
            alt="calendar"
            width={18}
            height={18}
          />
        </div>
        <p className="flex items-center px-3 text-white duration-500 group-hover:text-orange-600">
          Schedule a visit
        </p>
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
            <DropdownMenuItem className="flex justify-center">
              <h2 className="font-bold text-slate-800">
                <Link href="/">Home</Link>
              </h2>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="m-1 bg-slate-300" />

            <DropdownMenuItem className="flex justify-center">
              <h2 className="font-bold text-slate-800">
                <Link href="/">Properties</Link>
              </h2>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="m-1 bg-slate-300" />

            <DropdownMenuItem className="flex justify-center">
              <h2 className="font-bold text-slate-800">
                <Link href="/">Property Details</Link>
              </h2>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="m-1 bg-slate-300" />

            <DropdownMenuItem className="flex justify-center">
              <h2 className="font-bold text-slate-800">
                <Link href="/">Contact Us</Link>
              </h2>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
