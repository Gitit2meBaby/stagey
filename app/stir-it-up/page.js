import Image from "next/image";
import React from "react";

import stir from "../../public/stir.png";
const page = () => {
  return (
    <div>
      <h2>A - D - E</h2>
      <p>play triads</p>
      <Image src={stir}></Image>
    </div>
  );
};

export default page;
