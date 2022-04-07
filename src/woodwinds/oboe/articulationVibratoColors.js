import React from 'react';
import Instrument from "./../../instrument";
import vid from './articulationVibratoColors.mp4';
import score from './articulationVibratoColors.png';

const instrumentText = {
  0: "The oboe is very responsive to fast passagework throughout its range.\n\n" +
    "Even when slurred, each note speaks very clearly.",
  7: "The oboe is very responsive to fast passagework throughout its range. \n\n" +
    "The slur-two-tongue-two articulation is the most common fast articulation in all wind music.",
  13: "The oboe is very responsive to fast passagework throughout its range. \n\n" +
    "Single-tonguing is generally slower than the other articulation options demonstrated here, but is also the most deliberate and forceful.\n\n" +
    "Double-tonguing is not demonstrated here, but it is becoming a more common articulation for oboists; it is an option that may be chosen by the performer for fast passages.",
  18: "This staccato articulation speaks crisply, even in the lowest range of the oboe.",
  21: "This staccato articulation speaks crisply, even in the lowest range of the oboe.",
  25: "Some vibrato is almost always used on the oboe, applied according to the taste and discretion of the performer. Composers may specify varying amounts of vibrato, and can expect a significant change of color.",
  33: "Some vibrato is almost always used on the oboe, applied according to the taste and discretion of the performer. Composers may specify varying amounts of vibrato, and can expect a significant change of color.",
  43: "Some vibrato is almost always used on the oboe, applied according to the taste and discretion of the performer. Composers may specify varying amounts of vibrato, and can expect a significant change of color.",
  53: "Downward pitch-bend of no more than a half-step can be accomplished with an adjustment of the embouchure.",
  60: "Downward pitch-bend of no more than a half-step can be accomplished with an adjustment of the embouchure.",
}

const morePages = [["/oboeRRT","Range, Registers, & Tremolos"],
["/oboeRC","Register Colors"],
["/oboeP","Passages"],
["/oboeAP","Another Passage"]]

const gridHeights = [95, 70, 100, 110, 100]
const gridWidths = [[25, 450],
                    [25, 450],
                    [25, 450],
                    [25, 225, 220],
                    [25, 75, 80, 110, 90, 65]]
const gridTimes = [[0], [7], [13], [18, 21], [25, 33, 43, 53, 60]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Oboe"
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
