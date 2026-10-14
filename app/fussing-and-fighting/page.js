import React from "react";
import Image from "next/image";

import faf1 from "../../public/faf1.png";
import faf2 from "../../public/faf2.png";
import faf3 from "../../public/faf3.png";
const page = () => {
  return (
    <div>
      <Image src={faf1}></Image>
      <Image src={faf2}></Image>
      <Image src={faf3}></Image>
      <br></br>
      <a href="https://www.youtube.com/watch?v=YZC4es_dkho">youtube</a>
    </div>
  );
};

export default page;
