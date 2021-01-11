import React from 'react';
import Instrument from "./../../instrument";
import vid from './articulationColors.mp4';
import score from './articulationColors.png';

const instrumentText = {
  0: "The clarinet is renowned for its agility, particularly in arpeggio passages. Even when slurred, each note speaks very clearly.",
  5: "The clarinet is renowned for its agility, particularly in arpeggio passages. The slur-two-tongue-two articulation is the most common fast articulation in all wind music.",
  10: "The clarinet is renowned for its agility, particularly in arpeggio passages. Single-tonguing is generally slower than the other articulation options demonstrated here, but is also the most deliberate and forceful. ",
}

const gridHeights = [160, 150, 150]
const gridWidths = [[35, 430],
                    [35, 430],
                    [35, 430]]
const gridTimes = [[0], [5], [10]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Clarinet"
        title="Articulation Colors"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
