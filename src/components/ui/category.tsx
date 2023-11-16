import { ICategoriesProps } from "@/src/types";
import NextLink from "next/link";
import React from "react";

interface ICategoryProps {
  categorie: Omit<ICategoriesProps, "id">;
}

const Category: React.FC<ICategoryProps> = ({ categorie }) => {
  const { alt, color, src, title } = categorie;

  return (
    <NextLink href="/">
      <article
        style={{ background: color }}
        className={`w-full p-4 h-[240px] shadow-md rounded-md`}
      >
        <h1 className="text-2xl text-neutral-200 font-bold">{title}</h1>
      </article>
    </NextLink>
  );
};

export default Category;
