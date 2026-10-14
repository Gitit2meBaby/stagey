import React from "react";
import Image from "next/image";

import oneLove from "../../public/oneLove.png";
import oneLove2 from "../../public/oneLove2.png";
const page = () => {
  return (
    <div>
      <Image src={oneLove}></Image>
      <Image src={oneLove2}></Image>
    </div>
  );
};

export default page;
