import Category from "@/src/components/ui/category";
import { categories_data } from "@/src/data/categories";

export default function Search() {
  return (
    <main
      id="page"
      className="w-full h-full flex flex-col gap-4  bg-neutral-900"
    >
      <div className="mt-4 mb-40 h-full px-6">
        <h1 className="font-bold text-[1.4rem] text-neutral-50">
          Navegar por todas as seções
        </h1>
        <div className="grid max-[800px]:grid-cols-3 max-[1370px]:grid-cols-4 max-[1550px]:grid-cols-5 max-[1650px]:grid-cols-6 grid-cols-7 gap-2 mt-4 ">
          {categories_data.map((categorie) => (
            <Category key={categorie.id} categorie={categorie} />
          ))}
        </div>
      </div>
    </main>
  );
}
8;
