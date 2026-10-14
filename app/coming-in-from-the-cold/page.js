import React from "react";
import Image from "next/image";

import coming from "../../public/coming.png";
import coming2 from "../../public/coming2.png";
const page = () => {
  return (
    <div>
      <Image src={coming}></Image>
      <Image src={coming2}></Image>
      <a href="https://www.youtube.com/watch?v=6TzDL_x6vd8">youtube</a>
    </div>
  );
};

export default page;
