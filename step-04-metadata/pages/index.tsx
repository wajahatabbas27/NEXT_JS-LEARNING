import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Widget from "../components/Widget";

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome to my Next.js website</title>
      </Head>
      <div>
        <Link href='/about'>
          <a>About us</a>
        </Link>
      </div>
      <Widget pageName='index' />
    </>
  );
};

export default index;
