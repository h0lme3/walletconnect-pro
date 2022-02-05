import type { NextPage } from "next";
import Head from "next/head";

import { LandingView } from "views";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>WalletConnect</title>
      </Head>
      <LandingView />
    </div>
  );
};

export default Home;
