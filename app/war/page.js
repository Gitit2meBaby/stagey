import React from "react";
import Image from "next/image";

import war from "../../public/war.png";

const page = () => {
  return (
    <div>
      [INTRO]<br></br>
      G|---------------------------------|<br></br>
      D|---------------------------------|<br></br>
      A|---------------------------------|<br></br>
      E|-6-6---4--4-4----6-6----4--4-4---| <br></br>
      <br></br>
      <Image src={war}></Image>
      <a href="https://www.youtube.com/watch?v=n-GkChsAGDE">youtube</a>
    </div>
  );
};

export default page;
