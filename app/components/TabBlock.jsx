import React from "react";

/**
 * TabBlock — renders one tab block (2 or 4 bars) as a CSS Grid, so chord
 * labels and fret numbers are placed by explicit slot index instead of by
 * counting spaces in monospace text. This guarantees:
 *   - the chord row always lines up with the bar/beat it belongs to
 *   - two different strings can never accidentally land in the same
 *     time-slot just because of a spacing mistake — every note has an
 *     explicit (bar, slot) address you set on purpose
 *
 * Props:
 *   bars         - 2 or 4 (how many bars this block contains)
 *   slotsPerBar  - subdivisions per bar. Use 8 to match the tab print's own
 *                  "1 & 2 & 3 & 4 &" heading (slot 0=1, 1=&, 2=2, 3=&, ...).
 *   chords       - [{ bar, slot, name }]  bar/slot are 0-indexed
 *   notes        - { G: [...], D: [...], A: [...], E: [...] }
 *                  each entry: { bar, slot, fret }  fret is a string/number
 *
 * Two notes can only ever occupy the same column if you explicitly give
 * them the same {bar, slot} on two different strings — which is fine for
 * an intentional double-stop, but should otherwise be treated as a bug to
 * fix in the data, not something to eyeball in rendered text.
 */
const STRING_ORDER = ["G", "D", "A", "E"];

function slotIndex(bar, slot, slotsPerBar) {
  return bar * slotsPerBar + slot + 1; // 1-indexed for CSS grid-column
}

function TabBlock({ bars = 2, slotsPerBar = 8, chords = [], notes = {} }) {
  const totalSlots = bars * slotsPerBar;
  const gridStyle = { gridTemplateColumns: `repeat(${totalSlots}, 1fr)` };

  const barPercents = [];
  for (let b = 1; b < bars; b++) {
    barPercents.push((b / bars) * 100);
  }

  return (
    <div className="tabx">
      <div className="tabx-chordrow" style={gridStyle}>
        {chords.map((c, i) => (
          <span
            key={i}
            className="tabx-chord"
            style={{ gridColumn: slotIndex(c.bar, c.slot, slotsPerBar) }}
          >
            {c.name}
          </span>
        ))}
      </div>

      {STRING_ORDER.map((s) => (
        <div key={s} className="tabx-row">
          <span className="tabx-label">{s}</span>
          <div className="tabx-grid" style={gridStyle}>
            {(notes[s] || []).map((n, i) => (
              <span
                key={i}
                className="tabx-note"
                style={{ gridColumn: slotIndex(n.bar, n.slot, slotsPerBar) }}
              >
                {n.fret}
              </span>
            ))}
          </div>
        </div>
      ))}

      <div className="tabx-barlines">
        {barPercents.map((pct, i) => (
          <span key={i} style={{ left: `${pct}%` }} />
        ))}
      </div>
    </div>
  );
}

export default TabBlock;
