"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = () => {
  const pathName = usePathname();

  return (
    <>
      <Link
        href="/"
        className={`flex gap-4 items-center py-3 px-3 text-base rounded-md leading-3 ${
          pathName === "/" ? "activeLink" : ""
        }`}
      >
        <Image src="/home.svg" alt="" width={22} height={22} /> Home
      </Link>
      <Link
        href="/history"
        className={`flex gap-4 items-center py-3 px-3 text-bas}e rounded-md leading-3 ${
          pathName === "/history" ? "activeLink" : ""
        }`}
      >
        <Image src="/history.svg" alt="" width={22} height={22} /> History
      </Link>
    </>
  );
};

export default NavLinks;
