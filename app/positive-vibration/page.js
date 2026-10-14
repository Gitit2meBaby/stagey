import Image from "next/image";
import React from "react";

import pv1 from "../../public/pv1.png";
import pv2 from "../../public/pv2.png";

const page = () => {
  return (
    <div>
      <Image src={pv1}></Image>
      <Image src={pv2}></Image>
      <br></br>
      <a href="https://www.youtube.com/watch?v=SocaZA-9PvE">youtube</a>
    </div>
  );
};

export default page;
