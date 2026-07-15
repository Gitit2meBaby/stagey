import React from "react";
import TabBlock from "../components/TabBlock";

// Main riff: bar 1 vamps on Gm on the E string (root 3=G, bounce to Bb at
// 6, up to D at 5). Bar 2 is the Cm riff on the A string (root 3=C).
const mainRiff = {
  bars: 2,
  slotsPerBar: 16,
  chords: [
    { bar: 0, slot: 0, name: "Gm" },
    { bar: 1, slot: 0, name: "Cm" },
  ],
  notes: {
    E: [
      { bar: 0, slot: 0, fret: 3 },
      { bar: 0, slot: 2, fret: 3 },
      { bar: 0, slot: 5, fret: 3 },
      { bar: 0, slot: 7, fret: 6 },
      { bar: 0, slot: 9, fret: 6 },
      { bar: 0, slot: 12, fret: 5 },
      { bar: 0, slot: 14, fret: 5 },
    ],
    A: [
      { bar: 1, slot: 0, fret: 3 },
      { bar: 1, slot: 2, fret: 3 },
      { bar: 1, slot: 5, fret: 3 },
      { bar: 1, slot: 7, fret: 3 },
      { bar: 1, slot: 12, fret: 5 },
      { bar: 1, slot: 14, fret: 3 },
    ],
  },
};

// Other section: simple 3-note vamp, half a bar on Gm (E string), half on
// Cm (A string).
const vampBlock = {
  bars: 1,
  slotsPerBar: 16,
  chords: [
    { bar: 0, slot: 0, name: "Gm" },
    { bar: 0, slot: 8, name: "Cm" },
  ],
  notes: {
    E: [
      { bar: 0, slot: 0, fret: 3 },
      { bar: 0, slot: 2, fret: 3 },
      { bar: 0, slot: 5, fret: 3 },
    ],
    A: [
      { bar: 0, slot: 8, fret: 3 },
      { bar: 0, slot: 10, fret: 3 },
      { bar: 0, slot: 13, fret: 3 },
    ],
  },
};

const page = () => {
  return (
    <section lang="en">
      <div className="chart">
        <div className="song-head">
          <h1 className="song-title">Running Away - Bob Marley</h1>
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
          <TabBlock {...mainRiff} />
          <div className="cue instrumental">(instrumental)</div>
        </section>

        {/* <!-- CHORUS 1 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Chorus</span>
            <span className="part-reps">×8</span>
          </div>
          <div className="pre-cue">Ya running and ya running...</div>
          <TabBlock {...vampBlock} />
          <div className="cue">
            <span className="arrow">→</span>Can't run away from yourself.
          </div>
        </section>

        {/* <!-- VERSE 1 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Verse</span>
            <span className="part-reps">×8</span>
          </div>
          <div className="pre-cue">Ya must have done (must have done)...</div>
          <TabBlock {...mainRiff} />
          <div className="cue">
            <span className="arrow">→</span>Who feels it knows it, Lord.
          </div>
        </section>

        {/* <!-- CHORUS 2 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Chorus</span>
            <span className="part-reps">×8</span>
          </div>
          <div className="pre-cue">Ya running and ya running...</div>
          <TabBlock {...vampBlock} />
          <div className="cue">
            <span className="arrow">→</span>Yeah-eah-eah-eah - from yourself.
          </div>
        </section>

        {/* <!-- VERSE 2 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Verse</span>
            <span className="part-reps">×8</span>
          </div>
          <div className="pre-cue">Brr - you must have done somet'in'...</div>
          <TabBlock {...mainRiff} />
          <div className="cue">
            <span className="arrow">→</span>'Cause (Running Away) I'm not
            Running Away, ooh!
          </div>
        </section>

        {/* <!-- OUTRO --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Outro</span>
            <span className="part-reps">×8</span>
          </div>
          <div className="pre-cue">
            (Running Away) I've got to protect my life...
          </div>
          <TabBlock {...mainRiff} />
          <div className="cue">
            <span className="arrow">→</span>I am not (Running Away) away.
          </div>
        </section>
      </div>
    </section>
  );
};

export default page;
