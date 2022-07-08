import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";

//These are the types whic we define all the way so we can use it inside the pages folder
interface Props {
  users: [User];
}

interface User {
  id: string;
  username: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userReq = await axios.get("https://api.rwnjs.com/04/users");
  // console.log(userReq.data);

  return {
    props: {
      users: userReq.data,
    },
  };
};

const index: NextPage<Props> = (props: Props) => {
  //the best way to do is to do it by using the Props interface else we will be facing the type errors
  const users = props.users;

  return (
    <div>
      <h1>index</h1>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            <Link href={`/users/${user.username}`} passHref>
              <a> {user.username} </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default index;
