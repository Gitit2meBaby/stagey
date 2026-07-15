import React from "react";
import TabBlock from "../components/TabBlock";

// Main riff — played throughout most of the song. 2 bars, 16 slots/bar.
// Chord label(s) swapped per instance depending on what the chord sheet
// shows at that point (G7 only in the intro, G7->C7 everywhere else).
const mainRiffNotes = {
  bars: 2,
  slotsPerBar: 16,
  notes: {
    D: [
      { bar: 0, slot: 0, fret: 5 },
      { bar: 0, slot: 2, fret: 5 },
      { bar: 0, slot: 4, fret: 5 },
      { bar: 0, slot: 6, fret: 3 },
      { bar: 1, slot: 1, fret: 3 },
    ],
    A: [
      { bar: 0, slot: 8, fret: 5 },
      { bar: 0, slot: 10, fret: 3 },
      { bar: 0, slot: 11, fret: 3 },
      { bar: 0, slot: 14, fret: 3 },
      { bar: 0, slot: 15, fret: 5 },
    ],
  },
};

const mainRiffG7 = {
  ...mainRiffNotes,
  chords: [{ bar: 0, slot: 0, name: "G7" }],
};

const mainRiffG7C7 = {
  ...mainRiffNotes,
  chords: [
    { bar: 0, slot: 0, name: "G7" },
    { bar: 1, slot: 0, name: "C7" },
  ],
};

// D7 vamp for the bridge "Give it/Noh" chant — no dedicated tab was given
// for this part; it's inferred as a continuation of the giveItToMe2 run
// below (see notes in chat).
const mainRiffD7 = {
  ...mainRiffNotes,
  chords: [{ bar: 0, slot: 0, name: "D7" }],
};

// "You give it to me one/two/three/four times" build-up, first pass —
// escalating hit count per bar (1, 2, 3, 4 hits), all on the A string.
const giveItToMe1 = {
  bars: 4,
  slotsPerBar: 8,
  chords: [{ bar: 0, slot: 0, name: "C7" }],
  notes: {
    A: [
      { bar: 0, slot: 1, fret: 3 },
      { bar: 1, slot: 0, fret: 3 },
      { bar: 1, slot: 1, fret: 3 },
      { bar: 2, slot: 0, fret: 3 },
      { bar: 2, slot: 1, fret: 3 },
      { bar: 2, slot: 2, fret: 3 },
      { bar: 3, slot: 0, fret: 3 },
      { bar: 3, slot: 1, fret: 3 },
      { bar: 3, slot: 2, fret: 3 },
      { bar: 3, slot: 3, fret: 3 },
    ],
  },
};

// Second pass, leading into the bridge — the "three times/four times" bars
// become one continuous 8-note run at fret 5, matching the chord sheet's
// switch to D7 under "Give it Give it Give it Give it".
const giveItToMe2 = {
  bars: 4,
  slotsPerBar: 8,
  chords: [
    { bar: 0, slot: 0, name: "C7" },
    { bar: 2, slot: 0, name: "D7" },
  ],
  notes: {
    A: [
      { bar: 0, slot: 1, fret: 3 },
      { bar: 1, slot: 0, fret: 3 },
      { bar: 1, slot: 1, fret: 3 },
      { bar: 2, slot: 0, fret: 5 },
      { bar: 2, slot: 1, fret: 5 },
      { bar: 2, slot: 2, fret: 5 },
      { bar: 2, slot: 3, fret: 5 },
      { bar: 3, slot: 0, fret: 5 },
      { bar: 3, slot: 1, fret: 5 },
      { bar: 3, slot: 2, fret: 5 },
      { bar: 3, slot: 3, fret: 5 },
    ],
  },
};

// D7 vamp continuing the fret-5 run under "Give it Noh Noh Noh / Noh Oh".
const d7Vamp = {
  bars: 2,
  slotsPerBar: 8,
  chords: [{ bar: 0, slot: 0, name: "D7" }],
  notes: {
    A: [
      { bar: 0, slot: 0, fret: 5 },
      { bar: 0, slot: 1, fret: 5 },
      { bar: 0, slot: 2, fret: 5 },
      { bar: 0, slot: 3, fret: 5 },
      { bar: 1, slot: 0, fret: 5 },
      { bar: 1, slot: 1, fret: 5 },
      { bar: 1, slot: 2, fret: 5 },
      { bar: 1, slot: 3, fret: 5 },
    ],
  },
};

const page = () => {
  return (
    <section lang="en">
      <div className="chart">
        <div className="song-head">
          <h1 className="song-title">
            54-46 Was My Number - Toots and The Maytals
          </h1>
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
          <div className="pre-cue">Stick it up, mister!</div>
          <TabBlock {...mainRiffG7} />
          <div className="cue">
            <span className="arrow">→</span>And you will get no hurt, mister, no
            no no.
          </div>
        </section>

        {/* <!-- CALL AND RESPONSE 1 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">I said yeah</span>
            <span className="part-reps">×4</span>
          </div>
          <div className="pre-cue">I said yeah (I said yeah)...</div>
          <TabBlock {...mainRiffG7C7} />
          <div className="cue">
            <span className="arrow">→</span>Listen what they say (listen what
            they say).
          </div>
        </section>

        {/* <!-- VERSE --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Verse</span>
            <span className="part-reps">×12</span>
          </div>
          <div className="pre-cue">
            Do you believe I would take such a thing with me...
          </div>
          <TabBlock {...mainRiffG7C7} />
          <div className="cue">
            <span className="arrow">→</span>They were wrong (ooh yeah).
          </div>
        </section>

        {/* <!-- PRE-CHORUS (build-up 1) --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Pre-chorus</span>
            <span className="part-reps">×1</span>
          </div>
          <div className="pre-cue">You give it to me one time (huh)...</div>
          <TabBlock {...giveItToMe1} />
          <div className="cue">
            <span className="arrow">→</span>You give it to me four times
            (huh-huh-huh-huh).
          </div>
        </section>

        {/* <!-- CHORUS 1 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Chorus</span>
            <span className="part-reps">×4</span>
          </div>
          <div className="pre-cue">54-46 was my number, eeeeehh...</div>
          <TabBlock {...mainRiffG7C7} />
          <div className="cue">
            <span className="arrow">→</span>Right now, someone else has that
            number.
          </div>
        </section>

        {/* <!-- CALL AND RESPONSE 2 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">I said yeah</span>
            <span className="part-reps">×4</span>
          </div>
          <div className="pre-cue">I said yeah (I said yeah)...</div>
          <TabBlock {...mainRiffG7C7} />
          <div className="cue">
            <span className="arrow">→</span>Listen what they say (listen what
            they say).
          </div>
        </section>

        {/* <!-- SOLO 1 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Solo</span>
            <span className="part-reps">×2</span>
          </div>
          <div className="pre-cue">
            I gotta tipitipitipitii aniani
            yay-yay-yay-yay-yay-hubadidadabadedah-deah... (Scat)
          </div>
          <TabBlock {...mainRiffG7C7} />
          <div className="cue instrumental">(scat continues)</div>
        </section>

        {/* <!-- BRIDGE BUILD-UP (second pass, into D7) --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Bridge</span>
            <span className="part-reps">×1</span>
          </div>
          <div className="pre-cue">You give it to me one time (huh)...</div>
          <TabBlock {...giveItToMe2} />
          <div className="cue">
            <span className="arrow">→</span>Give it Give it Give it Give it.
          </div>
        </section>

        {/* <!-- BRIDGE D7 VAMP --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Bridge (D7 vamp)</span>
            <span className="part-reps">×2</span>
          </div>
          <div className="pre-cue">Give it Noh Noh Noh...</div>
          <TabBlock {...d7Vamp} />
          <div className="cue">
            <span className="arrow">→</span>Noh Oh.
          </div>
        </section>

        {/* <!-- SOLO 2 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Solo</span>
            <span className="part-reps">×2</span>
          </div>
          <div className="pre-cue">
            I gotta tipitipitipitii aniani
            yay-yay-yay-yay-yay-hubadidadabadedah-deah... (Scat)
          </div>
          <TabBlock {...mainRiffG7C7} />
          <div className="cue instrumental">(scat continues)</div>
        </section>

        {/* <!-- FINAL CHORUS / OUTRO --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Chorus</span>
            <span className="part-reps">×4</span>
          </div>
          <div className="pre-cue">54-46 was my number, eeeeehh...</div>
          <TabBlock {...mainRiffG7C7} />
          <div className="cue">
            <span className="arrow">→</span>Right now, someone else has that
            number.
          </div>
        </section>

        {/* <!-- FADE OUT --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Outro</span>
            <span className="part-reps">×2</span>
          </div>
          <TabBlock {...mainRiffG7C7} />
          <div className="cue instrumental">(fade out)</div>
        </section>
      </div>
    </section>
  );
};

export default page;
