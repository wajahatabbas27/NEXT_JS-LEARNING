# MetaData

- We will learn how to deal with the metaData in this step
- How we will going to implement it dynamically and grouping way as well therefore we will going to look at the Head tag from the library of the nextjs.
- What ever we write in the head title appears in the upper tab of the screen.
- Until now whenever we switch to different page we get the differnt title in the tab with the icon because of the Head tag used.

## component widget.tsx

- types for the component is : import type { NextComponentType, NextPageContext } from "next";

- This is the code using the TypeScript -- Typescript.

  import type { NextPage } from "next";
  import Head from "next/head";
  import { useState } from "react";
  import type { NextComponentType, NextPageContext } from "next";

//typescript type Props described with interface
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
