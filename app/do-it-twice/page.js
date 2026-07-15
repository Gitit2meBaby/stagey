import Image from "next/image";

import once from "../../public/doit.png";
import twice from "../../public/doit2.png";

export default function do_it_twice() {
  return (
    <main className="song-page">
      <pre className="tab">
        G|------------------------(1)------------------|<br></br>
        D|------------------(5)------------------------|<br></br>
        A|-------------(5)-----------------------------|<br></br>
        E|---(1)---------------------------------------|<br></br>
      </pre>

      <Image src={once}></Image>
      <Image src={twice}></Image>
    </main>
  );
}
