import Image from "next/image";
import React from "react";

import train1 from "../../public/train1.png";
import train2 from "../../public/train2.png";
import train3 from "../../public/train3.png";
import train4 from "../../public/train4.png";
import train5 from "../../public/train5.png";
const page = () => {
  return (
    <div>
      <Image src={train1}></Image>
      <Image src={train2}></Image>
      <em>Cuz without love...</em>
      <Image src={train3}></Image>
      <p>Back to G riff</p>
      <em>Cuz without love...</em>
      <Image src={train4}></Image>
      <p>Back to G riff</p>
      <p>Groove back over it</p>
      <p>G stops</p>
      <Image src={train5}></Image>
    </div>
  );
};

export default page;
