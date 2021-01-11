import React from 'react';
import Instrument from "./../../instrument";
import vid from './Piano 009 arpeggios.mp4';
import score from './Piano 009 arpeggios.png';

const instrumentText = {
  0: "Arpeggios are played by moving fingers over the thumb, or the thumb under the fingers.",
  5: "Arpeggios are played by moving fingers over the thumb, or the thumb under the fingers.",
  11: "Since the principal difficulty in playing arpeggios is moving from one position to the next, arpeggios with 4 notes per position can generally be played faster than arpeggios with 3 notes per position.",
  16: "An arpeggio pattern which doubles back on itself, such as the one shown here, can be played with greater facility than one requiring thumb-under or fingers-over.",
  19: "An arpeggio pattern which doubles back on itself, such as the one shown here, can be played with greater facility than one requiring thumb-under or fingers-over."
}

const gridHeights = [130, 128, 115, 120];
const gridWidths = [[35, 440], [35, 440], [35, 440], [35, 190, 245]];
const gridTimes = [[0], [5], [11], [16, 19]];

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Piano"
        title="Arpeggios"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
