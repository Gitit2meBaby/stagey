import React from "react";
import TabBlock from "../components/TabBlock";

/* ===================================================================
   Transcribed directly from the provided ASCII tab (Verse 1, Verse 2,
   Chorus 2 screenshots). Slot grid = 16 slots/bar (4 slots per beat,
   matching the tab's "i i i i" quarter-note markers). Tied/slide
   annotations ( "(7)", "3~" ) are passed through as literal fret
   labels so they render exactly as written in the source tab.
   =================================================================== */

/* ===================== VERSE — shared rows ===================== */
/* Row 1: D7 | D6 D6 | A8 A8 | A7 A7 */
const verseRow1 = {
  bars: 4,
  slotsPerBar: 16,
  chords: [
    { bar: 0, slot: 0, name: "Dm" },
    { bar: 1, slot: 0, name: "E" },
    { bar: 2, slot: 0, name: "Am" },
    { bar: 3, slot: 0, name: "E+" },
  ],
  notes: {
    D: [
      { bar: 0, slot: 0, fret: 7 },
      { bar: 1, slot: 0, fret: 6 },
      { bar: 1, slot: 4, fret: 6 },
    ],
    A: [
      { bar: 2, slot: 0, fret: 8 },
      { bar: 2, slot: 12, fret: 8 },
      { bar: 3, slot: 0, fret: 7 },
      { bar: 3, slot: 4, fret: 7 },
    ],
  },
};

/* Row 2: A5 A5 | D9, A7 A7 | A7(slot14) | D7 D7, A7(slot14) */
const verseRow2 = {
  bars: 4,
  slotsPerBar: 16,
  chords: [
    { bar: 0, slot: 0, name: "F" },
    { bar: 1, slot: 0, name: "E7" },
    { bar: 2, slot: 12, name: "Dm" },
    { bar: 3, slot: 0, name: "E" },
  ],
  notes: {
    A: [
      { bar: 0, slot: 0, fret: 5 },
      { bar: 0, slot: 12, fret: 5 },
      { bar: 1, slot: 0, fret: 7 },
      { bar: 1, slot: 12, fret: 7 },
      { bar: 2, slot: 14, fret: 7 },
      { bar: 3, slot: 14, fret: 7 },
    ],
    D: [{ bar: 1, slot: 4, fret: 9 }],
  },
};

/* Row 3: same as Row 1, but last bar carries tied (7)-(8) at the end */
const verseRow3 = {
  bars: 4,
  slotsPerBar: 16,
  chords: [
    { bar: 0, slot: 0, name: "Dm" },
    { bar: 1, slot: 0, name: "E" },
    { bar: 2, slot: 0, name: "Am" },
    { bar: 3, slot: 0, name: "E+" },
  ],
  notes: {
    D: [
      { bar: 0, slot: 0, fret: 7 },
      { bar: 1, slot: 0, fret: 6 },
      { bar: 1, slot: 4, fret: 6 },
    ],
    A: [
      { bar: 2, slot: 0, fret: 8 },
      { bar: 2, slot: 12, fret: 8 },
      { bar: 3, slot: 0, fret: 7 },
      { bar: 3, slot: 4, fret: 7 },
      { bar: 3, slot: 8, fret: "(7)" },
      { bar: 3, slot: 12, fret: "(8)" },
    ],
  },
};

/* Row 4 (Verse 1 ending): A5 A5 | D9, A7 A7 | D7~ (held) | A2, E3 E5 */
const verseRow4 = {
  bars: 4,
  slotsPerBar: 16,
  chords: [
    { bar: 0, slot: 0, name: "F" },
    { bar: 1, slot: 0, name: "E7" },
    { bar: 2, slot: 0, name: "Dm" },
    { bar: 3, slot: 0, name: "E" },
  ],
  notes: {
    A: [
      { bar: 0, slot: 0, fret: 5 },
      { bar: 0, slot: 12, fret: 5 },
      { bar: 1, slot: 0, fret: 7 },
      { bar: 1, slot: 12, fret: 7 },
      { bar: 3, slot: 12, fret: 2 },
    ],
    D: [
      { bar: 1, slot: 4, fret: 9 },
      { bar: 2, slot: 0, fret: "7~" },
    ],
    E: [
      { bar: 3, slot: 5, fret: 3 },
      { bar: 3, slot: 9, fret: 5 },
    ],
  },
};

/* ===================== VERSE 2 — the rows that differ ===================== */
/* Row 1 variant: bar 3 is D10 instead of A8/A8 */
const verse2Row1 = {
  bars: 4,
  slotsPerBar: 16,
  chords: [
    { bar: 0, slot: 0, name: "Dm" },
    { bar: 1, slot: 0, name: "E" },
    { bar: 2, slot: 0, name: "Am" },
    { bar: 3, slot: 0, name: "E+" },
  ],
  notes: {
    D: [
      { bar: 0, slot: 0, fret: 7 },
      { bar: 1, slot: 0, fret: 6 },
      { bar: 1, slot: 4, fret: 6 },
      { bar: 2, slot: 8, fret: 10 },
    ],
    A: [
      { bar: 3, slot: 0, fret: 7 },
      { bar: 3, slot: 4, fret: 7 },
    ],
  },
};

/* Row 4 variant: bar 3 is a tied (7) instead of "D7~"; bar 4 is D6 D6
   instead of the E-string 3/5 ending */
const verse2Row4 = {
  bars: 4,
  slotsPerBar: 16,
  chords: [
    { bar: 0, slot: 0, name: "F" },
    { bar: 1, slot: 0, name: "E7" },
    { bar: 2, slot: 0, name: "Am" },
    { bar: 3, slot: 0, name: "Dm" },
  ],
  notes: {
    A: [
      { bar: 0, slot: 0, fret: 5 },
      { bar: 0, slot: 12, fret: 5 },
      { bar: 1, slot: 0, fret: 7 },
      { bar: 1, slot: 12, fret: 7 },
      { bar: 2, slot: 13, fret: "(7)" },
    ],
    D: [
      { bar: 1, slot: 4, fret: 9 },
      { bar: 3, slot: 0, fret: 6 },
      { bar: 3, slot: 4, fret: 6 },
    ],
  },
};

/* Row 5: extra 2-bar tail unique to Verse 2 — A5 A5 | D9, D9, A7, A7 */
const verse2Row5 = {
  bars: 2,
  slotsPerBar: 16,
  chords: [
    { bar: 0, slot: 0, name: "Am" },
    { bar: 1, slot: 0, name: "E7" },
  ],
  notes: {
    A: [
      { bar: 0, slot: 0, fret: 5 },
      { bar: 0, slot: 12, fret: 5 },
      { bar: 1, slot: 0, fret: 7 },
      { bar: 1, slot: 8, fret: 7 },
    ],
    D: [
      { bar: 1, slot: 4, fret: 9 },
      { bar: 1, slot: 9, fret: 9 },
    ],
  },
};

/* ===================== CHORUS 2 ===================== */
/* Row 1: A3~...(3) | E5 E5 | A5 A5...(5) | E1 E1 */
const chorus2Row1 = {
  bars: 4,
  slotsPerBar: 16,
  chords: [
    { bar: 0, slot: 0, name: "C" },
    { bar: 1, slot: 0, name: "Am" },
    { bar: 2, slot: 0, name: "D" },
    { bar: 3, slot: 0, name: "F" },
  ],
  notes: {
    A: [
      { bar: 0, slot: 0, fret: "3~" },
      { bar: 0, slot: 12, fret: "(3)" },
      { bar: 2, slot: 0, fret: 5 },
      { bar: 2, slot: 4, fret: 5 },
      { bar: 2, slot: 12, fret: "(5)" },
    ],
    E: [
      { bar: 1, slot: 0, fret: 5 },
      { bar: 1, slot: 4, fret: 5 },
      { bar: 3, slot: 0, fret: 1 },
      { bar: 3, slot: 4, fret: 1 },
    ],
  },
};

/* Row 2: A3 A3...(3) | E5 E5 | ...(5), E1...E1 | A1 A1 */
const chorus2Row2 = {
  bars: 4,
  slotsPerBar: 16,
  chords: [
    { bar: 0, slot: 0, name: "C" },
    { bar: 1, slot: 0, name: "Am" },
    { bar: 2, slot: 0, name: "D" },
    { bar: 3, slot: 0, name: "F" },
  ],
  notes: {
    A: [
      { bar: 0, slot: 0, fret: 3 },
      { bar: 0, slot: 4, fret: 3 },
      { bar: 0, slot: 12, fret: "(3)" },
      { bar: 2, slot: 14, fret: "(5)" },
      { bar: 3, slot: 0, fret: 1 },
      { bar: 3, slot: 4, fret: 1 },
    ],
    E: [
      { bar: 1, slot: 0, fret: 5 },
      { bar: 1, slot: 4, fret: 5 },
      { bar: 2, slot: 0, fret: 1 },
      { bar: 2, slot: 12, fret: 1 },
    ],
  },
};

/* Row 3 (final 2 bars, song ends): D9 | D9, A7...A5 | A7 A7...A7 */
const chorus2Row3 = {
  bars: 2,
  slotsPerBar: 16,
  chords: [
    { bar: 0, slot: 4, name: "D" },
    { bar: 1, slot: 0, name: "Am" },
  ],
  notes: {
    D: [
      { bar: 0, slot: 4, fret: 9 },
      { bar: 1, slot: 8, fret: 9 },
    ],
    A: [
      { bar: 0, slot: 0, fret: 7 },
      { bar: 0, slot: 12, fret: 5 },
      { bar: 1, slot: 0, fret: 7 },
      { bar: 1, slot: 4, fret: 7 },
      { bar: 1, slot: 12, fret: 7 },
    ],
  },
};

const page = () => {
  return (
    <section lang="en">
      <div className="chart">
        <div className="song-head">
          <h1 className="song-title">Sugar Man - Rodriguez</h1>
          <div className="size-ctl">
            <button onclick="resize(-1)">A-</button>
            <button onclick="resize(1)">A+</button>
          </div>
        </div>

        {/* <!-- VERSE 1 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Verse</span>
            <span className="part-reps">×1</span>
          </div>
          <div className="pre-cue">
            Sugar Man won't you hurry, cos I'm tired of these scenes...
          </div>
          <TabBlock {...verseRow1} />
          <TabBlock {...verseRow2} />
          <TabBlock {...verseRow3} />
          <TabBlock {...verseRow4} />
          <div className="cue">
            <span className="arrow">→</span>For a blue coin won't you bring back
            all those colours to my dreams.
          </div>
        </section>

        {/* <!-- CHORUS --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Chorus</span>
            <span className="part-reps">×1</span>
          </div>
          <h2>C - Am - D - F</h2>
        </section>

        {/* <!-- VERSE 2 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Verse</span>
            <span className="part-reps">×1</span>
          </div>
          <div className="pre-cue">
            Sugar Man, met a false friend on a lonely dusty road...
          </div>
          <TabBlock {...verse2Row1} />
          <TabBlock {...verseRow2} />
          <TabBlock {...verseRow1} />
          <TabBlock {...verse2Row4} />
          <TabBlock {...verse2Row5} />
          <div className="cue">
            <span className="arrow">→</span>Lost my heart, when I found it it
            had turned to dead black coal.
          </div>
        </section>

        {/* <!-- CHORUS --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Chorus</span>
            <span className="part-reps">×1</span>
            <h2>C - Am - D - F</h2>
          </div>
        </section>

        {/* <!-- VERSE 3 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Verse</span>
            <span className="part-reps">×1</span>
          </div>
          <div className="pre-cue">
            Sugar Man you're the answer that makes my questions disappear...
          </div>
          <TabBlock {...verseRow1} />
          <TabBlock {...verseRow2} />
          <TabBlock {...verseRow3} />
          <TabBlock {...verseRow4} />
          <div className="cue">
            <span className="arrow">→</span>Sugar Man, cos I'm weary of those
            double games I hear.
          </div>
        </section>

        {/* <!-- INTERLUDE --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Interlude</span>
            <span className="part-reps">×1</span>
          </div>
          <div className="pre-cue">Sugar Man, Sugar Man, Sugar Man...</div>
          <TabBlock {...verseRow1} />
          <div className="cue">
            <span className="arrow">→</span>Sugar Man, Sugar Man, Sugar Man
          </div>
        </section>

        {/* <!-- WEIRD SOLO / BASS FILL --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Solo (bass fill)</span>
            <span className="part-reps">×1</span>
          </div>
          <div className="cue instrumental">
            (weird solo, with bass fill in background, then back to 1st verse —
            bass ends around 2:21)
          </div>
        </section>

        {/* <!-- VERSE 4 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Verse</span>
            <span className="part-reps">×1</span>
          </div>
          <div className="pre-cue">
            Sugar Man won't you hurry, cos I'm tired of these scenes...
          </div>
          <TabBlock {...verseRow1} />
          <TabBlock {...verseRow2} />
          <TabBlock {...verseRow3} />
          <TabBlock {...verseRow4} />
          <div className="cue">
            <span className="arrow">→</span>For a blue coin won't you bring back
            all those colours to my dreams.
          </div>
        </section>

        {/* <!-- CHORUS --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Chorus</span>
            <span className="part-reps">×1</span>
            <h2>C - Am - D - F</h2>
          </div>
        </section>

        {/* <!-- VERSE 5 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Verse</span>
            <span className="part-reps">×1</span>
          </div>
          <div className="pre-cue">
            Sugar Man, met a false friend on a lonely dusty road...
          </div>
          <TabBlock {...verse2Row1} />
          <TabBlock {...verseRow2} />
          <TabBlock {...verseRow1} />
          <TabBlock {...verse2Row4} />
          <TabBlock {...verse2Row5} />
          <div className="cue">
            <span className="arrow">→</span>Lost my heart, when I found it it
            had turned to dead black coal.
          </div>
        </section>

        {/* <!-- CHORUS --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Chorus</span>
            <span className="part-reps">×1</span>
            <h2>C - Am - D - F</h2>
          </div>
        </section>

        {/* <!-- VERSE 6 (fade) --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Verse</span>
            <span className="part-reps">×1</span>
          </div>
          <div className="pre-cue">
            Sugar Man you're the answer that makes my questions disappear...
          </div>
          <TabBlock {...verseRow1} />
          <div className="cue instrumental">(fade)</div>
        </section>
      </div>
    </section>
  );
};

export default page;
