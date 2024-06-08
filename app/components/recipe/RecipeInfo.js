import { FaRegClock } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";

import SocialShare from "../SocialShare";
import Link from "next/link";
import RecipeFavorite from "./RecipeFavorite";

export default function RecipeInfo({ recipe }) {
  return (
    <div className='col-span-12 md:col-span-6 py-8 flex flex-col justify-center'>
      <h2 className='font-semibold text-4xl lg:w-8/12 leading-10'>
        {recipe.name}
      </h2>
      <p className='text-xs text-[#eb4a36] italic my-2 cursor-pointer'>
        <Link
          href={`/recipes/category/${encodeURIComponent(
            recipe.category.toLowerCase()
          )}`}>
          {recipe.category}
        </Link>
      </p>
      <p className='text-gray-600 text-sm my-6 leading-6'>
        {recipe.description}
      </p>

      <div className='flex gap-4 justify-center divide-x my-12'>
        <div className='flex-1 text-center'>
          <FaRegClock className='inline-block' />
          <h3 className='font-medium text-lg text-gray-700 mt-2'>Prep time</h3>
          <p className='text-gray-500 text-sm'>{recipe.activeTime}</p>
        </div>
        <div className='flex-1 text-center'>
          <GiSandsOfTime className='inline-block' />
          <h3 className='font-medium text-lg text-gray-700 mt-2'>Cook time</h3>
          <p className='text-gray-500 text-sm'>{recipe.totalTime}</p>
        </div>
        <div className='flex-1 text-center'>
          <FiUsers className='inline-block' />
          <h3 className='font-medium text-lg text-gray-700 mt-2'>Servings</h3>
          <p className='text-gray-500 text-sm'>{recipe.serves}</p>
        </div>
      </div>

      <div className='flex gap-4 justify-end'>
        <RecipeFavorite recipe={recipe} />
        <SocialShare recipe={recipe} />
      </div>
    </div>
  );
}
