import React from "react";
import NextLink from "next/link";
import { Home, Search, Library, Gem } from "lucide-react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav className=" bg-gradient-to-b bg-no-repeat bg-neutral-950 w-full py-2 pb-4 hidden max-[1200px]:block">
      <ul className="flex items-center justify-between gap-1 w-full max-w-[500px] m-auto px-6 max-[600px]:px-2 ">
        <li>
          <NextLink
            className="group flex min-w-[80px] flex-col gap-1 justify-center items-center transition-all text-neutral-600 hover:text-white"
            href="/"
          >
            <Home size={24} />
            <span className="text-neutral-600 transition-all group-hover:text-white text-[12px]">Início</span>
          </NextLink>
        </li>
        <li>
          <NextLink
            className="group flex min-w-[80px] flex-col gap-1 justify-center items-center transition-all text-neutral-600 hover:text-white"
            href="/"
          >
            <Search size={24} />
            <span className="text-neutral-600 transition-all group-hover:text-white text-[12px]">Buscar</span>
          </NextLink>
        </li>
        <li>
          <NextLink
            className="group flex min-w-[80px] flex-col gap-1 justify-center items-center transition-all text-neutral-600 hover:text-white"
            href="/"
          >
            <Library size={24} />
            <span className="text-neutral-600 transition-all group-hover:text-white text-[12px]">Sua Biblioteca</span>
          </NextLink>
        </li>
        <li>
          <NextLink
            className="group flex min-w-[80px] flex-col gap-1 justify-center items-center transition-all text-neutral-600 hover:text-white"
            href="/"
          >
            <Gem size={24} />
            <span className="text-neutral-600 transition-all group-hover:text-white text-[12px]">Premium</span>
          </NextLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
