import Image from "next/image";
import React from "react";

import rockIt from "../../public/rockIt.png";
import rockIt2 from "../../public/rockIt2.png";

const page = () => {
  return (
    <div>
      <Image src={rockIt}></Image>
      <Image src={rockIt2}></Image>
      <a href="https://www.youtube.com/watch?v=NVxfcVBkuqo">youtube</a>
    </div>
  );
};

export default page;
