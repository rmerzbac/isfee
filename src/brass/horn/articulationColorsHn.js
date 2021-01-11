import React from 'react';
import Instrument from "./../../instrument";
import vid from './articulationColorsHn.mp4';
import score from './articulationColorsHn.png';

const instrumentText = {
  0: "Performer: Elizabeth Pfaffle \n\n" +
  "The precise, immediate changes in the length of the column of air created by the valve mechanism provide a basic clarity of articulation on brass instruments, even when played legato with no tonguing. ",
  7: "Performer: Elizabeth Pfaffle \n\n" +
  "Slur-two-tongue-two articulation is very common and effective on brass instruments. ",
  14: "Performer: Elizabeth Pfaffle \n\n" +
  "Single tonguing is generally slower than the other articulation options demonstrated here, but is also the most deliberate and forceful. ",
  21: "Performer: Elizabeth Pfaffle \n\n" +
  "Double-tonguing is very effective for fast passages on brass instruments. \n\n" 
}

const gridHeights = [135, 100, 120, 120]
const gridWidths = [[40, 480],
[40, 480],
[40, 480],
[40, 480]
]
const gridTimes = [[0], [7], [14], [21]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Horn"
        title="Articulation Colors"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


