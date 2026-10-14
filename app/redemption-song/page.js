import React from "react";
import Image from "next/image";

import red1 from "../../public/red1.png";
import red2 from "../../public/red2.png";
import red3 from "../../public/red3.png";
import red4 from "../../public/red4.png";
import red5 from "../../public/red5.png";
import red6 from "../../public/red6.png";

const page = () => {
  return (
    <div>
      <h3>Intro & Bridge</h3>
      <Image src={red1}></Image>
      <Image src={red2}></Image>
      <h3>Riff1</h3>
      <Image src={red3}></Image>
      <Image src={red4}></Image>
      <h3>Walk Down Riff</h3>
      <Image src={red5}></Image>
      <Image src={red6}></Image>
    </div>
  );
};

export default page;
