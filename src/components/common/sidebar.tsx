import React from "react";
import { Home, Search, Library, Plus, ArrowRight, List } from "lucide-react";
import Tooltip from "../ui/tooltip";
import NextImage from "next/image";
import Badge from "../ui/badge";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = ({}) => {
  return (
    <aside className="w-96 h-full  bg-[#141414]">
      <nav className="flex gap-6 p-6 px-4 flex-col border-b-8 border-solid border-neutral-950">
        <a
          className="flex gap-6 text-sm transition-all hover:text-white text-neutral-300 font-medium items-center"
          href="/"
        >
          <Home />
          <strong>Início</strong>{" "}
        </a>
        <a
          className="flex gap-6 text-sm transition-all hover:text-white text-neutral-300 font-medium items-center"
          href="/"
        >
          <Search />
          <strong>Buscar</strong>{" "}
        </a>
      </nav>

      <div className="flex items-center justify-between p-6 px-4">
        <Tooltip
          className="flex gap-2 items-center group"
          content="Ocultar sua biblioteca"
        >
          <Library className="text-neutral-400 group-hover:text-white" />
          <strong className="text-sm group-hover:text-white text-neutral-400 font-medium">
            Sua Biblioteca
          </strong>
        </Tooltip>

        <div className="flex gap-4 items-center">
          <Tooltip content="Criar playlist ou pasta">
            <Plus
              size={22}
              className="text-neutral-400 hover:text-neutral-100"
            />
          </Tooltip>

          <Tooltip content="Mostrar mais">
            <ArrowRight
              size={22}
              className="text-neutral-400 hover:text-neutral-100"
            />
          </Tooltip>
        </div>
      </div>
      <div className="flex gap-1 px-4">
        <Badge content="Artista" />
      </div>
      <div className="flex items-center justify-between p-6 px-4 ">
        <Search
          size={18}
          className="transition-all hover:text-white text-neutral-300"
        />

        <div className="flex items-center gap-2 group">
          <strong className="transition-all group-hover:text-white text-xs font-medium text-neutral-400">
            Recentes
          </strong>
          <List
            size={18}
            className="transition-all group-hover:text-white text-neutral-400"
          />
        </div>
      </div>

      <div className="flex w-full flex-col p-6 px-2">
        <ul>
          <li className="hover:bg-neutral-800 flex gap-2 p-2 transition-all rounded-md cursor-pointer">
            <NextImage
              src="data:image/png;base64,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"
              alt=""
              className="rounded-full"
              width={38}
              height={38}
            />

            <div className="flex flex-col gap-[-2px]">
              <h1 className="text-sm font-medium ">Charlie Brown Jr.</h1>
              <span className="text-xs font-medium text-neutral-500">
                Artista
              </span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
