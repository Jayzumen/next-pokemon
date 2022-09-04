import React from "react";
import Link from "next/link";

const GenSearch = () => {
  const generations = [
    {
      id: 1,
      gen: "I",
      href: "/",
    },
    {
      id: 2,
      gen: "II",
      href: "/II",
    },
    {
      id: 3,
      gen: "III",
      href: "/III",
    },
    {
      id: 4,
      gen: "IV",
      href: "/IV",
    },
    {
      id: 5,
      gen: "V",
      href: "/V",
    },
    {
      id: 6,
      gen: "VI",
      href: "/VI",
    },
    {
      id: 7,
      gen: "VII",
      href: "/VII",
    },
    {
      id: 8,
      gen: "VIII",
      href: "/VIII",
    },
  ];
  return (
    <div className='flex justify-center my-2'>
      {generations.map(({ id, gen, href }) => (
        <Link key={id} href={href}>
          <button className='rounded border-2 text-white p-2 sm:p-3 md:p-4 m-2 hover:underline hover:bg-gray-800 hover:scale-105 duration-500'>
            <p className='w-2 h-2 flex justify-center items-center p-2 sm:p-3 md:p-4 md:text-xl font-bold'>
              {gen}
            </p>
          </button>
        </Link>
      ))}
    </div>
  );
};

export default GenSearch;
