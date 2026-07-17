import Image from "next/image";

import rIntro from "../../public/rrrintro.png";
import rChorus from "../../public/rrrchorus.png";
import rVerse from "../../public/rrrverse.png";

export default function roots_rock_reggae() {
  return (
    <main className="song-page">
      <div style={{ marginTop: "-4rem", zIndex: 1 }}>
        <Image style={{ zIndex: 1 }} src={rIntro}></Image>
      </div>
      G|-----------------------------|<br></br>
      D|-----------------------------|<br></br>
      A|-------5-------555-----------|<br></br>
      E|--5--7---5--7----------------|<br></br>
      <br></br>
      G|-----------------------------|<br></br>
      D|-----------------------------|<br></br>
      A|-------5-------777-----------|<br></br>
      E|--5--7---5--7----------------|<br></br>
      <Image src={rChorus}></Image>
      <Image src={rVerse}></Image>
    </main>
  );
}
