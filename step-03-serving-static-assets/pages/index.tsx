import type { NextPage } from "next";
import Image from "next/image";

const index: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Working with image optimization</h1>
      <Image
        src='https://images.unsplash.com/photo-1605460375648-278bcbd579a6'
        alt="'A beautiful English Setter"
        width={900}
        height={500}
      />
    </div>
  );
};

export default index;
