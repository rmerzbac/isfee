import React from 'react';
import Instrument from "./../../instrument";
import vid from './passageTSx.mp4'
import score from './passageTSx.png'

const instrumentText = {
  0: "Performer: Stacy Wilson\n\n" + 
  "This passage (a synthetic imitation of passage-work found in saxophone concertos) displays the agility and dynamic responsiveness of the instrument throughout its range.",
  3: "Performer: Stacy Wilson\n\n" + 
  "This passage (a synthetic imitation of passage-work found in saxophone concertos) displays the agility and dynamic responsiveness of the instrument throughout its range.",	
  6: "Performer: Stacy Wilson\n\n" + 
  "This passage (a synthetic imitation of passage-work found in saxophone concertos) displays the agility and dynamic responsiveness of the instrument throughout its range.",
  10: "Performer: Stacy Wilson\n\n" + 
  "This passage (a synthetic imitation of passage-work found in saxophone concertos) displays the agility and dynamic responsiveness of the instrument throughout its range.",	
  15: "Performer: Stacy Wilson\n\n" + 
  "This passage (a synthetic imitation of passage-work found in saxophone concertos) displays the agility and dynamic responsiveness of the instrument throughout its range."
}

const gridHeights = [130, 90, 96, 96, 110]
const gridWidths = [[40, 480], [40, 480], [40, 480], [40, 480], [40, 480]]
const gridTimes = [[0], [3], [6], [10], [15]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Tenor Saxophone"
        title="Excerpts"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


