import PreperationProcess from "@/app/components/recipe/PreperationProcess";
import RecipeImage from "@/app/components/recipe/RecipeImage";
import RecipeInfo from "@/app/components/recipe/RecipeInfo";
import { getRecipeById } from "@/DB/queries";
import { notFound } from "next/navigation";

export async function generateMetadata({ params: { id } }) {
  generateMetadata;
  const recipe = await getRecipeById(id);
  const metadata = {
    title: recipe.name,
    description: recipe.description,
  };
  return metadata;
}

export default async function RecipePage({ params: { id } }) {
  const recipe = await getRecipeById(id);

  if (!recipe) return notFound();
  return (
    <>
      <section>
        <div className='grid grid-cols-12 container gap-8 justify-items-center'>
          <RecipeImage image={recipe.image} name={recipe.name} />
          <RecipeInfo recipe={recipe} />
        </div>
      </section>
      <PreperationProcess steps={recipe.steps} />
    </>
  );
}
