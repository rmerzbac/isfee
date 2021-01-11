import React from 'react';
import Instrument from "./../../instrument";
import vid from './passagesBTbn.mp4'
import score from './passagesBTbn.png'

const instrumentText = {
  0: "Performer: Bryan Heath\n\n" +
  "The dark rich color of the bass trombone is ideal for providing the solid foundation of a trombone chorale, such as this passage from the fourth movement of Brahms's First Symphony.",
  22: "Performer: Bryan Heath\n\n" +
  "This passage from Respighi's Fountains of Rome displays the bass trombone's power and agility in a range where the tenor trombone might sound less full.",
  26: "Performer: Bryan Heath\n\n" +
  "This passage from Respighi's Fountains of Rome displays the bass trombone's power and agility in a range where the tenor trombone might sound less full.",
  29: "Performer: Bryan Heath\n\n" +
  "This passage from Respighi's Fountains of Rome displays the bass trombone's power and agility in a range where the tenor trombone might sound less full.",
  33: "Performer: Bryan Heath\n\n" +
  "This passage from Respighi's Fountains of Rome displays the bass trombone's power and agility in a range where the tenor trombone might sound less full."
}

const gridHeights = [120, 100, 80, 70, 80]
const gridWidths = [[40, 480], [40, 480], [40, 480], [40, 480], [40, 480]]
const gridTimes = [[0], [22], [26], [29], [33]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Bass Trombone"
        title="Passages"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


