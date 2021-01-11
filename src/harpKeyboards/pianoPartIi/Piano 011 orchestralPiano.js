import React from 'react';
import Instrument from "./../../instrument";
import vid from './Piano 011 orchestralPiano.mp4';
import score from './Piano 011 orchestralPiano.png';

const instrumentText = {
  0: "When using the piano to add strength or color to an orchestral layer, composers frequently emphasize the distinctive aspects of the piano's sound and technique, using extreme range and idiomatic passagework, rather than literally doubling a part.\n\n" +
    "Here is a short catalog of some typical idiomatic orchestral piano gestures.",
  4: "When using the piano to add strength or color to an orchestral layer, composers frequently emphasize the distinctive aspects of the piano's sound and technique, using extreme range and idiomatic passagework, rather than literally doubling a part.\n\n" +
    "Here is a short catalog of some typical idiomatic orchestral piano gestures.",
  8: "When using the piano to add strength or color to an orchestral layer, composers frequently emphasize the distinctive aspects of the piano's sound and technique, using extreme range and idiomatic passagework, rather than literally doubling a part.\n\n" +
    "Here is a short catalog of some typical idiomatic orchestral piano gestures.",
  12: "When using the piano to add strength or color to an orchestral layer, composers frequently emphasize the distinctive aspects of the piano's sound and technique, using extreme range and idiomatic passagework, rather than literally doubling a part.\n\n" +
    "Here is a short catalog of some typical idiomatic orchestral piano gestures.",
  14: "When using the piano to add strength or color to an orchestral layer, composers frequently emphasize the distinctive aspects of the piano's sound and technique, using extreme range and idiomatic passagework, rather than literally doubling a part.\n\n" +
    "Here is a short catalog of some typical idiomatic orchestral piano gestures.",
  15: "When using the piano to add strength or color to an orchestral layer, composers frequently emphasize the distinctive aspects of the piano's sound and technique, using extreme range and idiomatic passagework, rather than literally doubling a part.\n\n" +
    "Here is a short catalog of some typical idiomatic orchestral piano gestures.",
  17: "When using the piano to add strength or color to an orchestral layer, composers frequently emphasize the distinctive aspects of the piano's sound and technique, using extreme range and idiomatic passagework, rather than literally doubling a part.\n\n" +
    "Here is a short catalog of some typical idiomatic orchestral piano gestures.",
  20: "When using the piano to add strength or color to an orchestral layer, composers frequently emphasize the distinctive aspects of the piano's sound and technique, using extreme range and idiomatic passagework, rather than literally doubling a part.\n\n" +
    "Here is a short catalog of some typical idiomatic orchestral piano gestures."
}

const gridHeights = [160, 150, 155];
const gridWidths = [[35, 105, 130, 195], [35, 125, 120, 185], [30, 190, 250]];
const gridTimes = [[0, 4, 8], [12, 14, 15], [17, 20]];

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Piano"
        title="Orchestral Piano"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
