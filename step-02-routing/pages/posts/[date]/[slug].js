import React from "react";
import { useRouter } from "next/router";

const slug = () => {
  const router = useRouter();
  const { slug, date } = router.query;

  return (
    <div>
      It is the dynamic path for every data that is coming all the way with any
      name will be routed over here. : {slug} , {date}
    </div>
  );
};

export default slug;
