import React from "react";
import Image from "next/image";

import ff1 from "../../public/ff1.png";
import ff2 from "../../public/ff2.png";
import ff3 from "../../public/ff3.png";
import ff4 from "../../public/ff4.png";
import ff5 from "../../public/ff5.png";
import ff6 from "../../public/ff6.png";
import ff7 from "../../public/ff7.png";
const page = () => {
  return (
    <div>
      <h3>Intro</h3>
      <Image src={ff1}></Image>
      <h3>Verse</h3>
      <Image src={ff2}></Image>
      <Image src={ff3}></Image>
      <h3>Verse alt</h3>
      <Image src={ff4}></Image>
      <Image src={ff5}></Image>
      <h3>Pre-Chorus</h3>
      <Image src={ff6}></Image>
      <Image src={ff7}></Image>
      <br></br>
      <a href="https://www.youtube.com/watch?v=YZC4es_dkho">youtube</a>
    </div>
  );
};

export default page;
