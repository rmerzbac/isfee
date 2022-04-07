import React from 'react';
import Instrument from "./../../instrument";
import vid from './anotherPassage.mp4';
import score from './anotherPassage.png';

const instrumentText = {
  0: "This excerpt is from Rossini's Overture to \"The Italian in Algiers.\" It is presented twice: first with the 16th-notes as Rossini wrote it and then as it is usually performed, with much more articulation.",
  4: "This excerpt is from Rossini's Overture to \"The Italian in Algiers.\" It is presented twice: first with the 16th-notes as Rossini wrote it and then as it is usually performed, with much more articulation.",
  10: "This excerpt is from Rossini's Overture to \"The Italian in Algiers.\" It is presented twice: first with the 16th-notes as Rossini wrote it and then as it is usually performed, with much more articulation.",
  13: "This excerpt is from Rossini's Overture to \"The Italian in Algiers.\" It is presented twice: first with the 16th-notes as Rossini wrote it and then as it is usually performed, with much more articulation.",
}

const morePages = [["/oboeRRT","Range, Registers, & Tremolos"],
["/oboeRC","Register Colors"],
["/oboeP","Passages"],
["/oboeAVC","Articulation & Vibrato Colors"]]

const gridHeights = [95, 70, 120, 60]
const gridWidths = [[25, 450],
                    [25, 450],
                    [25, 450],
                    [25, 450]]
const gridTimes = [[0], [4], [10], [13]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Oboe"
        title="Another Passage"
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
