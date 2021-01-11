import React from 'react';
import Instrument from "./../../instrument";
import vid from './rangeRegistersTSx.mp4'
import score from './rangeRegistersTSx.png'

const instrumentText = {
  0: "Performer: Stacy Wilson\n\n" + 
  "The tenor saxophone is written in B-flat: the concert pitch sounds an octave and a major 2nd lower than the written pitch. The variety of the tone colors of the different registers of all members of the saxophone family are less pronounced than is the case with other woodwinds.\n\n" + 
  "The lower and middle registers are the most distinctive and colorful.",
  8: "Performer: Stacy Wilson\n\n" + 
  "The tenor saxophone is written in B-flat: the concert pitch sounds an octave and a major 2nd lower than the written pitch. The variety of the tone colors of the different registers of all members of the saxophone family are less pronounced than is the case with other woodwinds.\n\n" + 
  "As the written pitches go above the staff the color becomes brighter.",
  12: "Performer: Stacy Wilson\n\n" + 
  "The tenor saxophone is written in B-flat: the concert pitch sounds an octave and a major 2nd lower than the written pitch. The variety of the tone colors of the different registers of all members of the saxophone family are less pronounced than is the case with other woodwinds.\n\n" + 
  "The highest register is clear and slightly thinner.",
  17: "Performer: Stacy Wilson\n\n" + 
  "The bottom four notes of the saxophone are progressively more difficult to play softly as one descends. Quiet attacks are particularly treacherous in this region. The sound is naturally thick and heavy.",
}

const gridHeights = [290, 150]
const gridWidths = [[40, 160, 200, 120], [40, 480]]
const gridTimes = [[0, 8, 12], [17]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Tenor Saxophone"
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


