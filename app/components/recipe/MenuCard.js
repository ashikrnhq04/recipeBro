import Image from "next/image";
import Link from "next/link";

export default function MenuCard({ menu }) {
  const {
    id,
    name,
    description,
    author,
    activeTime,
    totalTime,
    thumbnail,
    image,
    category,
    server,
    rating,
    steps,
  } = menu;
  return (
    <Link href={`/recipes/${id}`}>
      <div className='card'>
        <Image
          src={thumbnail}
          className='rounded-md'
          alt=''
          width={400}
          height={300}
        />
        <h4 className='my-2'>{name}</h4>
        <div className='py-2 flex justify-between text-xs text-gray-500'>
          <span>⭐️ {rating}</span>
          <span>By: {author}</span>
        </div>
      </div>
    </Link>
  );
}
