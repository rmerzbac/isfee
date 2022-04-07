import React from 'react';
import Instrument from "./../../instrument";
import vid from './passages.mp4';
import score from './passages.png';

const instrumentText = {
  0: "This excerpt from the second movement of Schubert's 9th Symphony displays the wonderfully expressive variety of articulations subtleties which the oboe can project with unparalleled clarity.",
  12: "This excerpt from the second movement of Schubert's 9th Symphony displays the wonderfully expressive variety of articulation subtleties that  the oboe can project with unparalleled clarity.",
  23: "This excerpt is from Rossini's Overture to \"La Scala di Seta.\" It demonstrates the sparkling articulation possible throughout most of the oboe's range. It is presented twice: first as Rossini wrote it and then as it is usually performed, with some added details of articulation.",
  27: "This excerpt is from Rossini's Overture to \"La Scala di Seta.\" It demonstrates the sparkling articulation possible throughout most of the oboe's range. It is presented twice: first as Rossini wrote it and then as it is usually performed, with some added details of articulation.",
  30: "This excerpt is from Rossini's Overture to \"La Scala di Seta.\" It demonstrates the sparkling articulation possible throughout most of the oboe's range. It is presented twice: first as Rossini wrote it and then as it is usually performed, with some added details of articulation.",
  35: "This excerpt is from Rossini's Overture to \"La Scala di Seta.\" It demonstrates the sparkling articulation possible throughout most of the oboe's range. It is presented twice: first as Rossini wrote it and then as it is usually performed, with some added details of articulation.",
  39: "This excerpt is from Rossini's Overture to \"La Scala di Seta.\" It demonstrates the sparkling articulation possible throughout most of the oboe's range. It is presented twice: first as Rossini wrote it and then as it is usually performed, with some added details of articulation.",
  42: "This excerpt is from Rossini's Overture to \"La Scala di Seta.\" It demonstrates the sparkling articulation possible throughout most of the oboe's range. It is presented twice: first as Rossini wrote it and then as it is usually performed, with some added details of articulation."
}

const morePages = [["/oboeRRT","Range, Registers, & Tremolos"],
["/oboeRC","Register Colors"],
["/oboeAP","Another Passage"],
["/oboeAVC","Articulation & Vibrato Colors"]]

const gridHeights = [70, 60, 77, 50, 50, 80, 45, 45]
const gridWidths = [[25, 450],
                    [25, 450],
                    [25, 450],
                    [25, 450],
                    [25, 450],
                    [25, 450],
                    [25, 450],
                    [25, 450]]
const gridTimes = [[0], [12], [23], [27], [30], [35], [39], [42]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Oboe"
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
