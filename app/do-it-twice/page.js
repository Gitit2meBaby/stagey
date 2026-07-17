import Image from "next/image";

import once from "../../public/doit.png";
import twice from "../../public/doit2.png";

export default function do_it_twice() {
  return (
    <main className="song-page">
      <Image src={once}></Image>
      <Image src={twice}></Image>
    </main>
  );
}
