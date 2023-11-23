import NextLink from "next/link";
import React from "react";

interface CarouselProps {
  children: React.ReactNode;
  title: string;
}

const Carousel: React.FC<CarouselProps> = ({ children, title }) => {
  return (
    <div className="w-full h-auto px-4 scroll-hidden  overflow-hidden overflow-x-scroll flex flex-col gap-2 ">
      <div className="flex justify-between items-center ">
        <h1 className="font-bold text-xl text-neutral-50">{title}</h1>
        <NextLink
          href="/"
          className="text-neutral-400 text-xs font-bold hover:underline"
        >
          Mostrar tudo
        </NextLink>
      </div>
      <div className="flex justify-between gap-1 py-2">{children}</div>
    </div>
  );
};

export default Carousel;
