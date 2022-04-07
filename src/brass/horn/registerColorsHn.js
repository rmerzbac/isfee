import React from 'react';
import Instrument from "./../../instrument";
import vid from './registerColorsHn.mp4';
import score from './registerColorsHn.png';

const instrumentText = {

  0: "[Video commentary]"
}

const morePages = [["/HornHS","Harmonic Series"],
["/HornAC","Articulation Colors"],
["/HornSVT","Scales, Valves, & Triggers"],
["/HornST","Skips & Trills "],
["/HornTVC","Tonguing, & Vibrato Colors"],
["/HornSM","Stopping & Muting"],
["/HornP","Passages"],
["/HornNH","Natural Horn"],
["/HornBH","Baroque Horn"]]

const gridHeights = [230, 120, 170]
const gridWidths = [[40, 480],
[40, 480],
[40, 480]]
const gridTimes = [[0],
[11],
[20],]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Horn"
        title="Register Colors"
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
