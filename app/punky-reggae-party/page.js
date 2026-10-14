import Image from "next/image";
import React from "react";

import prp1 from "../../public/prp1.png";
import prp2 from "../../public/prp2.png";
import prp3 from "../../public/prp3.png";

const page = () => {
  return (
    <div>
      <Image src={prp1}></Image>
      <Image src={prp2}></Image>
      <Image src={prp3}></Image>
      <br></br>
      <a href="https://www.youtube.com/watch?v=ObA7lmTCrRw">youtube</a>
    </div>
  );
};

export default page;
