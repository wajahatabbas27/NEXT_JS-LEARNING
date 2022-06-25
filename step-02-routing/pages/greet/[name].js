import React from "react";

export const getServerSideProps = async ({ params }) => {
  const { name } = params;
  return {
    props: {
      name,
    },
  };
};

const name = (props) => {
  console.log(props);
  return <div>name : {props.name}</div>;
};

export default name;
