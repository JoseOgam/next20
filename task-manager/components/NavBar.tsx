"use client";

import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="./next.svg"
            alt="logo"
            height={118}
            width={100}
            className=" object-contain"
          />
        </Link>

        <button>click</button>
      </nav>
    </header>
  );
};

export default NavBar;
