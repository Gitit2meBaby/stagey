import React from "react";
import Image from "next/image";

import redemption1 from "../../public/redemption1.png";
import redemption2 from "../../public/redemption2.png";

const page = () => {
  return (
    <div>
      <Image src={redemption1}></Image>
      <Image src={redemption2}></Image>
    </div>
  );
};

export default page;
