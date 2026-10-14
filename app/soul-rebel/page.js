import Image from "next/image";
import React from "react";

import sr1 from "../../public/sr1.png";
import sr2 from "../../public/sr2.png";
const page = () => {
  return (
    <div>
      <Image src={sr1}></Image>
      <Image src={sr2}></Image>
      Intro:<br></br>
      G|---------------------------|<br></br>
      D|---------------------------|
      <br></br>
      A|-4-4-4---2-3-44-44---4---4-|<br></br>
      E|-------4-----------4---4---|<br></br>
      <br></br>
      |----------------------------|<br></br>
      |----------------------------|<br></br>
      |-2-2-2---0-1-22-22---2---2--|<br></br>
      |-------2-----------2---2----|<br></br>
      <p>Intro</p>
      <h3>C#m - B - C#m - B (n.c)</h3>
      <p>Chorus 1</p>
      <h3>C#m - Bmaj7 - C#m - Bmaj7</h3>
      <p>Verse 1</p>
      <h3>B - C#m - E - F# - Bmaj7 - B - C#m - E - F# - Bmaj7</h3>
      <p>Chorus 2</p>
      <h3>C#m - Bmaj7 - C#m - Bmaj7 - C#m - Bmaj7 - C#m - Bmaj7</h3>
      <p>Verse 2</p>
      <h3>B - C#m - E - F# - Bmaj7 - B - C#m - E - F# - Bmaj7</h3>
      <br></br>
      <a href="https://www.youtube.com/watch?v=PoQQYLgy-L0">youtube</a>
    </div>
  );
};

export default page;
