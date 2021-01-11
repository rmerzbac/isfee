import React from 'react';
import Instrument from "./../../instrument";
import vid from './articulationColorsTuba.mp4'
import score from './articulationColorsTuba.png'

const instrumentText = {
  0: "Performer: James Saliers\n\n" +
  "The precise, immediate changes in the length of the column of air created by the valve mechanism provide a basic clarity of articulation on brass instruments, even when played legato with no tonguing.",
  8: "Performer: James Saliers\n\n" +
  "Slur-two-tongue-two articulation is very common and effective on brass instruments.",
  16: "Performer: James Saliers\n\n" +
  "Single tonguing is generally slower than the other articulation options demonstrated here, but is also the most deliberate and forceful.",
  23: "Performer: James Saliers\n\n" +
  "Double-tonguing is very effective for fast passages on brass instruments.",
  29: "Performer: James Saliers\n\n" +
  "Staccato articulation is effective in all but the highest and lowest registers of the tuba.",
  32: "Performer: James Saliers\n\n" +
  "Staccato articulation is effective in all but the highest and lowest registers of the tuba. In this middle low range staccato is particularly effective."
}

const gridHeights = [120, 80, 96, 96, 96]
const gridWidths = [[40, 480], [40, 480], [40, 480], [40, 480], [40, 220, 260]]
const gridTimes = [[0], [8], [16], [23], [29, 32]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Tuba"
        title="Articulation & Colors"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


