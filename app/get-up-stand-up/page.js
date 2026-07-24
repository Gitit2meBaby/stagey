import React from "react";
import TabBlock from "../components/TabBlock";

// Intro tab (2 bars, repeated) — used for both the Intro and every Chorus,
// since the chord sheet confirms the "intro" chant is the same "Get up,
// stand up" chorus lyric/chord pattern (Bm F#m Bm F#m) as the later choruses.
const introChorusBlock = {
  bars: 2,
  slotsPerBar: 16,
  chords: [
    { bar: 0, slot: 0, name: "Bm" },
    { bar: 0, slot: 8, name: "F#m" },
    { bar: 1, slot: 0, name: "Bm" },
    { bar: 1, slot: 8, name: "F#m" },
  ],
  notes: {
    E: [
      { bar: 0, slot: 3, fret: 6 },
      { bar: 0, slot: 7, fret: 6 },
      { bar: 0, slot: 11, fret: 8 },
      { bar: 1, slot: 3, fret: 6 },
      { bar: 1, slot: 7, fret: 6 },
    ],
  },
};

// Verse tab (2 bars, repeated) — "Preacher man..." / "Most people
// think..." / "We sick an' tired..." verses. Bm (F#m) per the chord
// sheet's alternating pattern; (8) marks a let-ring note held from bar
// start.
const verseBlock = {
  bars: 2,
  slotsPerBar: 16,
  chords: [
    { bar: 0, slot: 0, name: "Bm" },
    { bar: 1, slot: 0, name: "(F#m)" },
  ],
  notes: {
    G: [{ bar: 0, slot: 8, fret: "(8)" }],
    D: [
      { bar: 0, slot: 5, fret: 5 },
      { bar: 1, slot: 5, fret: 5 },
      { bar: 1, slot: 12, fret: 5 },
    ],
    A: [
      { bar: 0, slot: 2, fret: 6 },
      { bar: 0, slot: 4, fret: 8 },
      { bar: 1, slot: 2, fret: 6 },
      { bar: 1, slot: 4, fret: 8 },
    ],
    E: [
      { bar: 0, slot: 1, fret: 8 },
      { bar: 0, slot: 9, fret: 8 },
      { bar: 1, slot: 1, fret: 8 },
      { bar: 1, slot: 9, fret: 8 },
    ],
  },
};

const page = () => {
  return (
    <section lang="en">
      <div className="chart">
        <div className="song-head">
          <h1 className="song-title">Get Up Stand Up - Bob Marley</h1>
          <h2>Funk version in B</h2>
          <h2>dont forget it in B!!!</h2>
          <h2> Chromatic walk every 2 towrards end!</h2>
          <div className="size-ctl">
            <button onclick="resize(-1)">A-</button>
            <button onclick="resize(1)">A+</button>
          </div>
        </div>

        {/* <!-- INTRO --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Intro</span>
            <span className="part-reps">×4</span>
          </div>
          <TabBlock {...introChorusBlock} />
          <div className="cue instrumental">
            Get up, stand up: stand up for your rights! (x4)
          </div>
        </section>

        {/* <!-- VERSE 1 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Verse</span>
            <span className="part-reps">×8</span>
          </div>
          <div className="pre-cue">Preacher man, don't tell me...</div>
          <TabBlock {...verseBlock} />
          <div className="cue">
            <span className="arrow">→</span>Stand up for your rights, come on!
          </div>
        </section>

        {/* <!-- CHORUS 1 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Chorus</span>
            <span className="part-reps">×4</span>
          </div>
          <div className="pre-cue">
            Get up, stand up: stand up for your rights!
          </div>
          <pre className="tab">
            G|--------------------------------------------|<br></br>
            D|--------5--------------5--------------------|<br></br>
            A|----------6-5653-----3----------------------|<br></br>
            E|--68-----------------------3--6-8-----------|<br></br>
          </pre>

          <pre className="tab">
            G|---------------------------------------|<br></br>
            D|--------5--------------------5-3h5p3---|<br></br>
            A|-------------6-5653-----3333-----------|<br></br>
            E|------------------------------------6-8|<br></br>
          </pre>
          <div className="cue">
            <span className="arrow">→</span>Get up, stand up: don't give up the
            fight!
          </div>
        </section>

        {/* <!-- VERSE 2 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Verse</span>
            <span className="part-reps">×8</span>
          </div>
          <div className="pre-cue">Most people think...</div>
          <TabBlock {...verseBlock} />
          <div className="cue">
            <span className="arrow">→</span>You stand up for your rights. Jah!
          </div>
        </section>

        {/* <!-- CHORUS 2 (call and response) --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Chorus</span>
            <span className="part-reps">×8</span>
          </div>
          <div className="pre-cue">Get up, stand up! (Jah, jah!)</div>
          <TabBlock {...introChorusBlock} />
          <div className="cue">
            <span className="arrow">→</span>Don't give up the fight! (yeah!)
          </div>
        </section>

        {/* <!-- VERSE 3 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Verse</span>
            <span className="part-reps">×8</span>
          </div>
          <div className="pre-cue">
            We sick an' tired-a your ism-skism game...
          </div>
          <TabBlock {...verseBlock} />
          <div className="cue">
            <span className="arrow">→</span>We gonna stand up for our rights!
            (yeah, yeah, yeah!)
          </div>
        </section>

        {/* <!-- OUTRO CHORUS (extended, call and response to fade) --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Chorus</span>
            <span className="part-reps">×12</span>
          </div>
          <div className="pre-cue">
            So you better: Get up, stand up! (in the morning! git it up!)
          </div>
          <TabBlock {...introChorusBlock} />
          <div className="cue">
            <span className="arrow">→</span>Stand up for your rights! Get up,
            stand up! Don't give up the fight!
          </div>
        </section>
      </div>
    </section>
  );
};

export default page;
