import React from 'react';
import Instrument from "./../../instrument";
import vid from './passages2Tbn.mp4'
import score from './passages2Tbn.png'

const instrumentText = {
  0: "Performer: Bryan Heath\n\n" +
  "This passage from Wagner's \"Ride of the Valkyries\" allows the trombone to be heard at its most powerful and heroic throughout two octaves of its middle to high range.",
  5: "Performer: Bryan Heath\n\n" +
  "This passage from Wagner's \"Ride of the Valkyries\" allows the trombone to be heard at its most powerful and heroic throughout two octaves of its middle to high range.",
  12: "Performer: Bryan Heath\n\n" +
  "This passage from Wagner's \"Ride of the Valkyries\" allows the trombone to be heard at its most powerful and heroic throughout two octaves of its middle to high range.",
  19: "Performer: Bryan Heath\n\n" +
  "This passage from Wagner's \"Ride of the Valkyries\" allows the trombone to be heard at its most powerful and heroic throughout two octaves of its middle to high range.",
  25: "Performer: Bryan Heath\n\n" +
  "This passage from Wagner's \"Ride of the Valkyries\" allows the trombone to be heard at its most powerful and heroic throughout two octaves of its middle to high range.",
  32: "Performer: Bryan Heath\n\n" +
  "This passage from Wagner's \"Ride of the Valkyries\" allows the trombone to be heard at its most powerful and heroic throughout two octaves of its middle to high range.",
}

const gridHeights = [110, 80, 70, 70, 70, 80]
const gridWidths = [[40, 480], [40, 480], [40, 480], [40, 480], [40, 480], [40, 480]]
const gridTimes = [[0], [5], [12], [19], [25], [32]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Tenor Trombone"
        title="Passages II"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


