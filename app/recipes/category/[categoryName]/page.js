import MenuCard from "@/app/components/recipe/MenuCard";
import { getRecipesByCategory } from "@/DB/queries";
import { capitalizeWords } from "@/util/utli";

export default async function Home({ params: { categoryName } }) {
  const recipeCategory = decodeURIComponent(categoryName);

  const recipesByCat = await getRecipesByCategory({
    category: `${capitalizeWords(recipeCategory)}`,
  });

  return (
    <>
      <section className='container py-8'>
        <div>
          <h3 className='font-semibold text-xl capitalize'>{recipeCategory}</h3>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center'>
            {!recipesByCat.length > 0
              ? "No recipes found for the requested category"
              : recipesByCat.map((recipe) => (
                  <MenuCard key={recipe.id} menu={recipe} />
                ))}
          </div>
        </div>
      </section>
    </>
  );
}
