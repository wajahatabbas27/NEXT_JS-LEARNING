import type { GetServerSideProps, NextPage } from "next";
import PostHead from "../../components/PostHead";
import posts, { Post } from "../../data/posts";
// import { ParsedUrlQuery } from "querystring";

// interface Props extends ParsedUrlQuery {
//   slug: string;
// }

//It will be doing serverside rendering and sending the data as the props
export const getServerSideProps: GetServerSideProps = async (context) => {
  // const { slug } = context.params as Props
  const { slug } = context.params!; //! means not null

  //getting data from posts file which have array of objects
  const post = posts.find((p) => p.slug === slug);

  //   console.log(post);

  return {
    props: {
      post,
    },
  };
};

interface Props {
  post: Post;
}

const myPost: NextPage<Props> = ({ post }) => {
  return (
    <div>
      <PostHead {...post} />
      <h1>{post.title}</h1>
      <p>{post.subtitle}</p>
    </div>
  );
};

export default myPost;
