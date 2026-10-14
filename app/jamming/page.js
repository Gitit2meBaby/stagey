import Image from "next/image";
import React from "react";

import jam1 from "../../public/jam1.png";
import jam2 from "../../public/jam2.png";
import jam3 from "../../public/jam3.png";
const page = () => {
  return (
    <div>
      <Image src={jam1}></Image>
      <Image src={jam2}></Image>
      <Image src={jam3}></Image>
      <a href="https://www.youtube.com/watch?v=oqVy6eRXc7Q">youtube</a>
    </div>
  );
};

export default page;
