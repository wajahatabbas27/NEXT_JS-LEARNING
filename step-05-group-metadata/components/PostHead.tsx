import type { NextComponentType, NextPageContext } from "next";
import Head from "next/head";

interface Props {
  title: string;
  subtitle: string;
  image: string;
  description?: string; //? stands for optional
}

//destructured the types as well for the props
const PostHead: NextComponentType<NextPageContext, {}, Props> = ({
  title,
  subtitle,
  description,
  image,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={subtitle} />

      {/* open graph meta */}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={subtitle} />
      <meta property='og:image' content={image} />

      {/* twitter card meta */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
    </Head>
  );
};

export default PostHead;
