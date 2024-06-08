import { getRecipes } from "@/DB/queries";
import MenuCard from "./MenuCard";

export default async function MenuList() {
  const recipes = await getRecipes();

  return (
    <div className='col-span-12 md:col-span-9'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center'>
        {!recipes.length > 0
          ? "Not recipes found!"
          : recipes.map((menu) => <MenuCard key={menu.id} menu={menu} />)}
      </div>
    </div>
  );
}
