import React from 'react';
import Instrument from "./../../instrument";
import vid from './woodBlocksClavesCastanets.mp4'
import score from './woodBlocksClavesCastanets.png'

const instrumentText = {
  0: "Performer: Eric Guinivan\n\n" + 
  "Wood blocks are slightly drier and brighter than temple blocks, and more indefinite in pitch.",
  15: "Performer: Eric Guinivan\n\n" + 
  "Wood blocks are slightly drier and brighter than temple blocks, and more indefinite in pitch.",
  25: "Performer: Eric Guinivan\n\n" + 
  "Claves -- two pitches of wood struck together -- have a very bright and incisive sound. They can project clearly even when played quietly.",
  36: "Performer: Eric Guinivan\n\n" + 
  "Castanets used in a percussion section differ in the way they are constructed and played from the traditional folk instruments. The construction shown here allows for detailed rhythmic articulation and convincing rolls. Although two castanets are traditionally employed, the rhythm is generally written as a single line.",
  41: "Performer: Eric Guinivan\n\n" + 
  "Castanets used in a percussion section differ in the way they are constructed and played from the traditional folk instruments. The construction shown here allows for detailed rhythmic articulation and convincing rolls. Although two castanets are traditionally employed, the rhythm is generally written as a single line.",
}

const gridHeights = [120, 90, 100, 100, 100]
const gridWidths = [[40, 480], [40, 480], [40, 480], [40, 480], [40, 480]]
const gridTimes = [[0], [15], [25], [36], [41]]


export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Woods & Others"
        title="Wood Blocks, Claves, & Castanets"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


