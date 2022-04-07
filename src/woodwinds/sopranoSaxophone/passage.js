import React from 'react';
import Instrument from "./../../instrument";
import vid from './passage.mp4';
import score from './passage.png';

const instrumentText = {
  0: "This passage (a synthetic imitation of passage-work found in saxophone concertos) displays the agility and dynamic responsiveness of the instrument throughout its range.",
  3: "This passage (a synthetic imitation of passage-work found in saxophone concertos) displays the agility and dynamic responsiveness of the instrument throughout its range.",
  6: "This passage (a synthetic imitation of passage-work found in saxophone concertos) displays the agility and dynamic responsiveness of the instrument throughout its range.",
  9: "This passage (a synthetic imitation of passage-work found in saxophone concertos) displays the agility and dynamic responsiveness of the instrument throughout its range.",
  15: "This passage (a synthetic imitation of passage-work found in saxophone concertos) displays the agility and dynamic responsiveness of the instrument throughout its range.",
}

const morePages = [["/sopranoSaxRR","Range & Registers"],
["/sopranoSaxRC","Register Colors"],
["/sopranoSaxAC","Articulation Colors"],
["/sopranoSaxMAVC","More Articulation & Vibrato Colors"]]

const gridHeights = [122, 97, 100, 100, 100]
const gridWidths = [[25, 450],
                    [25, 450],
                    [25, 450],
                    [25, 450],
                    [25, 450]]
const gridTimes = [[0], [3], [6], [9], [15]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Soprano Saxophone"
        title="Passage"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}
        morePages={morePages}/>
    </div>
  );
}
