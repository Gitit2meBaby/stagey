import Image from "next/image";
import React from "react";

import hgt1 from "../../public/hgt1.png";
import hgt2 from "../../public/hgt2.png";
import hgt3 from "../../public/hgt3.png";
import hgt4 from "../../public/hgt4.png";
import hgt5 from "../../public/hgt5.png";
import hgtr1 from "../../public/hgtr1.png";
import hgtr2 from "../../public/hgtr2.png";
const page = () => {
  return (
    <div>
      <Image src={hgt1}></Image>
      <Image src={hgt2}></Image>
      <Image src={hgt3}></Image>
      <p>riff 1</p>
      <Image src={hgt4}></Image>
      <p>riff 2</p>
      <Image src={hgt5}></Image>
      <p>solo</p>
      <Image src={hgtr1}></Image>
      <Image src={hgtr2}></Image>
    </div>
  );
};

export default page;
