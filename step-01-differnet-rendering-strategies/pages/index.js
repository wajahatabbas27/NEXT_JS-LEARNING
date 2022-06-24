import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
// import Dynamicpage from "./component/Dynamicpage";

// //dynamic page structure
// const dynamicHighight = dynamic(() => import("./component/Dynamicpage"), {
//   ssr: false,
// });

// function DynamicPage() {
//   return (
//     <div>
//       <DynamicPage />
//     </div>
//   );
// }

//built-in function for the ssr is  getServerSideProps
export const getServerSideProps = async () => {
  const userRequest = await fetch("https://api.publicapis.org/entries");
  const userData = await userRequest.json();

  return {
    props: {
      user: userData,
    },
  };
};

const index = ({ user: { entries } }) => {
  // console.log(props.user.entries[0]);
  console.log(entries);

  //use State for CSR
  const [isClient, setisClient] = useState(false);

  //use Effect for CSR
  useEffect(() => {
    setisClient(true);
  }, []);

  //using this technique we can also use the client and server side things for us by using the process.browser technique
  const side = process.browser ? "Client" : "Server";

  return (
    <div
      style={{
        // display: "flex",
        // flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h1 style={{ textDecoration: "underline" }}>
        SSR - Server Side Rendering{" "}
      </h1>
      {entries.map((item, index) => (
        <p key={index}>
          This is the <span style={{ color: "red" }}>{item.API}</span> and the
          description is{" "}
          <span style={{ color: "blue" }}>{item.Description}</span>.
        </p>
      ))}
      <br />
      <br />
      <br />
      <h1>CSR - Clent Side Rendering</h1>
      {isClient && (
        <p>
          This is CSR working on browser as we are using the useState and the
          useEffect
        </p>
      )}
      <h1>Using process.browser tecnique</h1>
      <p>You're currently on the {side}-side!</p>
    </div>
  );
};

export default index;
