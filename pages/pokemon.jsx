import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";

const pokemon = ({ mon }) => {
  return (
    <Layout title={mon.name}>
      <div className='text-white bg-gray-700 rounded-md mt-0 h-fit w-full'>
        <div className='flex flex-wrap justify-evenly pt-6'>
          <div className='p-2 sm:w-[40%] text-center'>
            <h1 className='text-5xl font-bold mb-2 text-center capitalize'>
              {mon.name}
            </h1>
            <Image
              width={"475"}
              height={"475"}
              src={mon.image}
              alt={mon.name}
            />
            <div>
              <p className='text-3xl mt-20 mb-6 text-center'>Type</p>
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
          </div>

          {/* Stats */}
          <div className='p-2 sm:mt-6 xl:w-[40%] mx-auto'>
            <div>
              <p className='text-3xl text-center'>Info</p>
              <div className='flex flex-col md:flex-row justify-center text-center mt-4'>
                <p className='m-4'>
                  Weight:
                  <span className='ml-2 text-xl font-bold'>
                    {mon.weight / 10} kg
                  </span>
                </p>
                <p className='m-4'>
                  Height:
                  <span className='ml-2 text-xl font-bold'>
                    {mon.height / 10} m
                  </span>
                </p>
                <p className='m-4'>
                  Ability:
                  <span className=' ml-2 capitalize font-bold text-xl'>
                    {mon.abilities[0].ability.name}
                  </span>
                </p>
              </div>
              <div className='mt-10'>
                <h1 className='text-3xl text-center mb-8'>Stats</h1>
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Status Value</th>
                        <th>Base Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mon.stats.map((stats, index) => (
                        <tr key={index}>
                          <th className='capitalize text-left h-8 w-52 px-4'>
                            {stats.stat.name}
                          </th>

                          <th className='xl:hidden'>
                            {stats.base_stat}
                          </th>
                          <th className='text-center w-[510px] hidden xl:block '>
                            <div className='w-full bg-gray-200 rounded-full dark:bg-gray-700'>
                              <div
                                className='bg-green-700 text-xs font-medium text-white text-center p-1 leading-none rounded-full '
                                style={{ width: stats.base_stat * 2 }}
                              >
                                {" "}
                                {stats.base_stat}
                              </div>
                            </div>
                          </th>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className='mt-10 pb-10 text-center'>
          <Link href='/'>
            <a className='text-2xl underline'>Pokédex</a>
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
