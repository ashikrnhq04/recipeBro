"use client";

import { FaHeart } from "react-icons/fa";

import { makeFavorite } from "@/app/actions";
import { authContext } from "@/app/context/auth-context";
import { useRouter } from "next/navigation";
import { useContext, useState, useTransition } from "react";
import { FaRegHeart } from "react-icons/fa";

export default function RecipeFavorite({ recipe }) {
  const { auth, setAuth } = useContext(authContext);

  const [isPending, startTransition] = useTransition();

  const isFavourite =
    auth?.favourites.length > 0 &&
    auth?.favourites?.find((fevId) => fevId.toString() === recipe.id);

  const [favourite, setFavourite] = useState(isFavourite);

  const router = useRouter();

  async function handleFavourite() {
    try {
      if (auth) {
        await makeFavorite(recipe.id, auth.id);
        setFavourite(!favourite);

        startTransition(() =>
          setAuth((prevData) => {
            if (favourite) {
              return {
                ...prevData,
                favourites: prevData.favourites.filter(
                  (id) => id !== recipe.id
                ),
              };
            }
            return {
              ...prevData,
              favourites: [...prevData.favourites, recipe.id],
            };
          })
        );
      } else {
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }
  return (
    <div
      className='flex gap-2 text-gray-600 items-center cursor-pointer hover:text-[#eb4a36]'
      onClick={() => startTransition(handleFavourite)}>
      {favourite ? (
        <FaHeart className='inline-block text-red-600' />
      ) : (
        <FaRegHeart className='inline-block' />
      )}
      <span>Favourite</span>
    </div>
  );
}
