import axios from "axios";
import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";

//for env used variables
//we must create a .env file and there the values which we wants to use we use use them in the file like this
// we must declare all the env variables like this where ever we wants to use it

declare var process: {
  env: {
    API_TOKEN: string;
    API_ENDPOINT: string;
  };
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  //yhn pe hn context se khecheinge data jo hamein chahiye wo sb context argument mein hota hai data sara hmara
  //Ab data hai hamare pass ab hm data ko destructure krleinge context.query se
  const { username } = context.query;
  const userReq = await axios.get(
    `${process.env.API_ENDPOINT}/04/users/${username}`,
    {
      headers: {
        authorization: process.env.API_TOKEN,
      },
    }
  );

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
  profile_picture: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  job_title: string;
}

const Page: NextPage<Props> = ({ user }) => {
  //   const user = props.user;
  return (
    <div>
      <div>
        <Link href='/' passHref>
          Back to home
        </Link>
      </div>
      <hr />
      <div style={{ display: "flex" }}>
        <img
          src={user.profile_picture}
          alt={user.username}
          width={150}
          height={150}
        />
        <div>
          <div>
            <b>Username:</b> {user.username}
          </div>
          <div>
            <b>Full name:</b>
            {user.first_name} {user.last_name}
          </div>
          <div>
            <b>Email:</b> {user.email}
          </div>
          <div>
            <b>Company:</b> {user.company}
          </div>
          <div>
            <b>Job title:</b> {user.job_title}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
