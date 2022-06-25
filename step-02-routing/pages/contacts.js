import Link from "next/link";
import React from "react";

const contacts = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <ul style={{ listStyleType: "none" }}>
        <li> Email: myemail@example.com</li>
        <li> Twitter: @myusername </li>
        <li> Instagram: myusername </li>
      </ul>
      <div>
        <h1>This is the homepage</h1>
        <Link href='/'>Home</Link>
      </div>
    </div>
  );
};

export default contacts;
