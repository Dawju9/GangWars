import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Green Dragon</title>
        <meta name="description" content="Green Dragon FiveM Server" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2E4053] to-[#1A202C]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <Image
            src="/logo.png"
            alt="Green Dragon Logo"
            width={300}
            height={300}
            className="rounded-full"
          />
          <h1 className="text-6xl font-bold tracking-tight text-white">
            Green Dragon
          </h1>
          <p className="text-2xl text-white">
            FiveM Server for custom roleplay experiences
          </p>
          <a
            href="/discord"
            className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-white px-5 py-3 text-base font-medium text-[#1A202C] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-50"
          >
            Join Discord
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
