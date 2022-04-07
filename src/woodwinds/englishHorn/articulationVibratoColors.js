import React from 'react';
import Instrument from "./../../instrument";
import vid from './articulationVibratoColors.mp4';
import score from './articulationVibratoColors.png';

const instrumentText = {
  0: "This staccato articulation speaks crisply, even in the lowest range of the English Horn.",
  3: "This staccato articulation speaks crisply, even in the lowest range of the English Horn.",
  7: "Some vibrato is almost always used on the English Horn, applied according to the taste and discretion of the performer. Composers may specify varying amounts of vibrato, and can expect a significant change of color.",
  24: "Some vibrato is almost always used on the English Horn, applied according to the taste and discretion of the performer. Composers may specify varying amounts of vibrato, and can expect a significant change of color.",
  31: "Downward pitch-bend of no more than a half-step can be accomplished with an adjustment of the embouchure.",
  37: "Downward pitch-bend of no more than a half-step can be accomplished with an adjustment of the embouchure.",
}

const morePages = [["/englishHornRR","Range & Registers"],
["/englishHornRC","Register Colors"],
["/englishHornPAC","Passages & Articultion Colors"]]

const gridHeights = [175, 180]
const gridWidths = [[35, 210, 220],
                    [35, 190, 90, 70, 60]]
const gridTimes = [[0, 3], [7, 24, 31, 37]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="English Horn"
        title="Articulation & Vibrato Colors"
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
