import React from 'react';
import Instrument from "./../../instrument";
import vid from './passageArticulationColors.mp4';
import score from './passageArticulationColors.png';

const instrumentText = {
  0: "This famous solo from Dvorak's New World Symphony takes advantage of the characteristic color of the English Horn's middle-low register and the lyric intensity of its middle-high register.",
  14: "This famous solo from Dvorak's New World Symphony takes advantage of the characteristic color of the English Horn's middle-low register and the lyric intensity of its middle-high register.",
  29: "The English Horn is responsive to moderately fast passagework throughout its range.\n\n" +
    "Even when slurred, each note speaks very clearly.",
  36: "The English Horn is responsive to moderately fast passagework throughout its range.\n\n" +
    "The slur-two-tongue-two articulation is the most common fast articulation in all wind music.",
  42: "The English Horn is responsive to moderately fast passagework throughout its range.\n\n" +
    "Single-tonguing is generally slower than the other articulation options demonstrated here, but is also the most deliberate and forceful.",
}

const gridHeights = [120, 105, 105, 97, 100]
const gridWidths = [[30, 445],
                    [30, 445],
                    [30, 445],
                    [30, 445],
                    [30, 445]]
const gridTimes = [[0], [14], [29], [36], [42]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="English Horn"
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
