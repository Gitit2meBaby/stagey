import Image from "next/image";

import wr1 from "../../public/wr1.png";
import wr2 from "../../public/wr2.png";
import wr3 from "../../public/wr3.png";
import wr4 from "../../public/wr4.png";
import wr5 from "../../public/wr5.png";

export default function world_a_reggae_music() {
  return (
    <main className="song-page">
      <h2>Slow Vamp The whole time</h2>
      <Image src={wr5}></Image>
      <Image src={wr1}></Image>
      <Image src={wr2}></Image>
      <Image src={wr3}></Image>
      <Image src={wr4}></Image>
    </main>
  );
}
