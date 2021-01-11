import React from 'react';
import Instrument from "./../../instrument";
import vid from './tambourine.mp4'
import score from './tambourine.png'

const instrumentText = {
  0: "Performer: Eric Guinivan\n\n" +
  "The tambourine is actually two instruments in one -- a percussive hand drum, and a ringing metal shaker.",
  9: "Performer: Eric Guinivan\n\n" +
  "Relatively fast rhythms can be played on the tambourine by alternating knee and hand strokes.",
  14: "Performer: Eric Guinivan\n\n" +
  "The tambourine can be played with a delicate, sightly muted effect while resting on the knee."
}

const gridHeights = [130, 80, 80]
const gridWidths = [[40, 480], [40, 480], [40, 480]]
const gridTimes = [[0], [9], [14]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Drums"
        title="Tambourine"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


