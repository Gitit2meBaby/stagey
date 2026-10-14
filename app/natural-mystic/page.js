import Image from "next/image";
import React from "react";

import nm1 from "../../public/nm1.png";
import nm2 from "../../public/nm2.png";

const page = () => {
  return (
    <div>
      <Image src={nm1}></Image>
      <Image src={nm2}></Image>
      RIFF 1<br></br>G ||-------------||<br></br>D ||-------------||<br></br>A
      ||-------------||<br></br>E ||-O-3--5-5----|| <br></br>
      <br></br>
      RIFF2<br></br>G ||-------------||<br></br>D ||-------------||<br></br>A
      ||-O-3--5-5----||<br></br>E ||-------------||<br></br>
      <br></br>
      <a href="https://www.youtube.com/watch?v=o2iyhg7Tij0">youtube</a>
    </div>
  );
};

export default page;
