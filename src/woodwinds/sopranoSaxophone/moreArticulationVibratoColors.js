import React from 'react';
import Instrument from "./../../instrument";
import vid from './moreArticulationVibratoColors.mp4';
import score from './moreArticulationVibratoColors.png';

const instrumentText = {
  0: "Staccato articulation speaks clearly in all registers of single-reed instruments, though not as precisely and edgy as in double-reed instruments. (Compare this with the corresponding oboe example)",
  3: "Staccato articulation speaks clearly in all registers of single-reed instruments, though not as precisely and edgy as in double-reed instruments. (Compare this with the corresponding oboe example.)",
  6: "Players may choose to use the front of the tongue or the back of the tongue, but not all players can execute either equally well. This performance uses the front of the tongue.",
  13: "Composers may specify varying amounts of vibrato, and can expect a significant change of color.",
  16: "Composers may specify varying amounts of vibrato, and can expect a significant change of color.",
  19: "Composers may specify varying amounts of vibrato, and can expect a significant change of color.",
  23: "Downward pitch-bend of no more than a half-step can be accomplished with an adjustment of the embouchure.",
  30: "Downward pitch-bend of no more than a half-step can be accomplished with an adjustment of the embouchure.",
  36: "The saxophone is capable of a large array of multiphonics, although the results can be unpredictable. Multiphonics are less consistently effective on the soprano saxophone than they are on larger members of the family.",
}

const morePages = [["/sopranoSaxRR","Range & Registers"],
["/sopranoSaxRC","Register Colors"],
["/sopranoSaxP","Passage"],
["/sopranoSaxAC","Articulation Colors"]]

const gridHeights = [140, 120, 140, 120]
const gridWidths = [[25, 425, 425],
                    [25, 450],
                    [25, 125, 125, 200],
                    [25, 125, 125, 200]]
const gridTimes = [[0, 3], [6], [13, 16, 19], [23, 30, 36]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Soprano Saxophone"
        title="More Articulation & Vibrato Colors"
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
