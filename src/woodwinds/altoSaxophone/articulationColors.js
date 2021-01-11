import React from 'react';
import Instrument from "./../../instrument";
import vid from './articulationColors.mp4';
import score from './articulationColors.png';

const instrumentText = {
  0: "Saxophone articulation speaks smoothly and consistently throughout its range.\n\n" +
    "Even when slurred, each note speaks very clearly.",
  4: "Saxophone articulation speaks smoothly and consistently throughout its range.\n\n" +
    "The slur-two-tongue-two articulation is the most common fast articulation in all wind music.",
  9: "Saxophone articulation speaks smoothly and consistently throughout its range.\n\n" +
    "Single-tonguing is generally slower than the other articulation options demonstrated here, but is also the most deliberate and forceful.",
  14: "Saxophone articulation speaks smoothly and consistently throughout its range.\n\n" +
    "Double-tonguing is becoming a more common articulation for saxophonists; it is an option that may be chosen by the performer for fast passages.",
}

const gridHeights = [145, 120, 130, 130]
const gridWidths = [[25, 450],
                    [25, 450],
                    [25, 450],
                    [25, 450]]
const gridTimes = [[0], [4], [9], [14]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Alto Saxophone"
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
