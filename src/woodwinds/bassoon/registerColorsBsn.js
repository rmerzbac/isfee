import React from 'react';
import Instrument from "./../../instrument";
import vid from './registerColorsBsn.mp4'
import score from './registerColorsBsn.png'

const instrumentText = {
  0: "Performer: Matthew Hogan\n\n" +
  "The lowest register of the bassoon is heavy and dark in color. Variations of dynamics and articulations are slightly less responsive than in the middle range.",
  5: "Performer: Matthew Hogan\n\n" +
  "The lowest register of the bassoon is heavy and dark in color. Variations of dynamics and articulations are slightly less responsive than in the middle range.",
  8: "Performer: Matthew Hogan\n\n" +
  "The lowest register of the bassoon is heavy and dark in color. Variations of dynamics and articulations are slightly less responsive than in the middle range.",
  11: "Performer: Matthew Hogan\n\n" +
  "The lowest register of the bassoon is heavy and dark in color. Variations of dynamics and articulations are slightly less responsive than in the middle range.",
  16: "Performer: Matthew Hogan\n\n" +
  "In this middle-low register the bassoon timbre has its greatest authority. Here it can create its greatest dynamic contrast, and the articulation is very clear.",
  20: "Performer: Matthew Hogan\n\n" +
  "In this middle-low register the bassoon timbre has its greatest authority. Here it can create its greatest dynamic contrast, and the articulation is very clear.",
  24: "Performer: Matthew Hogan\n\n" +
  "In this middle-low register the bassoon timbre has its greatest authority. Here it can create its greatest dynamic contrast, and the articulation is very clear.",
  27: "Performer: Matthew Hogan\n\n" +
  "In this middle-low register the bassoon timbre has its greatest authority. Here it can create its greatest dynamic contrast, and the articulation is very clear.",
  32: "Performer: Matthew Hogan\n\n" +
  "In this middle-high range the bassoon displays its greatest lyric expressiveness. This register is very agile and articulate.",
  36: "Performer: Matthew Hogan\n\n" +
  "In this middle-high range the bassoon displays its greatest lyric expressiveness. This register is very agile and articulate.",
  39: "Performer: Matthew Hogan\n\n" +
  "In this middle-high range the bassoon displays its greatest lyric expressiveness. This register is very agile and articulate.",
  43: "Performer: Matthew Hogan\n\n" +
  "In this middle-high range the bassoon displays its greatest lyric expressiveness. This register is very agile and articulate.",
  48: "Performer: Matthew Hogan\n\n" +
  "In the region above middle C the bassoon looses some of its timbral richness and capacity for dramatic contrast, but its plaintive, singing tone can be very expressive.\n\n" +
  "PLEASE NOTE: These pitches would normally be notated in tenor clef. Bass clef is used here to emphasize range relationships.",
  52: "Performer: Matthew Hogan\n\n" +
  "In the region above middle C the bassoon looses some of its timbral richness and capacity for dramatic contrast, but its plaintive, singing tone can be very expressive.\n\n" +
  "PLEASE NOTE: These pitches would normally be notated in tenor clef. Bass clef is used here to emphasize range relationships.",
  55: "Performer: Matthew Hogan\n\n" +
  "In the region above middle C the bassoon looses some of its timbral richness and capacity for dramatic contrast, but its plaintive, singing tone can be very expressive.\n\n" +
  "PLEASE NOTE: These pitches would normally be notated in tenor clef. Bass clef is used here to emphasize range relationships.",
  59: "Performer: Matthew Hogan\n\n" +
  "In the region above middle C the bassoon looses some of its timbral richness and capacity for dramatic contrast, but its plaintive, singing tone can be very expressive.\n\n" +
  "PLEASE NOTE: These pitches would normally be notated in tenor clef. Bass clef is used here to emphasize range relationships."	
}

const gridHeights = [130, 90, 90, 100]
const gridWidths = [[40, 110, 110, 110, 150], [40, 110, 110, 110, 150], [40, 110, 110, 110, 150], [40, 110, 110, 110, 150]]
const gridTimes = [[0, 5, 8, 11], [16, 20, 24, 27], [32, 36, 39, 43], [48, 52, 55, 59]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Bassoon"
        title="Register Colors"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


