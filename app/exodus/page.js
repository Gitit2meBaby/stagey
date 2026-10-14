import React from "react";
import Image from "next/image";
import exodus from "../../public/exodus.png";
import exodus1 from "../../public/exodus1.png";
import exodus2 from "../../public/exodus2.png";
const page = () => {
  return (
    <div>
      <Image src={exodus}></Image>
      <Image src={exodus1}></Image>
      <Image src={exodus2}></Image>
      <a href="https://www.youtube.com/watch?v=wiU1157iLH0">youtube</a>
    </div>
  );
};

export default page;
