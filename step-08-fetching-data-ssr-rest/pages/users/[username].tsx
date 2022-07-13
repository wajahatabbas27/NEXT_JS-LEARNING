import axios from "axios";
import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";

//for env used variables
//we must create a .env file and there the values which we wants to use we use use them in the file like this
// we must declare all the env variables like this where ever we wants to use it

// declare var process: {
//   env: {
//     API_TOKEN: string;
//     API_ENDPOINT: string;
//   };
// };

export const getServerSideProps: GetServerSideProps = async (context) => {
  //yhn pe hn context se khecheinge data jo hamein chahiye wo sb context argument mein hota hai data sara hmara
  //Ab data hai hamare pass ab hm data ko destructure krleinge context.query se
  const { username } = context.query;
  const userReq = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${username}`
  );

  // console.log(id);

  if (userReq.status === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user: userReq.data,
    },
  };
};

interface Props {
  user: User;
}

interface User {
  id: string;
  title: string;
  body: string;
}

const Page: NextPage<Props> = ({ user }) => {
  console.log(user);

  //   const user = props.user;
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Username Dynamic Routing Page</h1>
      <div>
        <Link href='/' passHref>
          Back to home
        </Link>
      </div>
      <hr />
      <div>
        <div>
          <b>ID: </b> {user.id}
        </div>
        <div>
          <b>Title: </b>
          {user.title}
        </div>
        <div>
          <b>Body: </b> {user.body}
        </div>
      </div>
    </div>
  );
};
export default Page;
