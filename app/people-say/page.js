import React from "react";
import Image from "next/image";
import ps1 from "../../public/ps1.png";
import ps2 from "../../public/ps2.png";
import ps3 from "../../public/ps3.png";
import ps4 from "../../public/ps4.png";
import ps5 from "../../public/ps5.png";

const page = () => {
  return (
    <div>
      <Image src={ps1}></Image>
      <Image src={ps2}></Image>
      <Image src={ps3}></Image>
      <Image src={ps4}></Image>
      <Image src={ps5}></Image>
    </div>
  );
};

export default page;
