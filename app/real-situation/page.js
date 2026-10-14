import Image from "next/image";
import React from "react";

import rs1 from "../../public/rs1.png";
import rs2 from "../../public/rs2.png";
const page = () => {
  return (
    <div>
      <Image src={rs1}></Image>
      <Image src={rs2}></Image>
      <br></br>
      <a href="https://www.youtube.com/watch?v=jqrTp9H2EtM">youtube</a>
    </div>
  );
};

export default page;
