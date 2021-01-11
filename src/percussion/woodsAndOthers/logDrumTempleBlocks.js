import React from 'react';
import Instrument from "./../../instrument";
import vid from './logDrumTempleBlocks.mp4'
import score from './logDrumTempleBlocks.png'

const instrumentText = {
  0: "Performer: Eric Guinivan\n\n" +
    "The log drum is also known as the \"slit drum\" and the \"wood drum.\" Its standard construction is a wooden box with the top cut to create two tongues, which sound two different pitches when struck. Wood drums are found in a variety of sizes, and can be paired to create 4 distinct pitches, as in this demonstration. Medium yarn mallets will create the fullest sound.",
  7: "Performer: Eric Guinivan\n\n" +
    "The log drum is also known as the \"slit drum\" and the \"wood drum.\" Its standard construction is a wooden box with the top cut to create two tongues, which sound two different pitches when struck. Wood drums are found in a variety of sizes, and can be paired to create 4 distinct pitches, as in this demonstration. Hard rubber mallets emphasized the \"wooden\" quality of the drum.",
  14: "Performer: Eric Guinivan\n\n" +
    "When wood is used on wood, the sound of stick itself becomes an important component of the sound, which can be modulated by switching from the heavy, rounded handles to light, pointed tips.",
  22: "Performer: Eric Guinivan\n\n" +
    "Striking the drums on the sides may create a drier, higher sound, although this sound may not be resonant on some instruments.",
  29: "Performer: Eric Guinivan\n\n" +
    "This passage displays a combination of the 3 pitches available on each drum.",
  40: "Performer: Eric Guinivan\n\n" +
    "Temple blocks (when compared with wood blocks) have a deeper more resonant sound, particularly when played with yarn mallets. They are usually used as a group of 5 semi-indefinite pitches.",
  51: "Performer: Eric Guinivan\n\n" +
    "Temple blocks (when compared with wood blocks) have a deeper more resonant sound, particularly when played with yarn mallets. They are usually used as a group of 5 semi-indefinite pitches.",
  58: "Performer: Eric Guinivan\n\n" +
    "Temple blocks (when compared with wood blocks) have a deeper more resonant sound, particularly when played with yarn mallets. They are usually used as a group of 5 semi-indefinite pitches.",
}

const gridHeights = [120, 96, 60, 110, 65, 70]
const gridWidths = [[40, 210, 270], [40, 200, 280], [40, 480], [40, 480], [40, 480], [40, 480]]
const gridTimes = [[0, 7], [14, 22], [29], [40], [51], [58]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Woods & Others"
        title="Log Drums & Temple Blocks"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


