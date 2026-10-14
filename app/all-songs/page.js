// app/all-songs/page.js

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

  // Additional songs
  { title: "Them Belly Full", href: "/them-belly-full" },
  { title: "Burnin' and Lootin'", href: "/burnin-and-lootin" },
  { title: "Ganja Gun", href: "/ganja-gun" },
  { title: "Exodus", href: "/exodus" },
  { title: "No More Trouble", href: "/no-more-trouble" },
  { title: "War", href: "/war" },
  { title: "Kinky Reggae", href: "/kinky-reggae" },
  { title: "Midnight Ravers", href: "/midnight-ravers" },
  { title: "All Day All Night", href: "/all-day-all-night" },
  { title: "Fussing and Fighting", href: "/fussing-and-fighting" },
  { title: "Natural Mystic", href: "/natural-mystic" },
  { title: "Soul Rebel", href: "/soul-rebel" },
  { title: "No Woman, No Cry", href: "/no-woman-no-cry" },
  { title: "Redemption Song", href: "/redemption-song" },
  { title: "Coming in from the Cold", href: "/coming-in-from-the-cold" },
  { title: "Rock It Baby", href: "/rock-it-baby" },
  { title: "Stir It Up", href: "/stir-it-up" },
  { title: "One Love", href: "/one-love" },
  { title: "Buffalo Soldier", href: "/buffalo-soldier" },
  { title: "Positive Vibration", href: "/positive-vibration" },
  { title: "Natty Dread", href: "/natty-dread" },
  { title: "Ambush in the Night", href: "/ambush-in-the-night" },
];

songs.sort((a, b) => a.title.localeCompare(b.title));

export default function AllSongsPage() {
  return (
    <main className="song-list-page">
      <div className="flag-rule" />
      <h1 className="page-title">All Songs</h1>

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
