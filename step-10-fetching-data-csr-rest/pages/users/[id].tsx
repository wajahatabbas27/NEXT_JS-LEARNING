import type {
  GetServerSideProps,
  NextPage,
  NextComponentType,
  NextPageContext,
} from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import UserData from "../../components/UserData";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  // console.log(id);

  return {
    props: {
      id,
    },
  };
};

interface Props {
  id: number;
}

const Page: NextPage<Props> = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  //useEffect type error so creating a function
  const getUsers = async () => {
    // updated the api from the routed page of the api and the hello page calling the data on the serverside and showing on the clientside
    const req = await fetch(`/api/hello?id=${id}`);
    // console.log(req);

    const users = await req.json();
    setLoading(false);
    setData(users);
  };

  console.log(data);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Dynamic Page</h1>
      <div>
        <Link href='/' passHref>
          back to home
        </Link>
        <hr />
        {loading && <div>Loading user data...</div>}
        {data && <UserData users={data} />}
      </div>
    </div>
  );
};
export default Page;
