import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const index = () => {
  const [loggedIn, setloggedIn] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   setloggedIn(false);

  //   //if not logged in then send back to the login page using the router.push technique
  //   if (!loggedIn) {
  //     router.push("/login");
  //   }
  // }, [loggedIn]);

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h1>This is the homepage</h1>
        <Link href='/'>Home</Link>
      </div>
      <div>
        <h1>This is the Contact page</h1>
        <Link href='/contacts'>Contact</Link>
      </div>
      <div>
        <h1>This is the Dynamic post </h1>
        <Link href='/posts/2021-01-01/happy-new-year'> Read post </Link>
        <br />
        <Link href='/posts/2021-03-05/match-update'> Read post </Link>
        <br />
        <Link href='/posts/2021-04-23/i-love-nextjs'> Read post </Link>
      </div>
      <div>
        <h2>Private routing technique using the router.push</h2>
        {/* for the router.push technique whenever we wanted to send back to the page without clicking we can send using te router .push */}
        {loggedIn ? <PrivateComponent /> : null}
      </div>
    </div>
  );
};

export default index;
