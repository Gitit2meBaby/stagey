import React from "react";

const page = () => {
  return (
    <section lang="en">
      <div className="chart">
        <div className="song-head">
          <h1 className="song-title">I Shot The Sheriff - Bob Marley</h1>
          <div className="size-ctl">
            <button onclick="resize(-1)">A-</button>
            <button onclick="resize(1)">A+</button>
          </div>
        </div>

        {/* <!-- INTRO / MAIN RIFF --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Intro</span>
            <span className="part-reps">×2</span>
          </div>
          <pre className="chord-row">Gm</pre>
          <pre className="tab">
            G|-------------------3h5----------------------------------|<br></br>
            D|----------------5--------0h3-0h3--5----0h3-3-3-0h5------|<br></br>
            A|------------5-------------------------------------------|<br></br>
            E|--(0)h3--6----3-----------------------------------------|<br></br>
          </pre>
          <div className="cue instrumental">(instrumental)</div>
        </section>

        {/* <!-- VERSE 1 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Verse 1</span>
            <span className="part-reps">×1</span>
          </div>
          <div className="pre-cue">I shot the sheriff...</div>

          <pre className="chord-row">Gm</pre>
          <pre className="tab">
            G|--8-------7--------------------------7----|<br></br>
            D|----8-------7------0h3h5-0-0-0-0-0-0------|<br></br>
            A|------6-------5---------------------------|<br></br>
            E|------------------------------------------|<br></br>
          </pre>

          <pre className="chord-row">Gm</pre>
          <pre className="tab">
            G|--8-------7--------------------------7----|<br></br>
            D|----8-------7------0h3h5-0-0-0-0-0--5-0---|<br></br>
            A|------6-------5---------------------------|<br></br>
            E|------------------------------------------|<br></br>
          </pre>

          <pre className="chord-row">Gm</pre>
          <pre className="tab">
            G|--8-------7--------------------------7----|<br></br>
            D|----8-------7------0h3h5-0-0-0-0-0-0------|<br></br>
            A|------6-------5---------------------------|<br></br>
            E|------------------------------------------|<br></br>
          </pre>

          <pre className="chord-row">Gm</pre>
          <pre className="tab">
            G|--8-------7--------------------------5-7--|<br></br>
            D|----8-------7------0h3h5-0-0-0-0-0----5---|<br></br>
            A|------6-------5---------------------------|<br></br>
            E|------------------------------------------|<br></br>
          </pre>

          <pre className="chord-row">Gm</pre>
          <pre className="tab">
            G|--8----8---7--------------------------------|<br></br>
            D|-----8-------------5--0-0-0-0--5------------|<br></br>
            A|--------------------------------------------|<br></br>
            E|--------------------------------------------|<br></br>
          </pre>

          <pre className="chord-row"> Dm7</pre>
          <pre className="tab">
            G|----------------------------------------------|<br></br>
            D|--5--3----------------------------------------|<br></br>
            A|-------5-3----5-3-----------------------------|<br></br>
            E|-------------6------6--3----------------------|<br></br>
          </pre>

          <div className="cue">
            <span className="arrow">→</span>Oh now now, oh.
          </div>
        </section>

        {/* <!-- MAIN RIFF x2 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Main Riff</span>
            <span className="part-reps">×2</span>
          </div>
          <pre className="chord-row">Gm</pre>
          <pre className="tab">
            G|----------------3h5-------------------------------------|<br></br>
            D|----------------5--------0h3-0h3--5----0h3-3-3-0h5------|<br></br>
            A|------------5-------------------------------------------|<br></br>
            E|--(0)h3--6----3-----------------------------------------|<br></br>
          </pre>
          <div className="cue instrumental">(instrumental)</div>
        </section>

        {/* <!-- CHORUS 1 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Chorus 1</span>
            <span className="part-reps">×1</span>
          </div>
          <div className="pre-cue">I shot the sheriff...</div>
          <pre className="chord-row">Gm</pre>
          <pre className="tab">
            G|----------------3h5-------------------------------------|<br></br>
            D|----------------5--------0h3-0h3--5----0h3-3-3-0h5------|<br></br>
            A|------------5-------------------------------------------|<br></br>
            E|--(0)h3--6----3-----------------------------------------|<br></br>
          </pre>
          <div className="cue">
            <span className="arrow">→</span>But I didn&apos;t shoot no deputy.
            Ooh, ooh, oo-ooh.
          </div>
        </section>

        {/* <!-- VERSE 2 (almost the same as Verse 1, last two measures vary) --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Verse 2</span>
            <span className="part-reps">×1</span>
          </div>
          <div className="pre-cue">Sheriff John Brown always hated me...</div>

          <pre className="chord-row">Gm</pre>
          <pre className="tab">
            G|--8-------7--------------------------7----|<br></br>
            D|----8-------7------0h3h5-0-0-0-0-0-0------|<br></br>
            A|------6-------5---------------------------|<br></br>
            E|------------------------------------------|<br></br>
          </pre>

          <pre className="chord-row">Gm</pre>
          <pre className="tab">
            G|--8-------7--------------------------7----|<br></br>
            D|----8-------7------0h3h5-0-0-0-0-0--5-0---|<br></br>
            A|------6-------5---------------------------|<br></br>
            E|------------------------------------------|<br></br>
          </pre>

          <pre className="chord-row">Gm</pre>
          <pre className="tab">
            G|--8-------7--------------------------7----|<br></br>
            D|----8-------7------0h3h5-0-0-0-0-0-0------|<br></br>
            A|------6-------5---------------------------|<br></br>
            E|------------------------------------------|<br></br>
          </pre>

          <pre className="chord-row">Gm</pre>
          <pre className="tab">
            G|--8-------7--------------------------5-7--|<br></br>
            D|----8-------7------0h3h5-0-0-0-0-0----5---|<br></br>
            A|------6-------5---------------------------|<br></br>
            E|------------------------------------------|<br></br>
          </pre>

          <pre className="chord-row">Gm</pre>
          <pre className="tab">
            G|--8----8---7----------------------|<br></br>
            D|-----8-------------5-5-0h5-0h5-0h5|<br></br>
            A|----------------------------------|<br></br>
            E|----------------------------------|<br></br>
          </pre>

          <pre className="chord-row"> Dm7</pre>
          <pre className="tab">
            G|----------------------------------------------|<br></br>
            D|--5--3----------------------------------------|<br></br>
            A|-------5-3----5-3-----------------------------|<br></br>
            E|-------------6------6--3----------------------|<br></br>
          </pre>

          <div className="cue">
            <span className="arrow">→</span>Read it in the news.
          </div>
        </section>

        {/* <!-- MAIN RIFF x2 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Main Riff</span>
            <span className="part-reps">×2</span>
          </div>
          <pre className="chord-row">Gm</pre>
          <pre className="tab">
            G|----------------3h5-------------------------------------|<br></br>
            D|----------------5--------0h3-0h3--5----0h3-3-3-0h5------|<br></br>
            A|------------5-------------------------------------------|<br></br>
            E|--(0)h3--6----3-----------------------------------------|<br></br>
          </pre>
          <div className="cue instrumental">(instrumental)</div>
        </section>

        {/* <!-- CHORUS 2 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Chorus 2</span>
            <span className="part-reps">×1</span>
          </div>
          <div className="pre-cue">I shot the sheriff...</div>
          <pre className="chord-row">Gm</pre>
          <pre className="tab">
            G|----------------3h5-------------------------------------|<br></br>
            D|----------------5--------0h3-0h3--5----0h3-3-3-0h5------|<br></br>
            A|------------5-------------------------------------------|<br></br>
            E|--(0)h3--6----3-----------------------------------------|<br></br>
          </pre>
          <div className="cue">
            <span className="arrow">→</span>And they say it is a capital
            offence. Yeah!
          </div>
        </section>

        {/* <!-- VERSE 3 (identical to Verse 2) --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Verse 3</span>
            <span className="part-reps">×1</span>
          </div>
          <div className="pre-cue">Freedom came my way one day...</div>

          <pre className="chord-row">Gm</pre>
          <pre className="tab">
            G|--8-------7--------------------------7----|<br></br>
            D|----8-------7------0h3h5-0-0-0-0-0-0------|<br></br>
            A|------6-------5---------------------------|<br></br>
            E|------------------------------------------|<br></br>
          </pre>

          <pre className="chord-row">Gm</pre>
          <pre className="tab">
            G|--8-------7--------------------------7----|<br></br>
            D|----8-------7------0h3h5-0-0-0-0-0--5-0---|<br></br>
            A|------6-------5---------------------------|<br></br>
            E|------------------------------------------|<br></br>
          </pre>

          <pre className="chord-row">Gm</pre>
          <pre className="tab">
            G|--8-------7--------------------------7----|<br></br>
            D|----8-------7------0h3h5-0-0-0-0-0-0------|<br></br>
            A|------6-------5---------------------------|<br></br>
            E|------------------------------------------|<br></br>
          </pre>

          <pre className="chord-row">Gm</pre>
          <pre className="tab">
            G|--8-------7--------------------------5-7--|<br></br>
            D|----8-------7------0h3h5-0-0-0-0-0----5---|<br></br>
            A|------6-------5---------------------------|<br></br>
            E|------------------------------------------|<br></br>
          </pre>

          <pre className="chord-row">Gm</pre>
          <pre className="tab">
            G|--8----8---7----------------------|<br></br>
            D|-----8-------------5-5-0h5-0h5-0h5|<br></br>
            A|----------------------------------|<br></br>
            E|----------------------------------|<br></br>
          </pre>

          <pre className="chord-row"> Dm7</pre>
          <pre className="tab">
            G|----------------------------------------------|<br></br>
            D|--5--3----------------------------------------|<br></br>
            A|-------5-3----5-3-----------------------------|<br></br>
            E|-------------6------6--3----------------------|<br></br>
          </pre>

          <div className="cue">
            <span className="arrow">→</span>If I am guilty, I will pay.
          </div>
        </section>

        {/* <!-- CHORUS 3 --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Chorus 3</span>
            <span className="part-reps">×1</span>
          </div>
          <div className="pre-cue">I shot the sheriff...</div>
          <pre className="chord-row">Gm</pre>
          <pre className="tab">
            G|----------------3h5-------------------------------------|<br></br>
            D|----------------5--------0h3-0h3--5----0h3-3-3-0h5------|<br></br>
            A|------------5-------------------------------------------|<br></br>
            E|--(0)h3--6----3-----------------------------------------|<br></br>
          </pre>
          <div className="cue">
            <span className="arrow">→</span>But I swear it was in self-defence.
            (Yeah!)
          </div>
        </section>

        {/* <!-- VERSE 4 (identical to Verse 2, except fifth measure) --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Verse 4</span>
            <span className="part-reps">×1</span>
          </div>
          <div className="pre-cue">Reflexes had the better of me...</div>

          <pre className="chord-row">Gm</pre>
          <pre className="tab">
            G|--8-------7--------------------------7----|<br></br>
            D|----8-------7------0h3h5-0-0-0-0-0-0------|<br></br>
            A|------6-------5---------------------------|<br></br>
            E|------------------------------------------|<br></br>
          </pre>

          <pre className="chord-row">Gm</pre>
          <pre className="tab">
            G|--8-------7--------------------------7----|<br></br>
            D|----8-------7------0h3h5-0-0-0-0-0--5-0---|<br></br>
            A|------6-------5---------------------------|<br></br>
            E|------------------------------------------|<br></br>
          </pre>

          <pre className="chord-row">Gm</pre>
          <pre className="tab">
            G|--8-------7--------------------------7----|<br></br>
            D|----8-------7------0h3h5-0-0-0-0-0-0------|<br></br>
            A|------6-------5---------------------------|<br></br>
            E|------------------------------------------|<br></br>
          </pre>

          <pre className="chord-row">Gm</pre>
          <pre className="tab">
            G|--8-------7--------------------------5-7--|<br></br>
            D|----8-------7------0h3h5-0-0-0-0-0----5---|<br></br>
            A|------6-------5---------------------------|<br></br>
            E|------------------------------------------|<br></br>
          </pre>

          {/* Fifth measure -- the one that differs in Verse 4 per the tab print */}
          <pre className="chord-row">Gm</pre>
          <pre className="tab">
            G|--8---7-----------------|<br></br>
            D|------------5-5-0h5-0h5-|<br></br>
            A|------------------------|<br></br>
            E|------------------------|<br></br>
          </pre>

          <pre className="chord-row"> Dm7</pre>
          <pre className="tab">
            G|----------------------------------------------|<br></br>
            D|--5--3----------------------------------------|<br></br>
            A|-------5-3----5-3-----------------------------|<br></br>
            E|-------------6------6--3----------------------|<br></br>
          </pre>

          <div className="cue">
            <span className="arrow">→</span>I say...
          </div>
        </section>

        {/* <!-- LAST CHORUS AND OUTRO: main riff again --> */}
        <section className="part">
          <div className="part-head">
            <span className="part-title">Last Chorus &amp; Outro</span>
            <span className="part-reps">×∞</span>
          </div>
          <div className="pre-cue">I shot the sheriff...</div>
          <pre className="chord-row">Gm</pre>
          <pre className="tab">
            G|----------------3h5-------------------------------------|<br></br>
            D|----------------5--------0h3-0h3--5----0h3-3-3-0h5------|<br></br>
            A|------------5-------------------------------------------|<br></br>
            E|--(0)h3--6----3-----------------------------------------|<br></br>
          </pre>
          <div className="cue instrumental">(repeat to fade)</div>
        </section>
      </div>
    </section>
  );
};

export default page;
