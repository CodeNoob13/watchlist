"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { useParams } from "next/navigation";

const Sidebar = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="w-[350px] bg-black min-h-screen flex flex-col pt-5 pr-8 pl-[30px]">
      <div className="flex flex-col border-b-[#D9D9D9] border-b-[0.5px] border-opacity-30 pb-4 mb-4">
        <div className="flex gap-7 flex-col">
          {/* Logo */}
          <Image src="/logo.svg" height={40} width={200} alt="" />
          <div>
            <form className="relative">
              <input
                className="border-[#D9D9D9] border-[1px] border-opacity-30 w-full rounded-md h-9 bg-transparent pl-12 placeholder-[#D9D9D9] placeholder-opacity-30"
                type="text"
                placeholder="Search"
                aria-label="Search movie"
              />
              <Image
                src="/searchIcon.svg"
                height={21}
                width={21}
                alt=""
                className="absolute top-1/2 -translate-y-1/2 left-3"
              />
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-8 mb-8">
          <Link
            href="/"
            className="flex gap-4 items-center py-3 px-3 text-base bg-[#1F1F1F] rounded-md leading-3"
          >
            <Image src="/home.svg" alt="" width={22} height={22} /> Home
          </Link>
          <Link
            href="/history"
            className="flex gap-4 items-center py-3 px-3 text-base rounded-md leading-3"
          >
            <Image src="/history.svg" alt="" width={22} height={22} /> History
          </Link>
        </div>
        <Button>+ Create watchlist</Button>
      </div>
      <h2 className="text-xl text-[#D9D9D9] text-opacity-60">My Lists</h2>
    </div>
  );
};

export default Sidebar;
