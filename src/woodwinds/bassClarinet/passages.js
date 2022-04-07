import React from 'react';
import Instrument from "./../../instrument";
import vid from './passages.mp4';
import score from './passages.png';

const instrumentText = {
  0: "These passages from Richard Strauss's \"Ein Heldenleben\" (which include quotes from other Strauss tone poems) display some of the range of character available on the bass clarinet.",
  6: "These passages from Richard Strauss's \"Ein Heldenleben\" (which include quotes from other Strauss tone poems) display some of the range of character available on the bass clarinet.",
  10: "These passages from Richard Strauss's \"Ein Heldenleben\" (which include quotes from other Strauss tone poems) display some of the range of character available on the bass clarinet."
}

const morePages = [["/bassClarinetR","Range"],
["/bassClarinetRC","Register Colors"],
["/bassClarinetAC","Articulation Colors"]]

const gridHeights = [150, 160]
const gridWidths = [[35, 435],
                    [35, 250, 185]]
const gridTimes = [[0], [6, 10]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Bass Clarinet"
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
