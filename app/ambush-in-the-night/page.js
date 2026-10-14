import Image from "next/image";
import React from "react";

import ain1 from "../../public/ain1.png";
import ain2 from "../../public/ain2.png";
import ain3 from "../../public/ain3.png";

const page = () => {
  return (
    <div>
      <Image src={ain1}></Image>
      <Image src={ain2}></Image>
      <Image src={ain3}></Image>
      <a href="https://www.youtube.com/watch?v=tmpa-aDFPtc">youtube</a>
    </div>
  );
};

export default page;
