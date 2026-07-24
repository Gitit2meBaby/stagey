import Link from "next/link";
import { decodeSetSlug } from "../../lib/sets";
import SaveSetOnLoad from "./SaveSetOnLoad";
import ShareSetButton from "./ShareSetButton";

export default async function SetPage({ params }) {
  const { slug } = await params;
  const { title, songs } = decodeSetSlug(slug);

  return (
    <main className="song-list-page">
      <SaveSetOnLoad title={title} slug={slug} />

      <div className="flag-rule" />
      <h1 className="page-title">{title}</h1>

      <ShareSetButton title={title} />

      <div className="song-list">
        {songs.map((song, i) => (
          <Link
            key={song.slug}
            href={`/${song.slug}`}
            className="song-button set-pick-button selected"
          >
            <span>{song.title}</span>
            <span className="set-pick-number">{i + 1}</span>
          </Link>
        ))}
      </div>

      {songs.length === 0 && (
        <p className="set-empty-msg">No songs found in this set.</p>
      )}
    </main>
  );
}
