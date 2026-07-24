import Image from "next/image";
import React from "react";

import dancing1 from "../../public/dancing1.png";
import dancing2 from "../../public/dancing2.png";
import dancing3 from "../../public/dancing3.png";
import dancing4 from "../../public/dancing4.png";
import dancing5 from "../../public/dancing5.png";
import dancing6 from "../../public/dancing6.png";
const page = () => {
  return (
    <section>
      <Image src={dancing1}></Image>
      <Image src={dancing2}></Image>
      <Image src={dancing3}></Image>
      <Image src={dancing4}></Image>
      <h2>E - D - C - B</h2>
      <em>open notes as last note</em>
      <Image src={dancing5}></Image>
      <Image src={dancing6}></Image>
    </section>
  );
};

export default page;
