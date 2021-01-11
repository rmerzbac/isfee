import React from 'react';
import Instrument from "./../../instrument";
import vid from './passagesBsn.mp4'
import score from './passagesBsn.png'

const instrumentText = {
  0: "Performer: Matthew Hogan\n\n" +
    "This passage from the overture to Mozart's \"Marriage of Figaro\" displays the bassoon's ability to function both as a bass instrument and as a lyric tenor.",
  3: "Performer: Matthew Hogan\n\n" +
    "This passage from the overture to Mozart's \"Marriage of Figaro\" displays the bassoon's ability to function both as a bass instrument and as a lyric tenor.",
  6: "Performer: Matthew Hogan\n\n" +
    "This passage from the overture to Mozart's \"Marriage of Figaro\" displays the bassoon's ability to function both as a bass instrument and as a lyric tenor.",
  10: "Performer: Matthew Hogan\n\n" +
    "This passage from the overture to Mozart's \"Marriage of Figaro\" displays the bassoon's ability to function both as a bass instrument and as a lyric tenor.",
  15: "Performer: Matthew Hogan\n\n" +
    "This solo from the 2nd movement of Rimsky-Korsakov's \"Scheherazade\" features grace-notes and copious articulation information, but its overall character remains seductively lyric.",
  24: "Performer: Matthew Hogan\n\n" +
    "This solo from the 2nd movement of Rimsky-Korsakov's \"Scheherazade\" features grace-notes and copious articulation information, but its overall character remains seductively lyric.",
  32: "Performer: Matthew Hogan\n\n" +
    "This solo from the 2nd movement of Rimsky-Korsakov's \"Scheherazade\" features grace-notes and copious articulation information, but its overall character remains seductively lyric.",
  43: "Performer: Matthew Hogan\n\n" +
    "This solo from the 2nd movement of Rimsky-Korsakov's \"Scheherazade\" features grace-notes and copious articulation information, but its overall character remains seductively lyric."
}

const gridHeights = [80, 60, 50, 50, 100, 55, 55, 60]
const gridWidths = [[40, 480], [40, 480], [40, 480], [40, 480], [40, 480], [40, 480], [40, 480], [40, 480]]
const gridTimes = [[0], [3], [6], [10], [15], [24], [32], [43]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Bassoon"
        title="Excerpts"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


