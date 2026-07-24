"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getSavedSets } from "./lib/sets";

export default function Home() {
  const [savedSets, setSavedSets] = useState([]);

  useEffect(() => {
    setSavedSets(getSavedSets());
  }, []);

  return (
    <main className="song-list-page">
      <div className="flag-rule" />
      <h1 className="page-title">Stagey</h1>

      <div className="home-actions">
        <Link href="/new-set" className="song-button new-set-button">
          + New Set
        </Link>
        <Link href="/all-songs" className="song-button all-songs-button">
          All Songs
        </Link>
      </div>

      {savedSets.length > 0 && (
        <>
          <h2 className="section-label">Saved Sets</h2>
          <div className="song-list">
            {savedSets.map((set) => (
              <Link
                key={set.slug}
                href={`/sets/${set.slug}`}
                className="song-button"
              >
                {set.title}
              </Link>
            ))}
          </div>
        </>
      )}

      {savedSets.length === 0 && (
        <p className="set-empty-msg">
          No saved sets yet — tap &quot;+ New Set&quot; to build one.
        </p>
      )}
    </main>
  );
}
