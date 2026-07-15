import Image from "next/image";

import baldhead from "../../public/baldhead.png";
export default function crazy_baldhead() {
  return (
    <main className="song-page">
      <Image src={baldhead}></Image>
    </main>
  );
}
