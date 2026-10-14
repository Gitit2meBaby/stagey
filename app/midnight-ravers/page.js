import Image from "next/image";
import React from "react";

import mr1 from "../../public/mr1.png";

const page = () => {
  return (
    <div>
      <h2>main</h2>
      <h3>Am - G</h3>
      <h2>Bridge</h2>
      <h3>Dm - Am</h3>
      <Image src={mr1}></Image>
      <a href="https://www.youtube.com/watch?v=z2Ll0d5Ge1k">youtube</a>
    </div>
  );
};

export default page;
