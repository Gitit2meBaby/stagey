import Image from "next/image";
import React from "react";

import au from "../../public/au.png";
import au1 from "../../public/au1.png";

const page = () => {
  return (
    <div>
      <Image src={au}></Image>
      <Image src={au1}></Image>
      <a href="https://www.youtube.com/watch?v=fJpRvHqzx0g">youtube</a>
    </div>
  );
};

export default page;
