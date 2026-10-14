import Image from "next/image";
import React from "react";

import nd from "../../public/nd.png";

const page = () => {
  return (
    <div>
      <Image src={nd}></Image>
      <br></br>
      <a href="https://www.youtube.com/watch?v=MeGMaz90la4">youtube</a>
    </div>
  );
};

export default page;
