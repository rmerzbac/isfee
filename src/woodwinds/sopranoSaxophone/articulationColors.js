import React from 'react';
import Instrument from "./../../instrument";
import vid from './articulationColors.mp4';
import score from './articulationColors.png';

const instrumentText = {
  0: "Saxophone articulation speaks smoothly and consistently throughout its range.\n\n" +
    "Even when slurred, each note speaks very clearly.",
  6: "Saxophone articulation speaks smoothly and consistently throughout its range.\n\n" +
    "The slur-two-tongue-two articulation is the most common fast articulation in all wind music.",
  11: "Saxophone articulation speaks smoothly and consistently throughout its range.\n\n" +
    "Single-tonguing is generally slower than the other articulation options demonstrated here, but is also the most deliberate and forceful.",
  16: "Saxophone articulation speaks smoothly and consistently throughout its range.\n\n" +
    "Double-tonguing is becoming a more common articulation for saxophonists; it is an option that may be chosen by the performer for fast passages.",
}

const morePages = [["/sopranoSaxRR","Range & Registers"],
["/sopranoSaxRC","Register Colors"],
["/sopranoSaxP","Passage"],
["/sopranoSaxMAVC","More Articulation & Vibrato Colors"]]

const gridHeights = [160, 120, 120, 120]
const gridWidths = [[25, 450],
                    [25, 450],
                    [25, 450],
                    [25, 450]]
const gridTimes = [[0], [6], [11], [16]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Soprano Saxophone"
        title="Articulation Colors"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}
        morePages={morePages}/>
    </div>
  );
}
