import Image from "next/image";
import React from "react";

import cj from "../../public/cj.png";
const page = () => {
  return (
    <div>
      <Image src={cj}></Image>
      <br></br>
      <a href="https://www.youtube.com/watch?v=wQOvM56aIPE">youtube</a>
    </div>
  );
};

export default page;
