import React from 'react';
import Instrument from "./../../instrument";
import vid from './trillsTremolos.mp4';
import score from './trillsTremolos.png';

const instrumentText = {
  0: "This example illustrates one use of \"harmonics\" on the saxophone. Alternate fingerings are available for most pitches. If the fingering is not notated, the performer will find an alternate fingering that will provide a change in color. ",
  12: "As these trills become tremolos, and as the tremolos get wider, note how more fingers are involved in motion. Notice also how the sound wave becomes more resistant to change as the interval grows.",
  19: "As these trills become tremolos, and as the tremolos get wider, note how more fingers are involved in motion. Notice also how the sound wave becomes more resistant to change as the interval grows.",
  26: "As these trills become tremolos, and as the tremolos get wider, note how more fingers are involved in motion. Notice also how the sound wave becomes more resistant to change as the interval grows.",
  33: "As these trills become tremolos, and as the tremolos get wider, note how more fingers are involved in motion. Notice also how the sound wave becomes more resistant to change as the interval grows.",
  41: "As these trills become tremolos, and as the tremolos get wider, note how more fingers are involved in motion. Notice also how the sound wave becomes more resistant to change as the interval grows.",
  52: "The fingering for the notes in this lowest region calls for the use of the little fingers of both hands.",
  62: "The fingering for the notes in this lowest region calls for the use of the little fingers of both hands. To play C# to B, the left hand's little finger must slide from the C# key to the B key.",
}

const gridHeights = [130, 160, 130]
const gridWidths = [[35, 440],
                    [35, 85, 80, 80, 80, 80],
                    [35, 213, 220]]
const gridTimes = [[0], [12, 19, 26, 33, 41], [52, 62]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Alto Saxophone"
        title="Trills & Tremolos"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
