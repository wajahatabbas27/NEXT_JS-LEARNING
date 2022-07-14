import Link from "next/link";

export interface Props {
  users: User[];
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: ADDRESS;
}

interface ADDRESS {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

const List = (props: Props) => {
  let users = props.users;
  return (
    <div>
      <h1>Users Data from the API on ClientSide</h1>
      <ul style={{ listStyle: "none", cursor: "pointer" }}>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`} passHref>
              <b>{user.username}</b>
            </Link>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
