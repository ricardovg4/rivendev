import Head from 'next/head';

import LayoutWrapper from '../components/LayoutWrapper';

export default function Home() {
  return (
    <>
      <Head>
        <title>rivendev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <LayoutWrapper>
        <div className="h-screen flex justify-center flex-wrap content-center">
          <div className="p-0">
            <h1 className="text-6xl tracking-tighter font-bold ">WEB DESIGN.</h1>
          </div>
        </div>

        <div className="mt-14 lg:mt-14 font-light w-full text-black dark:text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4 tracking-tight font-normal">
            Hi, I'm Ricardo.
          </h1>
          <p className="dark:text-gray-200 text-2xl sm:text-3xl lg:text-4xl mb-2 w-11/12 sm:w-5/6 md:w-11/12 lg:w-4/5 xl:w-3/5">
            I'm a freelance web developer. I love React, Node.js and Linux.
          </p>
          <p className="text-xs dark:text-gray-500">btw, I use Arch.</p>
        </div>
        <section className="text-base font-light">
          <h2 className="tracking-tight font-normal text-3xl mt-14 dark:text-white text-black">
            About
          </h2>
          <p className="my-2">
            I build websites, like the one you're viewing, like the one that's on your
            head.
          </p>
          <p className="my-2">
            I do professionally crafted websites, from start to finish.
          </p>
          <p className="my-2">
            Do you need a stunning page? Or a professionally looking and performing web
            app? I got you covered.
          </p>
        </section>
      </LayoutWrapper>
    </>
  );
}
