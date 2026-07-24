// app/page.js

import Link from "next/link";

const songs = [
  { title: "54:46", href: "/54-46" },
  { title: "Bounce", href: "/bounce" },
  { title: "Caution", href: "/caution" },
  { title: "Crazy Baldhead", href: "/crazy-baldhead" },
  { title: "Do It Twice", href: "/do-it-twice" },
  { title: "Do You Love", href: "/do-you-love" },
  { title: "Get Up Stand Up", href: "/get-up-stand-up" },
  { title: "I Shot the Sheriff", href: "/i-shot-the-sheriff" },
  { title: "I Wanna Dance", href: "/i-wanna-dance" },
  { title: "Jah Works", href: "/jah-works" },
  { title: "Johnny Be Good", href: "/johnny-be-good" },
  { title: "Lively Up Yourself", href: "/lively-up-yourself" },
  { title: "New Day", href: "/new-day" },
  { title: "Prithivi", href: "/prithivi" },
  { title: "Red Eyes", href: "/red-eyes" },
  { title: "Reggae Rockers", href: "/reggae-rockers" },
  { title: "Red Gold and Green", href: "/red-gold-and-green" },
  { title: "Roots Rock Reggae", href: "/roots-rock-reggae" },
  { title: "Running Away", href: "/running-away" },
  { title: "Sugar Man", href: "/sugar-man" },
  { title: "This Morning", href: "/this-morning" },
  { title: "Time", href: "/time" },
  { title: "True to Myself", href: "/true-to-myself" },
  { title: "Waiting in Vain", href: "/waiting-in-vain" },
  { title: "World A Reggae Music", href: "/world-a-reggae-music" },
  { title: "Dancing in the Moonlight", href: "/dancing-in-the-moonlight" },
  { title: "King Bee", href: "/king-bee" },
  { title: "Calling Card", href: "/calling-card" },
  { title: "Shes Crazy", href: "/shes-crazy" },
  { title: "Long Train Runnin", href: "/long-train-runnin" },
  { title: "Have a Good Time", href: "/have-a-good-time" },
  { title: "People Say", href: "/people-say" },
];

songs.sort((a, b) => a.title.localeCompare(b.title));

export default function Home() {
  return (
    <main className="song-list-page">
      <h1 className="page-title">Song List</h1>

      <div className="song-list">
        {songs.map((song) => (
          <Link key={song.href} href={song.href} className="song-button">
            {song.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
