import React from 'react';
import Instrument from "./../../instrument";
import vid from './passage.mp4';
import score from './passage.png';

const instrumentText = {
  0: "This passage (a synthetic imitation of passage-work found in saxophone concertos) displays the agility and dynamic responsiveness of the instrument throughout its range. ",
  3: "This passage (a synthetic imitation of passage-work found in saxophone concertos) displays the agility and dynamic responsiveness of the instrument throughout its range.",
  6: "This passage (a synthetic imitation of passage-work found in saxophone concertos) displays the agility and dynamic responsiveness of the instrument throughout its range.",
  10: "This passage (a synthetic imitation of passage-work found in saxophone concertos) displays the agility and dynamic responsiveness of the instrument throughout its range.",
  15: "This passage (a synthetic imitation of passage-work found in saxophone concertos) displays the agility and dynamic responsiveness of the instrument throughout its range.",
}

const gridHeights = [122, 97, 100, 100, 100]
const gridWidths = [[25, 450],
                    [25, 450],
                    [25, 450],
                    [25, 450],
                    [25, 450]]
const gridTimes = [[0], [3], [6], [10], [15]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Alto Saxophone"
        title="Passage"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
