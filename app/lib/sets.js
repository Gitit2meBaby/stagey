// lib/sets.js

export const ALL_SONGS = [
  { title: "54:46", slug: "54-46" },
  { title: "Bounce", slug: "bounce" },
  { title: "Caution", slug: "caution" },
  { title: "Crazy Baldhead", slug: "crazy-baldhead" },
  { title: "Do It Twice", slug: "do-it-twice" },
  { title: "Do You Love", slug: "do-you-love" },
  { title: "Get Up Stand Up", slug: "get-up-stand-up" },
  { title: "I Shot the Sheriff", slug: "i-shot-the-sheriff" },
  { title: "I Wanna Dance", slug: "i-wanna-dance" },
  { title: "Jah Works", slug: "jah-works" },
  { title: "Johnny Be Good", slug: "johnny-be-good" },
  { title: "Lively Up Yourself", slug: "lively-up-yourself" },
  { title: "New Day", slug: "new-day" },
  { title: "Prithivi", slug: "prithivi" },
  { title: "Red Eyes", slug: "red-eyes" },
  { title: "Reggae Rockers", slug: "reggae-rockers" },
  { title: "Red Gold and Green", slug: "red-gold-and-green" },
  { title: "Roots Rock Reggae", slug: "roots-rock-reggae" },
  { title: "Running Away", slug: "running-away" },
  { title: "Sugar Man", slug: "sugar-man" },
  { title: "This Morning", slug: "this-morning" },
  { title: "Time", slug: "time" },
  { title: "True to Myself", slug: "true-to-myself" },
  { title: "Waiting in Vain", slug: "waiting-in-vain" },
  { title: "World A Reggae Music", slug: "world-a-reggae-music" },
  { title: "Dancing in the Moonlight", slug: "dancing-in-the-moonlight" },
  { title: "King Bee", slug: "king-bee" },
  { title: "Calling Card", slug: "calling-card" },
  { title: "Shes Crazy", slug: "shes-crazy" },
  { title: "Long Train Runnin", slug: "long-train-runnin" },
  { title: "Have a Good Time", slug: "have-a-good-time" },
  { title: "People Say", slug: "people-say" },
];

export function sortedSongs() {
  return [...ALL_SONGS].sort((a, b) => a.title.localeCompare(b.title));
}

function titleToSlug(title) {
  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// Greedily match known song slugs out of the joined song-slug segment,
// longest-slug-first so e.g. "do-it-twice" isn't mistaken for a prefix
// of another slug that happens to start the same way.
function splitSongSlugs(joined) {
  const known = [...ALL_SONGS]
    .map((s) => s.slug)
    .sort((a, b) => b.length - a.length);

  const result = [];
  let remaining = joined;

  while (remaining.length > 0) {
    const match = known.find(
      (slug) => remaining === slug || remaining.startsWith(slug + "-"),
    );
    if (!match) break; // unrecognized leftover — stop rather than guess
    result.push(match);
    remaining = remaining.slice(match.length).replace(/^-/, "");
  }

  return result;
}

export function encodeSetSlug(title, songSlugsInOrder) {
  const titleSlug = titleToSlug(title) || "set";
  const songsPart = songSlugsInOrder.join("-");
  return `${titleSlug}--${songsPart}`;
}

// ---------------------------------------------------------------------
// Saved-sets shortcuts (client-side only)
//
// The set's content always lives in the URL slug — this just remembers
// *which* set links have been created on this device, so the homepage
// can show them as shortcuts instead of the singer re-typing/re-picking
// the same set every night. Safe to call on the server; it no-ops there.
// ---------------------------------------------------------------------
const SAVED_SETS_KEY = "stagey:saved-sets";

export function getSavedSets() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(SAVED_SETS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveSetLink(title, slug) {
  if (typeof window === "undefined") return;
  try {
    const existing = getSavedSets();
    const withoutDupe = existing.filter((s) => s.slug !== slug);
    const updated = [{ title, slug }, ...withoutDupe];
    window.localStorage.setItem(SAVED_SETS_KEY, JSON.stringify(updated));
  } catch {
    // localStorage unavailable (private mode, etc) — fail silently,
    // the set link still works, it just won't show as a shortcut
  }
}

export function decodeSetSlug(slug) {
  const sepIndex = slug.indexOf("--");
  if (sepIndex === -1) {
    return { title: slug, songSlugs: [] };
  }

  const titleSlug = slug.slice(0, sepIndex);
  const songsPart = slug.slice(sepIndex + 2);

  const title = titleSlug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const songSlugs = splitSongSlugs(songsPart);

  const songs = songSlugs
    .map((slug) => ALL_SONGS.find((s) => s.slug === slug))
    .filter(Boolean);

  return { title, songs };
}
