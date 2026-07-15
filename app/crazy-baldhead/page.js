import Image from "next/image";

import baldhead from "../../public/baldhead.png";
export default function crazy_baldhead() {
  return (
    <main className="song-page">
      <h2>One drop</h2>
      <h2>|* - F# - F# - F# -| * - B - AB - A - |</h2>
      <Image src={baldhead}></Image>
    </main>
  );
}
