import { Play } from "lucide-react";
import NextImage from "next/image";
import NextLink from "next/link";
import React from "react";

interface CardProps {
  title?: string;
  content?: string;
  backdrop?: string;
  alt?: string;
}

const Card: React.FC<CardProps> = ({ alt, backdrop, content, title }) => {
  return (
    <NextLink href="/">
      <article className="group rounded-md max-[600px]:bg-transparent hover:bg-neutral-800 transition-all duration-200 overflow-hidden max-[600px]:p-2 max-[600px]:pb-1 p-3 max-[600px]:w-[160px] w-[180px] h-auto bg-neutral-900  shadow-md ">
        <div className="relative ">
          <NextImage
            className="w-full rounded-md"
            src="https://upload.wikimedia.org/wikipedia/pt/0/02/Camisa10_-Joga_Bola_At%C3%A9_na_Chuva.jpg"
            alt=""
            width={40}
            height={80}
          />
          <div className="absolute group-hover:opacity-100 group-hover:-translate-y-12 hover:bg-green-500 transition-all opacity-0  right-2 bg-green-400 text-neutral-900 p-1 rounded-full w-[40px] h-[40px] flex items-center justify-center">
            <Play />
          </div>
        </div>

        <div className="flex gap-1 my-4 flex-col">
          <h1 className="text-ellipsis max-[600px]:text-clip overflow-hidden whitespace-nowrap max-[600px]:whitespace-normal w-full font-bold text-neutral-100 max-[600px]:text-[0.8rem]  text-[1rem]">
            {title}Camisa 10 joga bola até na chuva
          </h1>
          <span className="max-[600px]:text-[0.7rem] text-[0.8rem] font-medium text-neutral-400">
            {content}Charlie Brown Jr.
          </span>
        </div>
      </article>
    </NextLink>
  );
};

export default Card;
