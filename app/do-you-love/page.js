import Image from "next/image";

import love from "../../public/doyoulove.png";
export default function do_you_love() {
  return (
    <main className="song-page">
      <h1> Just funk out</h1>
      <Image src={love}></Image>
    </main>
  );
}
