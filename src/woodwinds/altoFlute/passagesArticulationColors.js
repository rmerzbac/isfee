import React from 'react';
import Instrument from "./../../instrument.js";
import vid from './passagesArticulationColors.mp4';
import score from './passagesArticulationColors.png';

const instrumentText = {
  0: "The alto flute is very responsive to fast passagework throughout its range.\n\n" +
    "Even when slurred, each note speaks very clearly.",
  6: "The alto flute is very responsive to fast passagework throughout its range.\n\n" +
    "Even when slurred, each note speaks very clearly.",
  12: "The alto flute is very responsive to fast passagework throughout its range.\n\n" +
    "The slur-two-tongue-two articulation is the most common fast articulation in all wind music.",
  18: "The alto flute is very responsive to fast passagework throughout its range.\n\n" +
    "Single tonguing is generally slower than the other articulation options demonstrated here, but is also the most deliberate and forceful.",
  24: "The alto flute is very responsive to fast passagework throughout its range.\n\n" +
    "Double-tonguing is particularly effective on members of the flute family, where the tonguing is unencumbered by the reeds employed by all the other woodwinds."
}

const gridHeights = [105, 90, 90, 110, 100]
const gridWidths = [[35, 425],
                    [35, 425],
                    [35, 425],
                    [35, 425],
                    [35, 425]]
const gridTimes = [[0],
                   [6],
                   [12],
                   [18],
                   [24]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Alto Flute"
        title="Passages & Articulation Colors"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
