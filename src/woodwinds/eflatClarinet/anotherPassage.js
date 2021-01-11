import React from 'react';
import Instrument from "./../../instrument";
import vid from './anotherPassage.mp4';
import score from './anotherPassage.png';

const instrumentText = {
  0: "This is another passage from Berlioz's Symphonie Fantastique, displaying the piercing power of the high-range of the E-flat clarinet. ",
  4: "This is another passage from Berlioz's Symphonie Fantastique, displaying the piercing power of the high-range of the E-flat clarinet.",
}

const gridHeights = [180, 180]
const gridWidths = [[35, 435],
                    [35, 435]]
const gridTimes = [[0], [4]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="E-flat Clarinet"
        title="Another Passage"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
