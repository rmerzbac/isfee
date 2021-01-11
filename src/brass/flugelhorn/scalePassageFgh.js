import React from 'react';
import Instrument from "./../../instrument";
import vid from './scalePassageFgh.mp4'
import score from './scalePassageFgh.png'

const instrumentText = {
  0: "Performer: Thaddeus Archer\n\n" +
  "The flugelhorn is a mostly conical bore instrument that is mellower and less brilliant than the trumpet. Its deeper mouthpiece cup darkens the sound.\n\n",
  14: "Performer: Thaddeus Archer\n\n" +
  "The flugelhorn is a mostly conical bore instrument that is mellower and less brilliant than the trumpet. Its deeper mouthpiece cup darkens the sound.\n\n" + 
  "The flugelhorn is not usually thought of as a high-range instrument, but as demonstrated here it can produce notes above the staff while maintaining its fullness and warmth.\n\n",
  17: "Performer: Thaddeus Archer\n\n" + 
  "The flugelhorn is a mostly conical bore instrument that is mellower and less brilliant than the trumpet. Its deeper mouthpiece cup darkens the sound.\n\n" +
  "The flugelhorn is not usually thought of as a high-range instrument, but as demonstrated here it can produce notes above the staff while maintaining its fullness and warmth.\n\n",
  22: "Performer: Thaddeus Archer\n\n" + 
  "Mahler's \"posthorn\" solo from his Third Symphony is often played on the flugelhorn. The dark rich tone of the flugelhorn provides a greater contrast to the trumpet timbre than the cornet.\n\n" +
  "It is interesting that Mahler, usually a fastidious provider of dynamic and articulation detail, left the solo unmarked, allowing the instrument to speak for itself.\n\n",
  35:"Performer: Thaddeus Archer\n\n" + 
  "Mahler's \"posthorn\" solo from his Third Symphony is often played on the flugelhorn. The dark rich tone of the flugelhorn provides a greater contrast to the trumpet timbre than the cornet.\n\n" +
  "It is interesting that Mahler, usually a fastidious provider of dynamic and articulation detail, left the solo unmarked, allowing the instrument to speak for itself.\n\n"
}

const gridHeights = [200, 160, 135]
const gridWidths = [[40, 290, 70, 120], [40, 480], [40, 480]]
const gridTimes = [[0, 14, 17], [22], [35]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Flugelhorn"
        title="Scales & Passages"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


