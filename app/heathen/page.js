import Image from "next/image";
import React from "react";

import heathen from "../../public/heathen.png";

const page = () => {
  return (
    <div>
      <Image src={heathen}></Image>
      <br></br>
      <a href="https://www.youtube.com/watch?v=KmuHtCg1XUQ">youtube</a>
    </div>
  );
};

export default page;
