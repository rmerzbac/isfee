import React from 'react';
import Instrument from "./../../instrument";
import vid from './rangeRegisters.mp4';
import score from './rangeRegisters.png';

const instrumentText = {
  0: "Performer: Stacy Wilson\n\n" +
    "The soprano saxophone is written in B-flat: the concert pitch sounds a major 2nd lower than the written pitch. The variety of the tone colors of the different registers of all members of the saxophone family are less pronounced than is the case with other woodwinds.\n\n" +
    "The lower and middle registers are the most distinctive and colorful.",
  12: "Stacy Wilson\n\n" +
    "The soprano saxophone is written in B-flat: the concert pitch sounds a major 2nd lower than the written pitch. The variety of the tone colors of the different registers of all members of the saxophone family are less pronounced than is the case with other woodwinds.\n\n" +
    "As the written pitches go above the staff the color becomes brighter.",
  19: "Stacy Wilson\n\n" +
    "The soprano saxophone is written in B-flat: the concert pitch sounds a major 2nd lower than the written pitch. The variety of the tone colors of the different registers of all members of the saxophone family are less pronounced than is the case with other woodwinds.\n\n" +
    "The highest register is clear and slightly thinner.",
  25: "The bottom four notes of the saxophone are progressively more difficult to play softly as one descends. Quiet attacks are particularly treacherous in this region. The sound is naturally thick and heavy.",
}

const gridHeights = [220, 140]
const gridWidths = [[35, 210, 103, 110],
                    [35, 440]]
const gridTimes = [[0, 12, 19], [25]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Soprano Saxophone"
        title="Ranges & Registers"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
