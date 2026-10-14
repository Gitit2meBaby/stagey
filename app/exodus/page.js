import React from "react";
import Image from "next/image";
import exodus from "../../public/exodus.png";
const page = () => {
  return (
    <div>
      <Image src={exodus}></Image>
      <a href="https://www.youtube.com/watch?v=wiU1157iLH0">youtube</a>
    </div>
  );
};

export default page;
