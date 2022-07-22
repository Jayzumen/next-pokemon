import React from "react";
import Head from "next/head";

const Layout = ({ title, children }) => {
  return (
    <div className='bg-gray-900 h-fit w-full'>
      <Head>
        <title className='capitalize'>{title}</title>
        <link rel='icon' href='favicon.ico' />
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width'
        />
        <meta name='description' content='My Pokedex' />
      </Head>
      <main className='container mx-auto max-w-[1800px] min-h-screen'>
        {children}
      </main>
    </div>
  );
};

export default Layout;
