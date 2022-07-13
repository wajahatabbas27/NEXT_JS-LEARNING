import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";

//These are the types whic we define all the way so we can use it inside the pages folder
interface Props {
  users: [User];
}

interface User {
  id: string;
  title: string;
  body: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userReq = await axios.get("https://jsonplaceholder.typicode.com/posts");
  // console.log(userReq.data);

  return {
    props: {
      users: userReq.data,
    },
  };
};

const index: NextPage<Props> = ({ users }) => {
  //the best way to do is to do it by using the Props interface else we will be facing the type errors
  // const users = props.users;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>index</h1>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`} passHref>
              <a> {user.title} </a>
            </Link>
            {/* <p>{user.body}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default index;
