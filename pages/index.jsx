import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";

export default function Home({ pokemon }) {
  return (
    <Layout title='Pokedex App'>
      <h1 className='text-center text-5xl font-bold mb-4 underline text-white'>
        Pokédex
      </h1>
      {/* <GenSearch /> */}
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-between mx-4'>
        {pokemon.map((mon, index) => (
          <li key={index} className='hover:scale-105 duration-300'>
            <Link href={`/pokemon?id=${index + 1}`}>
              <a className='border p-4 border-gray m-4 capitalize flex items-center text-lg rounded-md bg-gray-300 shadow-lg shadow-gray-700'>
                <Image
                  width={"96"}
                  height={"96"}
                  src={mon.image}
                  alt={mon.name}
                />
                <span className='mr-2'>#{("00" + (index + 1)).slice(-3)}</span>
                <p className='font-bold'>{mon.name}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps(context) {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const { results } = await res.json();
    const pokemon = results.map((result, index) => {
      const paddedIndex = ("00" + (index + 1)).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
      https: return {
        ...result,
        image,
      };
    });
    return { props: { pokemon } };
  } catch (err) {
    console.error(err);
  }
}

