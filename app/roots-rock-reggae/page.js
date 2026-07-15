import Image from "next/image";

import rIntro from "../../public/rrrintro.png";
import rIntro2 from "../../public/rrrintro2.png";
import rChorus from "../../public/rrrchorus.png";
import rVerse from "../../public/rrrverse.png";

export default function roots_rock_reggae() {
  return (
    <main className="song-page">
      <h1>Roots Rock Reggae</h1>
      <Image src={rIntro}></Image>
      <Image src={rIntro2}></Image>
      <Image src={rChorus}></Image>
      <Image src={rVerse}></Image>
    </main>
  );
}
