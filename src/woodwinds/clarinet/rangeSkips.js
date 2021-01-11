import React from 'react';
import Instrument from "./../../instrument";
import vid from './rangeSkips.mp4';
import score from './rangeSkips.png';

const instrumentText = {
  0: "Performer: Tasha Warren.\n\n" +
    "All examples in this unit employ the B-flat clarinet, sounding a major 2nd lower than written.\n\n" +
    "These pitches move from the middle of the chalumeau register into the \"throat tones.\" In the chalumeau register the predominance of the 3rd partial (sounding a perfect 12th above the fundamental) is most obvious, creating a dark, rich, but hollow quality.",
  6: "Performer: Tasha Warren. \n\n" +
    "All examples in this unit employ the B-flat clarinet, sounding a major 2nd lower than written. \n\n" +
    "Moving from the top of the \"throat tones\" to the bottom of the clarion register, note how all the fingers go down to play the written B, moving over the register \"break.\" The clarion register is bright and clear. ",
  12: "Performer: Tasha Warren. \n\n" +
    "All examples in this unit employ the B-flat clarinet, sounding a major 2nd lower than written. \n\n" +
    "The top of the clarinet range is even brighter in color than the flute.",
  18: "These are the lowest notes of the clarinet range, and the most distinctive in color.",
  26: "Unlike other woodwind instruments, the clarinet overblows at the 12th, using the same fingerings for notes a 12th apart in this region, with the addition of the register key.",
  31: "Unlike other woodwind instruments, the clarinet overblows at the 12th, using the same fingerings for notes a 12th apart in this region, with the addition of the register key. \n\n" +
    "Note how these downward slurs encounter slightly more resistance as the register breaks downward.",
  36: "This example illustrates one use of \"harmonics\" on the clarinet. Alternate fingerings are available for most pitches. If the fingering is not notated, the performer will find an alternate fingering that will provide a change in color. ",
}

const gridHeights = [180, 150, 160]
const gridWidths = [[35, 160, 143, 120],
                    [35, 200, 235],
                    [35, 200, 235]]
const gridTimes = [[0, 6, 12], [18, 26], [31, 36]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Clarinet"
        title="Range & Skips"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
