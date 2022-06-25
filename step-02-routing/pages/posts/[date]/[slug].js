import React from "react";
import { useRouter } from "next/router";

const slug = () => {
  //methods or technique for whic we can use the useRouter tecnique
  // const router = useRouter()
  // const {slug} = router.query
  const {
    query: { slug, date },
  } = useRouter();

  // console.log(slug);

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <p>
        slug that is dynamic is <span style={{ color: "red" }}>{slug}</span> and
        the date is <span style={{ color: "blue" }}>{date}</span>
      </p>
    </div>
  );
};

export default slug;
