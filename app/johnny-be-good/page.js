import React from "react";
import TabBlock from "../components/TabBlock";

// Bass tab source: "Johnny B.Goode" by Peter Tosh, tabbed by mattydread2@yahoo.com
// Tuning per source sheet: D G B E (bass), strings shown top-to-bottom as G D A E.
// Each block's slotsPerBar equals the exact character width of that section in
// the source tab, and each note's slot equals its exact character column, so
// the on-screen grid is a direct 1:1 mirror of the original ASCII tab.

const introBlock = {
  bars: 1,
  slotsPerBar: 57,
  chords: [],
  notes: {
    A: [
      { bar: 0, slot: 2, fret: 7 },
      { bar: 0, slot: 3, fret: 7 },
      { bar: 0, slot: 6, fret: 7 },
      { bar: 0, slot: 7, fret: 7 },
      { bar: 0, slot: 13, fret: 7 },
      { bar: 0, slot: 14, fret: 7 },
      { bar: 0, slot: 17, fret: 7 },
      { bar: 0, slot: 18, fret: 7 },
      { bar: 0, slot: 26, fret: 7 },
      { bar: 0, slot: 27, fret: 7 },
      { bar: 0, slot: 30, fret: 7 },
      { bar: 0, slot: 31, fret: 7 },
      { bar: 0, slot: 37, fret: 7 },
      { bar: 0, slot: 38, fret: 7 },
      { bar: 0, slot: 41, fret: 7 },
      { bar: 0, slot: 42, fret: 7 },
      { bar: 0, slot: 46, fret: 10 },
      { bar: 0, slot: 50, fret: 9 },
    ],
    E: [
      { bar: 0, slot: 4, fret: 7 },
      { bar: 0, slot: 5, fret: 7 },
      { bar: 0, slot: 15, fret: 7 },
      { bar: 0, slot: 16, fret: 7 },
      { bar: 0, slot: 19, fret: 7 },
      { bar: 0, slot: 20, fret: "5\\" },
      { bar: 0, slot: 28, fret: 7 },
      { bar: 0, slot: 29, fret: 7 },
      { bar: 0, slot: 39, fret: 7 },
      { bar: 0, slot: 40, fret: 7 },
      { bar: 0, slot: 53, fret: 10 },
    ],
  },
};

const verseBlock = {
  bars: 1,
  slotsPerBar: 32,
  chords: [],
  notes: {
    A: [
      { bar: 0, slot: 4, fret: 7 },
      { bar: 0, slot: 8, fret: 7 },
      { bar: 0, slot: 12, fret: 5 },
      { bar: 0, slot: 13, fret: 5 },
      { bar: 0, slot: 14, fret: 5 },
      { bar: 0, slot: 20, fret: 7 },
      { bar: 0, slot: 24, fret: 7 },
    ],
    E: [
      { bar: 0, slot: 2, fret: 0 },
      { bar: 0, slot: 3, fret: 7 },
      { bar: 0, slot: 6, fret: 0 },
      { bar: 0, slot: 7, fret: 7 },
      { bar: 0, slot: 10, fret: 0 },
      { bar: 0, slot: 11, fret: 5 },
      { bar: 0, slot: 18, fret: 0 },
      { bar: 0, slot: 19, fret: 7 },
      { bar: 0, slot: 22, fret: 0 },
      { bar: 0, slot: 23, fret: 7 },
      { bar: 0, slot: 26, fret: 0 },
      { bar: 0, slot: 27, fret: 3 },
      { bar: 0, slot: 28, fret: 5 },
      { bar: 0, slot: 29, fret: 5 },
    ],
  },
};

const chorusBlock = {
  bars: 1,
  slotsPerBar: 48,
  chords: [],
  notes: {
    A: [
      { bar: 0, slot: 2, fret: 7 },
      { bar: 0, slot: 3, fret: 7 },
      { bar: 0, slot: 6, fret: 7 },
      { bar: 0, slot: 7, fret: 7 },
      { bar: 0, slot: 13, fret: 7 },
      { bar: 0, slot: 14, fret: 7 },
      { bar: 0, slot: 17, fret: 7 },
      { bar: 0, slot: 18, fret: 7 },
      { bar: 0, slot: 26, fret: 7 },
      { bar: 0, slot: 27, fret: 7 },
      { bar: 0, slot: 30, fret: 7 },
      { bar: 0, slot: 31, fret: 7 },
      { bar: 0, slot: 37, fret: 7 },
      { bar: 0, slot: 38, fret: 7 },
      { bar: 0, slot: 41, fret: 7 },
      { bar: 0, slot: 42, fret: 7 },
    ],
    E: [
      { bar: 0, slot: 4, fret: 7 },
      { bar: 0, slot: 5, fret: 7 },
      { bar: 0, slot: 15, fret: 7 },
      { bar: 0, slot: 16, fret: 7 },
      { bar: 0, slot: 19, fret: 7 },
      { bar: 0, slot: 20, fret: "5\\" },
      { bar: 0, slot: 28, fret: 7 },
      { bar: 0, slot: 29, fret: 7 },
      { bar: 0, slot: 39, fret: 7 },
      { bar: 0, slot: 40, fret: 7 },
      { bar: 0, slot: 43, fret: 7 },
      { bar: 0, slot: 44, fret: "5\\" },
    ],
  },
};

const soloBlock = {
  bars: 1,
  slotsPerBar: 30,
  chords: [],
  notes: {
    D: [
      { bar: 0, slot: 5, fret: 5 },
      { bar: 0, slot: 7, fret: 4 },
      { bar: 0, slot: 21, fret: 7 },
      { bar: 0, slot: 25, fret: 5 },
    ],
    A: [
      { bar: 0, slot: 2, fret: 7 },
      { bar: 0, slot: 8, fret: 7 },
      { bar: 0, slot: 10, fret: 5 },
      { bar: 0, slot: 14, fret: 7 },
      { bar: 0, slot: 18, fret: 7 },
      { bar: 0, slot: 22, fret: 7 },
      { bar: 0, slot: 26, fret: 5 },
    ],
    E: [
      { bar: 0, slot: 4, fret: 7 },
      { bar: 0, slot: 14, fret: 7 },
      { bar: 0, slot: 18, fret: 7 },
    ],
  },
};

const endOfSoloBlock = {
  bars: 1,
  slotsPerBar: 31,
  chords: [],
  notes: {
    D: [
      { bar: 0, slot: 5, fret: 5 },
      { bar: 0, slot: 7, fret: 4 },
    ],
    A: [
      { bar: 0, slot: 2, fret: 7 },
      { bar: 0, slot: 9, fret: 7 },
      { bar: 0, slot: 11, fret: 5 },
      { bar: 0, slot: 15, fret: 7 },
      { bar: 0, slot: 19, fret: 7 },
    ],
    E: [
      { bar: 0, slot: 4, fret: 7 },
      { bar: 0, slot: 14, fret: 7 },
      { bar: 0, slot: 18, fret: 7 },
      { bar: 0, slot: 22, fret: "(3)" },
      { bar: 0, slot: 26, fret: "(5)" },
    ],
  },
};

const playoutBlock = {
  bars: 1,
  slotsPerBar: 31,
  chords: [],
  notes: {
    D: [
      { bar: 0, slot: 5, fret: 5 },
      { bar: 0, slot: 7, fret: 4 },
      { bar: 0, slot: 21, fret: 7 },
      { bar: 0, slot: 25, fret: 5 },
    ],
    A: [
      { bar: 0, slot: 2, fret: 7 },
      { bar: 0, slot: 8, fret: 7 },
      { bar: 0, slot: 10, fret: 5 },
      { bar: 0, slot: 14, fret: 7 },
      { bar: 0, slot: 18, fret: 7 },
      { bar: 0, slot: 22, fret: 7 },
      { bar: 0, slot: 26, fret: 5 },
    ],
    E: [
      { bar: 0, slot: 4, fret: 7 },
      { bar: 0, slot: 14, fret: 7 },
      { bar: 0, slot: 18, fret: 7 },
    ],
  },
};

const page = () => {
  return (
    <section lang="en">
      <div className="chart">
        <div className="song-head">
          <h1 className="song-title">Johnny B Goode - Peter Tosh</h1>
          <div className="size-ctl">
            <button onclick="resize(-1)">A-</button>
            <button onclick="resize(1)">A+</button>
          </div>
        </div>

        {/* <!-- INTRO --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Intro</span>
            <span className="part-reps">×1</span>
          </div>
          <TabBlock {...introBlock} />
          <div className="cue instrumental">(instrumental)</div>
        </section>

        {/* <!-- VERSE 1 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Verse 1</span>
            <span className="part-reps">(repeat)</span>
          </div>
          <div className="pre-cue">
            Deep down in Jamaica close to Mandeville...
          </div>
          <TabBlock {...verseBlock} />
          <div className="cue">
            <span className="arrow">→</span>But he could play his guitar like
            ringing a bell yell.
          </div>
        </section>

        {/* <!-- CHORUS 1 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Chorus</span>
            <span className="part-reps">(repeat)</span>
          </div>
          <div className="pre-cue">
            He said GO! (Go Johnny!) Johnny B. Goode tonight! Yeah...
          </div>
          <TabBlock {...chorusBlock} />
          <div className="cue">
            <span className="arrow">→</span>He said GO! (Go Johnny!) Johnny B.
            Goode.
          </div>
        </section>

        {/* <!-- VERSE 2 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Verse 2</span>
            <span className="part-reps">(repeat)</span>
          </div>
          <div className="pre-cue">
            He used to carry his guitar in a gunny sack...
          </div>
          <TabBlock {...verseBlock} />
          <div className="cue">
            <span className="arrow">→</span>Oh my oh my what the boy can play.
          </div>
        </section>

        {/* <!-- CHORUS 2 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Chorus</span>
            <span className="part-reps">(repeat)</span>
          </div>
          <div className="pre-cue">
            He said GO! (Go Johnny!) Johnny B. Goode tonight! Yeah...
          </div>
          <TabBlock {...chorusBlock} />
          <div className="cue">
            <span className="arrow">→</span>Said oh! (Go Johnny!) Johnny B.
            Goode.
          </div>
        </section>

        {/* <!-- GUITAR SOLO --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Guitar Solo</span>
            <span className="part-reps">(repeat)</span>
          </div>
          <TabBlock {...soloBlock} />
          <div className="cue instrumental">(instrumental)</div>
        </section>

        {/* <!-- END OF SOLO, BRINGS BACK TO VERSE --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">End of Solo</span>
            <span className="part-reps">×1</span>
          </div>
          <TabBlock {...endOfSoloBlock} />
          <div className="cue instrumental">
            (instrumental — leads back to verse)
          </div>
        </section>

        {/* <!-- VERSE 3 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Verse 3</span>
            <span className="part-reps">(repeat)</span>
          </div>
          <div className="pre-cue">Mama said son you gotta be a man...</div>
          <TabBlock {...verseBlock} />
          <div className="cue">
            <span className="arrow">→</span>Saying Johnny, Johnny B. Goode
            tonight.
          </div>
        </section>

        {/* <!-- CHORUS 3 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Chorus</span>
            <span className="part-reps">(repeat)</span>
          </div>
          <div className="pre-cue">
            He said GO! (Go Johnny!) Johnny B. Goode tonight! Yeah...
          </div>
          <TabBlock {...chorusBlock} />
          <div className="cue">
            <span className="arrow">→</span>I said GO! (Go Johnny!) Johnny B.
            Goode tonight! You can hear him play....
          </div>
        </section>

        {/* <!-- PLAY OUT WITH GUITAR SOLO RIFF --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Play Out</span>
            <span className="part-reps">(repeat, fade)</span>
          </div>
          <TabBlock {...playoutBlock} />
          <div className="cue instrumental">(fade)</div>
        </section>
      </div>
    </section>
  );
};

export default page;
