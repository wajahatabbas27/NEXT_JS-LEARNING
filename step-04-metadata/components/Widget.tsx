import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import type { NextComponentType, NextPageContext } from "next";

// typescript type Props described with interface
// This will have all the types of things coming from the place backward trough the props as an argument.
interface Props {
  pageName: string;
}

const Widget: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <>
        <Head>
          <title>You are browsing the {props.pageName} page</title>
        </Head>
        <div>
          <button onClick={() => setActive(false)}>
            Restore original title
          </button>
          Take a look at the title!
        </div>
      </>
    );
  }
  return (
    <>
      <button onClick={() => setActive(true)}>Change Page title</button>
    </>
  );
};

export default Widget;
