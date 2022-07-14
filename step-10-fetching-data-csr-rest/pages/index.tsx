import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import List from "../components/List";

const Page: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  //useEffect type error so creating a function
  const getUsers = async () => {
    const req = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await req.json();
    setLoading(false);
    setData(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      {loading && <div>Loading......</div>}
      {data && <List users={data} />}
    </div>
  );
};

export default Page;
