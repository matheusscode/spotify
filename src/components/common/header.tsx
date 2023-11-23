"use client";

import React from "react";
import { Bell, ChevronLeft, ChevronRight, Search, Users2 } from "lucide-react";
import NextLink from "next/link";
import Tooltip from "../ui/tooltip";
import NextImage from "next/image";
import { usePathname } from "next/navigation";
import Input from "../ui/input";

interface IHeaderProps {
  scrolling: boolean;
}

const Header: React.FC<IHeaderProps> = ({ scrolling }) => {
  const currentRoute = usePathname();

  const searchPageStyled = "bg-neutral-900 p-6 gap-2 ";

  return (
    <header
      className={`sticky top-0 z-10 flex transition-all w-full justify-between gap-2 pt-8  px-6 ${
        currentRoute === "/search"
          ? searchPageStyled
          : `${scrolling ? "bg-neutral-950 py-4 pt-4" : "bg-transparent p-6"}`
      } `}
    >
      <div className="flex gap-2 items-center">
        <div className="rounded-full cursor-pointer w-[30px] h-[30px] flex items-center justify-center bg-neutral-950 transition-all text-neutral-300 hover:text-white">
          <ChevronLeft />
        </div>
        <div className="rounded-full cursor-pointer w-[30px] h-[30px] flex items-center justify-center bg-neutral-950 transition-all text-neutral-300 hover:text-white">
          <ChevronRight />
        </div>
        {currentRoute === "/search" && (
          <div className="w-[300px]">
            <Input
            className="bg-zinc-800 pl-2 py-3"
              iconLeft={
                <Search
                  size={18}
                  className="transition-all  hover:text-white text-neutral-300"
                />
              }
              type="text"
              placeholder="O que você quer ouvir?"
            />
          </div>
        )}
      </div>

      <div className="flex gap-2 items-center">
        <button className="bg-white rounded-full text-xs font-bold p-2 px-3 text-neutral-950 hover:scale-105">
          Ver planos Premium
        </button>
        <Tooltip
          content="Novidades"
          classContent={` ${scrolling ? "top-8 bottom-0" : "bottom-8"}`}
        >
          <NextLink
            className="bg-neutral-950 p-1 rounded-full  transition-all hover:text-neutral-200 text-neutral-500"
            href="/"
          >
            <Bell size={20} />
          </NextLink>
        </Tooltip>

        <Tooltip
          content="Atividade dos amigos"
          classContent={` ${scrolling ? "top-8 bottom-0" : "bottom-8"}`}
        >
          <NextLink
            className="bg-neutral-950 p-1 rounded-full  transition-all hover:text-neutral-200 text-neutral-500"
            href="/"
          >
            <Users2 size={20} />
          </NextLink>
        </Tooltip>

        <Tooltip
          content="matheusscode"
          classContent={` ${scrolling ? "top-8 bottom-0" : "bottom-8"}`}
        >
          <NextLink
            className="bg-neutral-950  w-[30px] h-[30px] transition-all overflow-hidden rounded-full hover:text-neutral-200 text-neutral-500"
            href="/"
          >
            <NextImage
              src="https://avatars.githubusercontent.com/u/99546472?v=4"
              alt="Avatar."
              width={100}
              height={100}
              className="w-full h-full"
            />
          </NextLink>
        </Tooltip>
      </div>
    </header>
  );
};

export default Header;
