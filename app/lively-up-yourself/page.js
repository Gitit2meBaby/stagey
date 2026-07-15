import React from "react";
import TabBlock from "../components/TabBlock";

// intro/verse riff — 2 bars, 24 slots/bar (measured from source tab)
const introVerseRiff = {
  bars: 2,
  slotsPerBar: 24,
  chords: [],
  notes: {
    D: [
      { bar: 0, slot: 11, fret: 3 },
      { bar: 0, slot: 13, fret: 5 },
      { bar: 1, slot: 13, fret: 3 },
      { bar: 1, slot: 15, fret: 5 },
    ],
    A: [
      { bar: 0, slot: 3, fret: 3 },
      { bar: 0, slot: 5, fret: 5 },
      { bar: 0, slot: 10, fret: 5 },
      { bar: 0, slot: 18, fret: 3 },
      { bar: 0, slot: 20, fret: 5 },
      { bar: 1, slot: 5, fret: 3 },
      { bar: 1, slot: 7, fret: 5 },
      { bar: 1, slot: 12, fret: 5 },
      { bar: 1, slot: 20, fret: 3 },
      { bar: 1, slot: 22, fret: 5 },
    ],
    E: [
      { bar: 0, slot: 1, fret: 5 },
      { bar: 0, slot: 17, fret: 5 },
      { bar: 1, slot: 3, fret: 5 },
      { bar: 1, slot: 19, fret: 5 },
    ],
  },
};

// chorus riff — 2 bars, 29 slots/bar (measured from source tab)
const chorusRiff = {
  bars: 2,
  slotsPerBar: 29,
  chords: [],
  notes: {
    D: [
      { bar: 0, slot: 20, fret: 7 },
      { bar: 0, slot: 21, fret: 5 },
      { bar: 1, slot: 19, fret: 7 },
      { bar: 1, slot: 20, fret: 5 },
    ],
    A: [
      { bar: 0, slot: 3, fret: 3 },
      { bar: 0, slot: 5, fret: 5 },
      { bar: 0, slot: 6, fret: 5 },
      { bar: 0, slot: 7, fret: 5 },
      { bar: 0, slot: 8, fret: 5 },
      { bar: 0, slot: 13, fret: 7 },
      { bar: 0, slot: 14, fret: 5 },
      { bar: 0, slot: 22, fret: 3 },
      { bar: 0, slot: 24, fret: 5 },
      { bar: 0, slot: 25, fret: 5 },
      { bar: 1, slot: 5, fret: 3 },
      { bar: 1, slot: 7, fret: 5 },
      { bar: 1, slot: 8, fret: 5 },
      { bar: 1, slot: 9, fret: 5 },
      { bar: 1, slot: 10, fret: 5 },
      { bar: 1, slot: 15, fret: 7 },
      { bar: 1, slot: 16, fret: 5 },
      { bar: 1, slot: 24, fret: 3 },
      { bar: 1, slot: 26, fret: 5 },
      { bar: 1, slot: 27, fret: 5 },
    ],
    E: [
      { bar: 0, slot: 1, fret: 5 },
      { bar: 0, slot: 17, fret: 7 },
      { bar: 0, slot: 18, fret: 3 },
      { bar: 0, slot: 22, fret: 5 },
      { bar: 1, slot: 3, fret: 5 },
      { bar: 1, slot: 19, fret: 7 },
      { bar: 1, slot: 20, fret: 3 },
      { bar: 1, slot: 24, fret: 5 },
    ],
  },
};

// solo/break — X2, follow first guitar, (10) = let ring — 2 bars, 29 slots/bar
const soloBreak1 = {
  bars: 2,
  slotsPerBar: 29,
  chords: [],
  notes: {
    D: [
      { bar: 0, slot: 1, fret: 10 },
      { bar: 1, slot: 24, fret: 10 },
    ],
    A: [
      { bar: 0, slot: 12, fret: 10 },
      { bar: 0, slot: 14, fret: 10 },
      { bar: 0, slot: 16, fret: 10 },
      { bar: 0, slot: 18, fret: 10 },
      { bar: 0, slot: 20, fret: 10 },
      { bar: 0, slot: 22, fret: 12 },
    ],
    E: [
      { bar: 0, slot: 2, fret: "(10)" },
      { bar: 1, slot: 23, fret: "(10)" },
    ],
  },
};

// solo/break ctd — X2 — 2 bars, 29 slots/bar
const soloBreak2 = {
  bars: 2,
  slotsPerBar: 29,
  chords: [],
  notes: {
    D: [
      { bar: 0, slot: 1, fret: 12 },
      { bar: 0, slot: 3, fret: 10 },
      { bar: 0, slot: 6, fret: 12 },
      { bar: 1, slot: 20, fret: 12 },
      { bar: 1, slot: 22, fret: 10 },
      { bar: 1, slot: 25, fret: 12 },
    ],
    A: [
      { bar: 0, slot: 8, fret: 12 },
      { bar: 0, slot: 12, fret: 10 },
      { bar: 0, slot: 14, fret: 10 },
      { bar: 0, slot: 16, fret: 10 },
      { bar: 0, slot: 18, fret: 10 },
      { bar: 0, slot: 20, fret: 10 },
      { bar: 1, slot: 4, fret: 12 },
    ],
  },
};

// outro — chords only. The Ultimate Guitar chords print for this section
// shows chord names over the lyric line with no accompanying fret/tab
// notation, so there is no fret data to render here — only the chord row.
const outroBlock1 = {
  bars: 2,
  slotsPerBar: 16,
  chords: [
    { bar: 0, slot: 0, name: "G" },
    { bar: 0, slot: 10, name: "D" },
    { bar: 0, slot: 14, name: "G" },
    { bar: 1, slot: 0, name: "D" },
    { bar: 1, slot: 10, name: "D7" },
    { bar: 1, slot: 14, name: "G" },
  ],
  notes: {},
};

const outroBlock2 = {
  bars: 2,
  slotsPerBar: 16,
  chords: [
    { bar: 0, slot: 0, name: "D7" },
    { bar: 0, slot: 8, name: "G" },
    { bar: 0, slot: 12, name: "D7" },
    { bar: 1, slot: 0, name: "G" },
    { bar: 1, slot: 6, name: "D7" },
    { bar: 1, slot: 10, name: "G" },
  ],
  notes: {},
};

const page = () => {
  return (
    <section lang="en">
      <div className="chart">
        <div className="song-head">
          <h1 className="song-title">
            Lively Up Yourself - Bob Marley & the Wailers
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
          <TabBlock {...introVerseRiff} />
          <div className="cue instrumental">(instrumental)</div>
        </section>

        {/* <!-- CHORUS 1 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Chorus</span>
            <span className="part-reps">×4</span>
          </div>
          <div className="pre-cue">
            You gonna Lively up yourself and don't be no drag...
          </div>
          <TabBlock {...chorusRiff} />
          <div className="cue">
            <span className="arrow">→</span>Your gonna lively up yourself cause
            I said so hear what you gonna do.
          </div>
        </section>

        {/* <!-- VERSE 1 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Verse</span>
            <span className="part-reps">×4</span>
          </div>
          <div className="pre-cue">
            Hey, you rock so, you rock so, like you never did before...
          </div>
          <TabBlock {...introVerseRiff} />
          <div className="cue">
            <span className="arrow">→</span>You skank so, you skank so, be alive
            today.
          </div>
        </section>

        {/* <!-- CHORUS 2 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Chorus</span>
            <span className="part-reps">×4</span>
          </div>
          <div className="pre-cue">
            Your gonna lively up yourself and don't say no...
          </div>
          <TabBlock {...chorusRiff} />
          <div className="cue">
            <span className="arrow">→</span>You Lively up yourself, 'cause
            reggae is another bag.
          </div>
        </section>

        {/* <!-- BRIDGE 1 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Bridge</span>
            <span className="part-reps">×1</span>
          </div>
          <div className="pre-cue">What you got, that i do not know...</div>
          <TabBlock {...introVerseRiff} />
          <div className="cue">
            <span className="arrow">→</span>Wonder why you act so.
          </div>
        </section>

        {/* <!-- INSTRUMENTAL LINK --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Instrumental Link</span>
            <span className="part-reps">×4</span>
          </div>
          <div className="pre-cue">Yeah... Yeah... Ooh...</div>
          <TabBlock {...introVerseRiff} />
          <div className="cue">
            <span className="arrow">→</span>Hey do you hear what the man say.
          </div>
        </section>

        {/* <!-- CHORUS 3 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Chorus</span>
            <span className="part-reps">×2</span>
          </div>
          <div className="pre-cue">
            Yea lively up yourself, your woman in the morning time...
          </div>
          <TabBlock {...chorusRiff} />
          <div className="cue">
            <span className="arrow">→</span>Take her, take her, take her.
          </div>
        </section>

        {/* <!-- INSTRUMENTAL LINK 2 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Instrumental Link</span>
            <span className="part-reps">×2</span>
          </div>
          <div className="pre-cue">
            Come on baby, cos i want to be lively myself yea...
          </div>
          <TabBlock {...chorusRiff} />
          <div className="cue instrumental">(instrumental)</div>
        </section>

        {/* <!-- SOLO/BREAK --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">
              Solo / Break (follow first guitar, (10)=let ring)
            </span>
            <span className="part-reps">×2</span>
          </div>
          <TabBlock {...soloBreak1} />
          <div className="cue instrumental">(instrumental)</div>
        </section>

        {/* <!-- SOLO/BREAK CTD --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Solo / Break (ctd.)</span>
            <span className="part-reps">×2</span>
          </div>
          <TabBlock {...soloBreak2} />
          <div className="cue instrumental">(instrumental)</div>
        </section>

        {/* <!-- BRIDGE 2 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Bridge</span>
            <span className="part-reps">×2</span>
          </div>
          <div className="pre-cue">
            Lively up yourself, Lively up yourself...
          </div>
          <TabBlock {...chorusRiff} />
          <div className="cue">
            <span className="arrow">→</span>Your gonna rock, so you rock so.
          </div>
        </section>

        {/* <!-- VERSE 2 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Verse</span>
            <span className="part-reps">×4</span>
          </div>
          <div className="pre-cue">
            You rock so, you rock so, You dip so, you dip so...
          </div>
          <TabBlock {...introVerseRiff} />
          <div className="cue">
            <span className="arrow">→</span>You come so, you come so, Yeah
            reggae is another bag.
          </div>
        </section>

        {/* <!-- OUTRO --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Outro</span>
            <span className="part-reps">×2</span>
          </div>
          <div className="pre-cue">Kid what you got in the bag...</div>
          <TabBlock {...outroBlock1} />
          <div className="cue">
            <span className="arrow">→</span>What you got in the other bag you
            got hanging there.
          </div>
          <TabBlock {...outroBlock2} />
          <div className="cue">
            <span className="arrow">→</span>What you say you got, I dont believe
            you.
          </div>
        </section>
      </div>
    </section>
  );
};

export default page;
