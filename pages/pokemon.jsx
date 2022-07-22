import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const pokemon = ({ mon }) => {
  return (
    <Layout title={mon.name}>
      <div className='text-white bg-gray-700 rounded-md mt-0 h-fit w-full'>
        <div className='flex flex-wrap justify-evenly pt-6'>
          <div className='mr-10 sm:w-[45%]'>
            <h1 className='text-5xl font-bold mb-2 text-center capitalize'>
              {mon.name}
            </h1>
            <picture>
              <source srcSet={mon.image} type='image/webp' />
              <img
                className='mx-auto h-[400px] w-[400px]'
                src={mon.image}
                alt={mon.name}
              />
            </picture>
            <div className='flex justify-center mt-4'>
              <p className='mx-16'>
                <span className='font-bold mr-2'>Weight: </span>
                {mon.weight / 10} kg
              </p>
              <p className='mx-16'>
                <span className='font-bold mr-2'>Height: </span>
                {mon.height / 10} m
              </p>
            </div>
            <p className='text-4xl mt-20 mb-6 text-center'>Types</p>
            <div className='flex flex-wrap justify-center text-2xl'>
              {mon.types.map((type, index) => (
                <p
                  key={index}
                  className='capitalize border-2 mx-4 md:mx-10 my-2 lg:my-0 rounded-md py-2 px-8'
                >
                  {type.type.name}
                </p>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className='ml-32 sm:mt-6 sm:w-[45%] mx-auto'>
            <h1 className='text-3xl text-center mb-8'>Stats</h1>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Stat Name</th>
                    <th>Stat Value</th>
                    <th>Stat Line</th>
                  </tr>
                </thead>
                <tbody>
                  {mon.stats.map((stats, index) => (
                    <tr key={index}>
                      <th className='capitalize text-left h-8 w-52'>
                        {stats.stat.name}
                      </th>
                      <th className='h-8 w-52 my-2'>
                        {stats.base_stat}
                      </th>
                      <th className='text-center'>
                        <div className='bg-blue-600 h-6 rounded-full w-[200px] text-center justify-center items-center'>
                          {stats.base_stat}
                        </div>
                      </th>
                    </tr>
                  ))}
                  <tr>
                    <th>Sum</th>
                    <th>Sum</th>
                    <th>Sum</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <p className='mt-10 pb-10 text-center'>
          <Link href='/'>
            <a className='text-2xl underline'>Home</a>
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default pokemon;

export async function getServerSideProps({ query }) {
  const id = query.id;
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    const mon = await res.json();
    const paddedIndex = ("00" + id).slice(-3);
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
    mon.image = image;
    return {
      props: { mon },
    };
  } catch (err) {
    console.error(err);
  }
}
