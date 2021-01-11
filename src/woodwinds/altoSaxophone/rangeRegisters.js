import React from 'react';
import Instrument from "./../../instrument";
import vid from './rangeRegisters.mp4';
import score from './rangeRegisters.png';

const instrumentText = {
  0: "Performer: Stacy Wilson\n\n" +
    "The alto saxophone is written in E-flat: the concert pitch sounds a major 6th lower than the written pitch. The variety of the tone colors of the different registers of all members of the saxophone family are less pronounced than is the case with other woodwinds.\n\n" +
    "The lower and middle registers are the most distinctive and colorful.",
  11: "Performer: Stacy Wilson\n\n" +
    "The alto saxophone is written in E-flat: the concert pitch sounds a major 6th lower than the written pitch. The variety of the tone colors of the different registers of all members of the saxophone family are less pronounced than is the case with other woodwinds.\n\n" +
    "As the written pitches go above the staff the color becomes brighter.",
  16: "Performer: Stacy Wilson\n\n" +
    "The alto saxophone is written in E-flat: the concert pitch sounds a major 6th lower than the written pitch. The variety of the tone colors of the different registers of all members of the saxophone family are less pronounced than is the case with other woodwinds.\n\n" +
    "The highest standard register is clear and slightly thinner.",
  22: "The bottom four notes of the saxophone are progressively more difficult to play softly as one descends. Quiet attacks are particularly treacherous in this region. The sound is naturally thick and heavy.",
  33: "These pitches (and beyond) are the \"altissimo\" range of the alto saxophone, beyond the standard range of the instrument. Most alto saxophonists can perform is this register, but pitch, facility, and tone color become more unpredictable the higher one gets. The altissimo register is less developed for the tenor and baritone saxophones, and is rarely used for soprano saxophone.",
  45: "Although saxophone fingering resembles the clarinet's clarion register, the saxophone overblows at the octave, not the 12th. Here the octave key, played by the left hand thumb, is used to produce octave skips.",
  54: "Although saxophone fingering resembles the clarinet's clarion register, the saxophone overblows at the octave, not the 12th. Here the octave key, played by the left hand thumb, is used to produce octave skips.\n\n" +
    "Note how these downward slurs encounter slightly more resistance as the register breaks downward.",
}

const gridHeights = [220, 140, 150]
const gridWidths = [[35, 210, 103, 110],
                    [35, 170, 260],
                    [35, 220, 190]]
const gridTimes = [[0, 11, 16], [22, 33], [45, 54]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Alto Saxophone"
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
