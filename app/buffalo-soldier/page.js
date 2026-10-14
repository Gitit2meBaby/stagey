import React from "react";
import Image from "next/image";

import buffalo from "../../public/buffalo.png";
import buffalo1 from "../../public/buffalo1.png";
import buffalo2 from "../../public/buffalo2.png";
import buffalo3 from "../../public/buffalo3.png";
import buffalo4 from "../../public/buffalo4.png";

const page = () => {
  return (
    <div>
      <Image src={buffalo}></Image>
      <Image src={buffalo1}></Image>
      <Image src={buffalo2}></Image>
      <Image src={buffalo3}></Image>
      <Image src={buffalo4}></Image>
      <br></br>
      <a href="https://www.youtube.com/watch?v=xMSfQDxo7qo">YouTube</a>
    </div>
  );
};

export default page;
