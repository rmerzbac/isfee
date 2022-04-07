import React from 'react';
import Instrument from "./../../instrument";
import vid from './articulationColorsBrSx.mp4'
import score from './articulationColorsBrSx.png'

const instrumentText = {
  0: "Performer: Stacy Wilson\n\n" +
  "Saxophone articulation speaks smoothly and consistently throughout its range.\n\n" +
  "Even when slurred, each note speaks very clearly.",
  6: "Performer: Stacy Wilson\n\n" +
  "Saxophone articulation speaks smoothly and consistently throughout its range.\n\n" +
  "The slur-two-tongue-two articulation is the most common fast articulation in all wind music.",
  11: "Performer: Stacy Wilson\n\n" +
  "Saxophone articulation speaks smoothly and consistently throughout its range.\n\n" +
  "Single-tonguing is generally slower than the other articulation options demonstrated here, but is also the most deliberate and forceful.",
  17: "Performer: Stacy Wilson\n\n" +
  "Saxophone articulation speaks smoothly and consistently throughout its range.\n\n" +
  "Double-tonguing is becoming a more common articulation for saxophonists; it is an option that may be chosen by the performer for fast passages. On the tenor and baritone saxophones, double-tonguing is more difficult in the lower register."
}

const morePages = [["/BaritoneSaxophoneRR","Range & Registers"],
["/BaritoneSaxophoneRC","Register Colors"],
["/BaritoneSaxophoneMAVC","More Articulations & Vibrato Colors"],
["/BaritoneSaxophoneP","Excerpts"]]

const gridHeights = [160, 120, 120, 120]
const gridWidths = [[40, 480], [40, 480], [40, 480], [40, 480]]
const gridTimes = [[0], [6], [11], [17]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Baritone Saxophone"
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
