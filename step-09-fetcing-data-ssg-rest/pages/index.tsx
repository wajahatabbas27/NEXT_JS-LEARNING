import { GetStaticProps, NextPage } from "next";
import axios from "axios";
import Link from "next/link";

//Static site props
export const getStaticProps: GetStaticProps = async (context) => {
  const userReq = await axios.get("https://jsonplaceholder.typicode.com/users");
  // console.log(userReq);

  return {
    props: {
      users: userReq.data,
    },
  };
};

interface Props {
  users: [User];
}

interface User {
  id: string;
  username: string;
}

const index: NextPage<Props> = ({ users }) => {
  return (
    <div style={{ textAlign: "center", cursor: "pointer" }}>
      <h1> Static Site Generation</h1>
      {users.map((user: User) => {
        return (
          <div key={user.id}>
            <Link href={`/users/${user.username}`}>
              <h2>{user.username} &rarr; </h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default index;
