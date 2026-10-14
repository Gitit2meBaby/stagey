import Image from "next/image";
import React from "react";

import tb1 from "../../public/tb1.png";
import tb2 from "../../public/tb2.png";
import tb3 from "../../public/tb3.png";
const page = () => {
  return (
    <section className="imageContainer">
      <h3>Intro</h3>
      <Image src={tb1}></Image>
      <h3>Chorus</h3>
      <Image src={tb2}></Image>
      <h3>Verse</h3>
      <Image src={tb3}></Image>
      <a href="https://www.youtube.com/watch?v=RtN9MlCp1p8">YoutTube</a>
    </section>
  );
};

export default page;
