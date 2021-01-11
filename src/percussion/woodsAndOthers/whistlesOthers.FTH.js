import React from 'react';
import Instrument from "./../../instrument";
import vid from './whistlesOthers.mp4'
import score from './whistlesOthers.png'

const instrumentText = {
  0: "Performer: Eric Guinivan\n\n" +
    "The vibraslap is effective when struck once to color an attack.",
  4: "Performer: Eric Guinivan\n\n" +
    "The ratchet is capable of articulating rhythms as well providing a sustained noise.",
  7: "Performer: Eric Guinivan\n\n" +
    "The guiro can produce long or short strokes, providing a distinctive rhythmic personality.",
  15: "Performer: Eric Guinivan\n\n" +
    "Shakers of many sizes and materials are available, and can provide a nuanced variety of articulations.",
  21: "Performer: Eric Guinivan\n\n" +
    "Clay flower pots can be found in many sizes, and provide an interesting alternative to woods and metals.",
  31: "Performer: Eric Guinivan\n\n" +
    "Clay flower pots can be found in many sizes, and provide an interesting alternative to woods and metals.",
  39: "Performer: Eric Guinivan\n\n" +
    "Most percussion inventories are well stocked with whistles and sirens.",
  44: "Performer: Eric Guinivan\n\n" +
    "Most percussion inventories are well stocked with whistles and sirens.",
  48: "Performer: Eric Guinivan\n\n" +
    "Most percussion inventories are well stocked with whistles and sirens.",
  55: "Performer: Eric Guinivan\n\n" +
    "Most percussion inventories are well stocked with whistles and sirens.",
}

const gridHeights = [135]
const gridWidths = [[40, 480]]
const gridTimes = [[0]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Woods & Others"
        title="Whistles & Others"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


