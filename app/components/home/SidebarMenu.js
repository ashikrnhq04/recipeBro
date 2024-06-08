import { getRecipes } from "@/DB/queries";
import Link from "next/link";

export default async function SidebarMenu() {
  const recipes = await getRecipes();

  const recipesCategory = recipes.map((item) => item.category);

  const extractUniqueCategory = [...new Set(recipesCategory)];
  return (
    <div className='col-span-12 md:col-span-3'>
      <h3
        className='font-bold tex
            t-xl'>
        Recipes
      </h3>
      <ul className='pl-2 my-6 space-y-4 text-gray-500 text-sm'>
        {extractUniqueCategory.map((cat, index) => (
          <li key={index}>
            <Link href={`/recipes/category/${encodeURIComponent(cat)}`}>
              {cat}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
