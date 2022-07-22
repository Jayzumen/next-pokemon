import React from "react";
import Head from "next/head";

const Layout = ({ title, children }) => {
  return (
    <div className='bg-gray-900 h-fit w-full'>
      <Head>
        <title className='capitalize'>{title}</title>
        <link rel='icon' href='favicon.ico' />
      </Head>
      <main className='container mx-auto max-w-[1800px] min-h-screen'>
        {children}
      </main>
    </div>
  );
};

export default Layout;
