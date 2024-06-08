import Image from "next/image";

export default function RecipeImage({ image, name }) {
  return (
    <div className='col-span-12 md:col-span-6'>
      <Image
        src={image}
        alt={name}
        width={800}
        height={600}
        className='w-full h-full rounded-lg object-contain'
      />
    </div>
  );
}
