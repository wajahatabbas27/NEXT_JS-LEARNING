import React from "react";

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
    </div>
  );
};

export default index;
