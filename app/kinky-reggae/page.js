import Image from "next/image";
import React from "react";

import kr1 from "../../public/kr1.png";
import kr2 from "../../public/kr2.png";
import kr3 from "../../public/kr3.png";
import kr4 from "../../public/kr4.png";
import kr5 from "../../public/kr5.png";
import kr6 from "../../public/kr6.png";
const page = () => {
  return (
    <div>
      <Image src={kr1}></Image>
      <Image src={kr2}></Image>
      <Image src={kr3}></Image>
      <Image src={kr4}></Image>
      <Image src={kr5}></Image>
      <Image src={kr6}></Image>
      verse play 12 times<br></br>
      G|-------------------|<br></br>
      D|--5----------------|<br></br>
      A|---3-3-033-5-------|<br></br>
      E|-------------3(3)--|<br></br>
      <br></br>
      bridge play 2 times<br></br>
      G|-------------------------------------|<br></br>
      D|-------------------10----------------|<br></br>
      A|-------------8-8-8----8--------------|<br></br>
      E|--35-5-355--8------------35-7-8-7-5--|<br></br>
      <br></br>
      chorus play 4 times<br></br>
      G|--------------------------------|<br></br>
      D|--------------------------------|<br></br>
      A|-------------------75----3-3----|<br></br>
      E|--5-5-35---5588-8----8-35----5--|<br></br>
      <br></br>
      <a href="https://www.youtube.com/watch?v=LVMZ7yBZXB0">youtube</a>
    </div>
  );
};

export default page;
