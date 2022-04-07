import React from 'react';
import Instrument from "./../../instrument";
import vid from './passageBrSx.mp4'
import score from './passageBrSx.png'

const instrumentText = {
  0: "Performer: Stacy Wilson\n\n" +
    "This passage (a synthetic imitation of passage-work found in saxophone concertos) displays the agility and dynamic responsiveness of the instrument throughout its range.",
  3: "Performer: Stacy Wilson\n\n" +
    "This passage (a synthetic imitation of passage-work found in saxophone concertos) displays the agility and dynamic responsiveness of the instrument throughout its range.",
  6: "Performer: Stacy Wilson\n\n" +
    "This passage (a synthetic imitation of passage-work found in saxophone concertos) displays the agility and dynamic responsiveness of the instrument throughout its range.",
  10: "Performer: Stacy Wilson\n\n" +
    "This passage (a synthetic imitation of passage-work found in saxophone concertos) displays the agility and dynamic responsiveness of the instrument throughout its range.",
  16: "Performer: Stacy Wilson\n\n" +
    "This passage (a synthetic imitation of passage-work found in saxophone concertos) displays the agility and dynamic responsiveness of the instrument throughout its range."
}

const morePages = [["/BaritoneSaxophoneRR","Range & Registers"],
["/BaritoneSaxophoneRC","Register Colors"],
["/BaritoneSaxophoneAC","Articulation Colors"],
["/BaritoneSaxophoneMAVC","More Articulations & Vibrato Colors"]]

const gridHeights = [120, 96, 106, 100, 110]
const gridWidths = [[40, 480], [40, 480], [40, 480], [40, 480], [40, 480]]
const gridTimes = [[0], [3], [6], [10], [16]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Baritone Saxophone"
        title="Passages"
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
