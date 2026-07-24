"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { sortedSongs, encodeSetSlug } from "../lib/sets";

const songs = sortedSongs();

export default function NewSetPage() {
  const router = useRouter();
  const [setTitle, setSetTitle] = useState("");
  const [order, setOrder] = useState([]); // array of song slugs, in tap order

  function toggleSong(slug) {
    setOrder((prev) => {
      if (prev.includes(slug)) {
        return prev.filter((s) => s !== slug);
      }
      return [...prev, slug];
    });
  }

  function handleCreateSet() {
    if (order.length === 0) return;
    const title = setTitle.trim() || "Untitled Set";
    const slug = encodeSetSlug(title, order);
    router.push(`/sets/${slug}`);
  }

  return (
    <main className="song-list-page">
      <div className="flag-rule" />
      <h1 className="page-title">New Set</h1>

      <input
        type="text"
        className="set-title-input"
        placeholder="Set name (e.g. Friday Gig)"
        value={setTitle}
        onChange={(e) => setSetTitle(e.target.value)}
      />

      <div className="song-list">
        {songs.map((song) => {
          const position = order.indexOf(song.slug);
          const selected = position !== -1;
          return (
            <button
              key={song.slug}
              type="button"
              onClick={() => toggleSong(song.slug)}
              className={`song-button set-pick-button${selected ? " selected" : ""}`}
            >
              <span>{song.title}</span>
              {selected && (
                <span className="set-pick-number">{position + 1}</span>
              )}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        className="create-set-button"
        disabled={order.length === 0}
        onClick={handleCreateSet}
      >
        Create Set
      </button>
    </main>
  );
}
