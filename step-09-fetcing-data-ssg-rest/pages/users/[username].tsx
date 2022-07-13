import axios from "axios";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";

// It is required when getting the get static props
//Everytime we use the get Static Props we must require the get static paths
//routes jb bhi use kreinge wahan yh zaroor deinge
export const getStaticPaths: GetStaticPaths = async () => {
  const userReq = await axios.get("https://jsonplaceholder.typicode.com/users");
  const users: User[] = userReq.data;
  const paths = users.map((user) => ({
    params: {
      username: user.username,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

//uper wala getStaticPaths lgana zrori hai
export const getStaticProps: GetStaticProps = async (context) => {
  // ! - it means kuch bhi hoga null nhi hoga
  // getting the username from the previous page
  const { username } = context.params!;

  //getting all users data
  const allUsers = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  //getting the data of the particular user
  const user = allUsers.data.find((user: User) => user.username === username);

  //now get the user now making the request
  const userReq = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${user.id}`
  );

  console.log(userReq);

  //404
  if (userReq.status === 404) {
    return {
      notFound: true,
    };
  }

  //returning the original data
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
  username: string;
  profile_picture: string;
  name: string;
  email: string;
}

const Page: NextPage<Props> = ({ user }) => {
  return (
    <div style={{ textAlign: "center", cursor: "pointer" }}>
      <Link href='/'>
        <h3>&larr; Back</h3>
      </Link>

      <main>
        <div>
          <a href='#'>
            <div>
              <div>
                <b>Username:</b> {user.username}
              </div>
              <div>
                <b>Full name:</b>
                {user.name}
              </div>
              <div>
                <b>Email:</b> {user.email}
              </div>
            </div>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Page;
