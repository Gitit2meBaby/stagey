import React from "react";
import TabBlock from "../components/TabBlock";

const loopAmEmDm = {
  bars: 2,
  slotsPerBar: 16,
  chords: [
    { bar: 0, slot: 0, name: "Am" },
    { bar: 1, slot: 0, name: "Em" },
    { bar: 1, slot: 8, name: "Dm" },
  ],
  notes: {
    E: [
      { bar: 0, slot: 1, fret: 5 },
      { bar: 0, slot: 3, fret: 5 },
      { bar: 0, slot: 5, fret: 8 },
      { bar: 0, slot: 7, fret: 8 },
    ],
    D: [{ bar: 0, slot: 13, fret: 7 }],
    A: [
      { bar: 0, slot: 9, fret: 7 },
      { bar: 0, slot: 11, fret: 7 },
      { bar: 1, slot: 1, fret: 7 },
      { bar: 1, slot: 3, fret: 7 },
      { bar: 1, slot: 5, fret: 7 },
      { bar: 1, slot: 9, fret: 5 },
      { bar: 1, slot: 11, fret: 5 },
      { bar: 1, slot: 13, fret: 5 },
    ],
  },
};

const chorusBlock = {
  bars: 2,
  slotsPerBar: 16,
  chords: [
    { bar: 0, slot: 0, name: "Em" },
    { bar: 1, slot: 0, name: "Am" },
  ],
  notes: {
    A: [
      { bar: 0, slot: 1, fret: 7 },
      { bar: 0, slot: 3, fret: 7 },
      { bar: 0, slot: 5, fret: 10 },
      { bar: 0, slot: 8, fret: 10 },
    ],
    D: [
      { bar: 0, slot: 10, fret: 9 },
      { bar: 0, slot: 12, fret: 9 },
    ],
    G: [{ bar: 0, slot: 14, fret: 9 }],
    E: [
      { bar: 1, slot: 2, fret: 5 },
      { bar: 1, slot: 4, fret: 5 },
      { bar: 1, slot: 6, fret: 5 },
      { bar: 1, slot: 9, fret: 5 },
      { bar: 1, slot: 11, fret: 5 },
      { bar: 1, slot: 13, fret: 5 },
    ],
  },
};

// The pre-chorus is one continuous 4-bar phrase in the source tab (G / Am
// / F / C, one chord per bar) — not two separate 2-bar blocks. Rendering
// it as a single 4-bar TabBlock instead of two 2-bar ones was the
// system's whole reason for supporting `bars: 4`.
const preChorusFull = {
  bars: 4,
  slotsPerBar: 16,
  chords: [
    { bar: 0, slot: 0, name: "G" },
    { bar: 1, slot: 0, name: "Am" },
    { bar: 2, slot: 0, name: "F" },
    { bar: 3, slot: 0, name: "C" },
  ],
  notes: {
    E: [
      { bar: 0, slot: 1, fret: 3 },
      { bar: 0, slot: 3, fret: 3 },
      { bar: 2, slot: 0, fret: 1 },
      { bar: 2, slot: 2, fret: 1 },
    ],
    D: [
      { bar: 0, slot: 13, fret: 5 },
      { bar: 2, slot: 13, fret: 3 },
    ],
    A: [
      { bar: 0, slot: 5, fret: 2 },
      { bar: 0, slot: 7, fret: 2 },
      { bar: 0, slot: 9, fret: 5 },
      { bar: 0, slot: 11, fret: 5 },
      { bar: 1, slot: 1, fret: 0 },
      { bar: 1, slot: 3, fret: 0 },
      { bar: 1, slot: 5, fret: 0 },
      { bar: 1, slot: 9, fret: 0 },
      { bar: 1, slot: 11, fret: 0 },
      { bar: 1, slot: 13, fret: 0 },
      { bar: 2, slot: 5, fret: 0 },
      { bar: 2, slot: 7, fret: 0 },
      { bar: 2, slot: 9, fret: 3 },
      { bar: 2, slot: 11, fret: 3 },
      { bar: 3, slot: 1, fret: 3 },
      { bar: 3, slot: 3, fret: 3 },
      { bar: 3, slot: 5, fret: 3 },
      { bar: 3, slot: 9, fret: 3 },
      { bar: 3, slot: 11, fret: 3 },
      { bar: 3, slot: 13, fret: 3 },
    ],
  },
};

const page = () => {
  return (
    <section lang="en">
      <div className="chart">
        <div className="song-head">
          <h1 className="song-title">Caution - Bob Marley</h1>
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
          <TabBlock {...loopAmEmDm} />
          <div className="cue instrumental">(instrumental)</div>
        </section>

        {/* <!-- VERSE --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Verse</span>
            <span className="part-reps">×8</span>
          </div>
          <div className="pre-cue">Here I am walkin' down the street...</div>
          <TabBlock {...loopAmEmDm} />
          <div className="cue">
            <span className="arrow">→</span>I would like you to know.
          </div>
        </section>

        {/* <!-- PRE-CHORUS 1 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Pre-chorus</span>
            <span className="part-reps">×2</span>
          </div>
          <div className="pre-cue">
            {" "}
            Ooh, when you wet it's slippery, yeah...
          </div>
          <TabBlock {...preChorusFull} />
          <div className="cue">
            <span className="arrow">→</span>
            Won't want you on the ground.
          </div>
        </section>

        {/* <!-- CHORUS 1 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Chorus</span>
            <span className="part-reps">×4</span>
          </div>
          <div className="pre-cue"> Caution, the road is wet...</div>
          <TabBlock {...chorusBlock} />
          <div className="cue">
            <span className="arrow">→</span>You got to do better than that.
          </div>
        </section>

        {/* <!-- PRE-CHORUS 2 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Pre-chorus</span>
            <span className="part-reps">×2</span>
          </div>
          <div className="pre-cue">
            'Cos, when you wet it's slippery, yeah...
          </div>
          <TabBlock {...preChorusFull} />
          <div className="cue">
            <span className="arrow">→</span>
            Don't want you on the ground, brother!
          </div>
        </section>

        {/* <!-- BRIDGE (break + hit me from the top) --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Bridge</span>
            <span className="part-reps">×6</span>
          </div>
          <div className="pre-cue">
            {" "}
            Hit me from the top, you crazy mutha-funker...
          </div>
          <TabBlock {...loopAmEmDm} />
          <div className="cue">
            <span className="arrow">→</span>Hit me from the top, you crazy
            mutha-funker. Eh!
          </div>
        </section>

        {/* <!-- PRE-CHORUS 3 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Pre-chorus</span>
            <span className="part-reps">×2</span>
          </div>
          <div className="pre-cue">When you wet it's slippery, yeah...</div>
          <TabBlock {...preChorusFull} />
          <div className="cue">
            <span className="arrow">→</span>
            Don't want you on the ground. Don't, don't.
          </div>
        </section>

        {/* <!-- CHORUS 2 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Chorus</span>
            <span className="part-reps">×4</span>
          </div>
          <div className="pre-cue"> Caution, the road is wet...</div>
          <TabBlock {...chorusBlock} />
          <div className="cue">
            <span className="arrow">→</span>Said, you got to do better than
            that.
          </div>
        </section>
        <p>// shake down at the end</p>
      </div>
    </section>
  );
};

export default page;
