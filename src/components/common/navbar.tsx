import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <header className="sticy top-0 flex w-full justify-between gap-2 bg-transparent p-6 px-4">
      <div className="flex gap-2">
        <div className="rounded-full w-[30px] h-[30px] flex items-center justify-center bg-neutral-800 transition-all text-neutral-300 hover:text-white">
          <ChevronLeft />
        </div>
        <div className="rounded-full w-[30px] h-[30px] flex items-center justify-center bg-neutral-800 transition-all text-neutral-300 hover:text-white">
          <ChevronRight />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
