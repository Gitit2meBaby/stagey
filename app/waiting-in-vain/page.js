import React from "react";
import TabBlock from "../components/TabBlock";
import Image from "next/image";

import wv1 from "../../public/wv1.png";
import wv2 from "../../public/wv2.png";

/* ===================================================================
   Waiting in Vain - Bob Marley & the Wailers
   Two chords throughout: Abmaj7 / Dbmaj7. Tab has 3 distinct 2-bar
   patterns (chorus / verse / bridge), each reused across the song.
   16 slots/bar grid, derived from the ASCII tab print.
   =================================================================== */

/* ===================== CHORUS TAB ===================== */
/*
G|-------------------5-------|
D|--------------------86----|
A|---------------4-4-64-----86--|
E|--4-464--44-4-6-----------------|
*/
const chorusBlock = {
  bars: 2,
  slotsPerBar: 16,
  chords: [
    { bar: 0, slot: 0, name: "Abmaj7" },
    { bar: 1, slot: 0, name: "Dbmaj7" },
  ],
  notes: {
    E: [
      { bar: 0, slot: 2, fret: 4 },
      { bar: 0, slot: 4, fret: 4 },
      { bar: 0, slot: 5, fret: 6 },
      { bar: 0, slot: 6, fret: 4 },
      { bar: 0, slot: 9, fret: 4 },
      { bar: 0, slot: 10, fret: 4 },
      { bar: 0, slot: 12, fret: 4 },
      { bar: 0, slot: 14, fret: 6 },
    ],
    A: [
      { bar: 1, slot: 0, fret: 4 },
      { bar: 1, slot: 2, fret: 4 },
      { bar: 1, slot: 4, fret: 6 },
      { bar: 1, slot: 5, fret: 4 },
      { bar: 1, slot: 11, fret: 8 },
      { bar: 1, slot: 12, fret: 6 },
    ],
    D: [
      { bar: 1, slot: 5, fret: 8 },
      { bar: 1, slot: 6, fret: 6 },
    ],
    G: [{ bar: 1, slot: 4, fret: 5 }],
  },
};

/* ===================== VERSE TAB ===================== */
/*
G|-------------------------------|
D|-------------------------------|
A|--------------4-4-64--44-4-6--|
E|--4-464-44-4-6-----------------|
*/
const verseBlock = {
  bars: 2,
  slotsPerBar: 16,
  chords: [
    { bar: 0, slot: 0, name: "Abmaj7" },
    { bar: 1, slot: 0, name: "Dbmaj7" },
  ],
  notes: {
    E: [
      { bar: 0, slot: 2, fret: 4 },
      { bar: 0, slot: 4, fret: 4 },
      { bar: 0, slot: 5, fret: 6 },
      { bar: 0, slot: 7, fret: 4 },
      { bar: 0, slot: 9, fret: 4 },
      { bar: 0, slot: 10, fret: 4 },
      { bar: 0, slot: 12, fret: 6 },
    ],
    A: [
      { bar: 1, slot: 0, fret: 4 },
      { bar: 1, slot: 2, fret: 4 },
      { bar: 1, slot: 4, fret: 6 },
      { bar: 1, slot: 5, fret: 4 },
      { bar: 1, slot: 8, fret: 4 },
      { bar: 1, slot: 10, fret: 4 },
      { bar: 1, slot: 12, fret: 6 },
    ],
  },
};

/* ===================== BRIDGE TAB (4 bars, split into 2 blocks) ===================== */
/*
Block 1:
G|--------------------|
D|--------------------|
A|--4---4-6---6---3---3--|
E|----4-------6--------3--|

Block 2:
G|----------------|
D|----------------|
A|---3-4---4-6----3------|
E|-6-----4------------6--|
*/
const bridgeBlock1 = {
  bars: 2,
  slotsPerBar: 16,
  chords: [
    { bar: 0, slot: 0, name: "Db" },
    { bar: 1, slot: 0, name: "Eb" },
  ],
  notes: {
    A: [
      { bar: 0, slot: 2, fret: 4 },
      { bar: 0, slot: 6, fret: 4 },
      { bar: 0, slot: 7, fret: 6 },
      { bar: 0, slot: 11, fret: 6 },
      { bar: 1, slot: 0, fret: 3 },
      { bar: 1, slot: 4, fret: 3 },
    ],
    E: [
      { bar: 0, slot: 4, fret: 4 },
      { bar: 0, slot: 9, fret: 6 },
      { bar: 1, slot: 6, fret: 3 },
    ],
  },
};

const bridgeBlock2 = {
  bars: 2,
  slotsPerBar: 16,
  chords: [
    { bar: 0, slot: 0, name: "Cm7" },
    { bar: 1, slot: 0, name: "Bbm7" },
  ],
  notes: {
    A: [
      { bar: 0, slot: 1, fret: 3 },
      { bar: 0, slot: 3, fret: 4 },
      { bar: 0, slot: 7, fret: 4 },
      { bar: 0, slot: 9, fret: 6 },
      { bar: 1, slot: 5, fret: 3 },
    ],
    E: [
      { bar: 0, slot: 0, fret: 6 },
      { bar: 0, slot: 6, fret: 4 },
      { bar: 1, slot: 10, fret: 6 },
    ],
  },
};

const page = () => {
  return (
    <section lang="en">
      <div className="chart">
        <div className="song-head">
          <h1 className="song-title">
            Waiting in Vain - Bob Marley &amp; the Wailers
          </h1>
          <div className="size-ctl">
            <button onclick="resize(-1)">A-</button>
            <button onclick="resize(1)">A+</button>
          </div>
        </div>

        <Image src={wv1}></Image>
        <Image src={wv2}></Image>
        <h2>Middle</h2>
        <h2>C# - D# - C - A#</h2>

        {/* <!-- INTRO --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Intro</span>
            <span className="part-reps">×2</span>
          </div>
          <TabBlock {...chorusBlock} />
          <div className="cue instrumental">(instrumental)</div>
        </section>

        {/* <!-- CHORUS 1 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Chorus</span>
            <span className="part-reps">×2</span>
          </div>
          <div className="pre-cue">
            I don't wanna wait in vain for your love...
          </div>
          <TabBlock {...chorusBlock} />
          <div className="cue">
            <span className="arrow">→</span>I don't wanna wait in vain for your
            love.
          </div>
        </section>

        {/* <!-- VERSE 1 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Verse</span>
            <span className="part-reps">×4</span>
          </div>
          <div className="pre-cue">
            From the very first time I rest my eyes on you, girl...
          </div>
          <TabBlock {...verseBlock} />
          <div className="cue">
            <span className="arrow">→</span>I wanna know when you're gonna come.
            See...
          </div>
        </section>

        {/* <!-- CHORUS 2 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Chorus</span>
            <span className="part-reps">×2</span>
          </div>
          <div className="pre-cue">
            I don't wanna wait in vain for your love...
          </div>
          <TabBlock {...chorusBlock} />
          <div className="cue">
            <span className="arrow">→</span>I don't wanna wait in vain for your
            love.
          </div>
        </section>

        {/* <!-- VERSE 2 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Verse</span>
            <span className="part-reps">×4</span>
          </div>
          <div className="pre-cue">
            Ooh girl, ooh girl, is it feasible, (I wanna know now)...
          </div>
          <TabBlock {...verseBlock} />
          <div className="cue">
            <span className="arrow">→</span>While I'm waiting, while I'm waiting
            for my turn. See...
          </div>
        </section>

        {/* <!-- CHORUS 3 (5x) --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Chorus</span>
            <span className="part-reps">×5</span>
          </div>
          <div className="pre-cue">
            I don't wanna wait in vain for your love...
          </div>
          <TabBlock {...chorusBlock} />
          <div className="cue">
            <span className="arrow">→</span>I don't wanna wait in vain for your
            love, oh...
          </div>
        </section>

        {/* <!-- OUTRO TAG (I don't wanna...) --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Chorus Tag</span>
            <span className="part-reps">×2</span>
          </div>
          <div className="pre-cue">
            I don't wanna, I don't wanna, I don't wanna, I don't wanna...
          </div>
          <TabBlock {...chorusBlock} />
          <div className="cue">
            <span className="arrow">→</span>No, I don't wanna, I don't wanna, I
            don't wanna, I don't wanna.
          </div>
        </section>

        {/* <!-- BRIDGE --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Bridge</span>
            <span className="part-reps">×2</span>
          </div>
          <div className="pre-cue">
            'Cos if summer is here, I'm still waiting there...
          </div>
          <TabBlock {...bridgeBlock1} />
          <TabBlock {...bridgeBlock2} />
          <div className="cue">
            <span className="arrow">→</span>Winter is here, and I'm still
            waiting there.
          </div>
        </section>

        {/* <!-- SOLO --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Solo</span>
            <span className="part-reps">×4</span>
          </div>
          <TabBlock {...chorusBlock} />
          <div className="cue instrumental">(Like I said)...</div>
        </section>

        {/* <!-- VERSE 3 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Verse</span>
            <span className="part-reps">×4</span>
          </div>
          <div className="pre-cue">
            It's been three years since I'm knockin' on your door...
          </div>
          <TabBlock {...verseBlock} />
          <div className="cue">
            <span className="arrow">→</span>For I to knock some more? Yah see...
          </div>
        </section>

        {/* <!-- CHORUS 4 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Chorus</span>
            <span className="part-reps">×3</span>
          </div>
          <div className="pre-cue">
            I don't wanna wait in vain for your love...
          </div>
          <TabBlock {...chorusBlock} />
          <div className="cue">
            <span className="arrow">→</span>I don't wanna wait in vain for your
            love.
          </div>
        </section>

        {/* <!-- OUTRO TAG 2 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Chorus Tag</span>
            <span className="part-reps">×3</span>
          </div>
          <div className="pre-cue">
            I don't wanna, I don't wanna, I don't wanna, I don't wanna...
          </div>
          <TabBlock {...chorusBlock} />
          <div className="cue">
            <span className="arrow">→</span>No, I don't wanna, I don't wanna, I
            don't wanna, I don't wanna.
          </div>
        </section>

        {/* <!-- FINAL OUTRO --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Outro</span>
            <span className="part-reps">×2</span>
          </div>
          <div className="pre-cue">
            It's your love that I'm waiting on, (I don't wanna, I don't wanna, I
            don't wanna wait in vain)...
          </div>
          <TabBlock {...chorusBlock} />
          <div className="cue instrumental">(Fade)</div>
        </section>
      </div>
    </section>
  );
};

export default page;
