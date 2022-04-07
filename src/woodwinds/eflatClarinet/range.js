import React from 'react';
import Instrument from "./../../instrument";
import vid from './range.mp4';
import score from './range.png';

const instrumentText = {
  0: "Performer: Tasha Warren.\n\n" +
    "The E-flat clarinet sounds a minor 3rd higher than written. (A G-major scale \"sounds\" B-flat major.)\n\n" +
    "These pitches move from the middle of the chalumeau register into the \"throat tones.\" The distinctive quality of these low registers is less apparent than on the B-flat or A clarinet.",
  5: "Performer: Tasha Warren.\n\n" +
    "Moving from the top of the \"throat tones\" to the bottom of the clarion register, note how all the fingers go down to play the written B, moving over the register \"break.\" The clarion register is bright and clear. ",
  9: "The top range of the E-flat clarinet is exceptionally bright and clear.",
  14: "The lowest notes of the E-flat clarinet are useful for range purposes, but lack the color of the clarinet.",
}

const morePages = [["/eflatClarinetRC","Register Colors"],
["/eflatClarinetAC","Articulation Colors"],
["/eflatClarinetP","Passage"],
["/eflatClarinetAP","Another Passage"]]

const gridHeights = [230, 200]
const gridWidths = [[20, 283, 165],
                    [15, 250, 200]]
const gridTimes = [[0, 5],
                  [9, 14]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="E-flat Clarinet"
        title="Range"
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
