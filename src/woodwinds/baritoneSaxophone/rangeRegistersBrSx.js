import React from 'react';
import Instrument from "./../../instrument";
import vid from './rangeRegistersBrSx.mp4'
import score from './rangeRegistersBrSx.png'

const instrumentText = {
  0: "Performer: Stacy Wilson\n\n" +
  "The baritone saxophone is written in E-flat: the concert pitch sounds an octave and a major 6th lower than the written pitch. The variety of the tone colors of the different registers of all members of the saxophone family are less pronounced than is the case with other woodwinds.\n\n" +
  "The lower and middle registers are the most distinctive and colorful.",
  11: "Performer: Stacy Wilson\n\n" +
  "The baritone saxophone is written in E-flat: the concert pitch sounds an octave and a major 6th lower than the written pitch. The variety of the tone colors of the different registers of all members of the saxophone family are less pronounced than is the case with other woodwinds. As the written pitches go above the staff the color becomes brighter.",
  23: "Performer: Stacy Wilson\n\n" +
  "The baritone saxophone has an extra low-A key to allow its concert range to extend to low C. The bottom notes of the saxophone are progressively more difficult to play softly as one descends. Quiet attacks are particularly treacherous in this region. The sound is naturally thick and heavy."
}

const gridHeights = [300, 140]
const gridWidths = [[40, 240, 240], [40, 480]]
const gridTimes = [[0, 11], [23]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Baritone Saxophone"
        title="Range & Registers"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


