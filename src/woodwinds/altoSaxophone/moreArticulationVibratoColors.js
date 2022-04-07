import React from 'react';
import Instrument from "./../../instrument";
import vid from './moreArticulationVibratoColors.mp4';
import score from './moreArticulationVibratoColors.png';

const instrumentText = {
  0: "Staccato articulation speaks clearly in all registers of single-reed instruments, though not as precisely and edgy as in double-reed instruments.",
  3: "Staccato articulation speaks clearly in all registers of single-reed instruments, though not as precisely and edgy as in double-reed instruments.",
  7: "Players may choose to use the front of the tongue or the back of the tongue, but not all players can execute either equally well. This performance uses the front of the tongue.",
  13: "Composers may specify varying amounts of vibrato, and can expect a significant change of color.",
  16: "Composers may specify varying amounts of vibrato, and can expect a significant change of color.",
  19: "Composers may specify varying amounts of vibrato, and can expect a significant change of color.",
  24: "Downward pitch-bend of no more than a half-step can be accomplished with an adjustment of the embouchure.",
  31: "Downward pitch-bend of no more than a half-step can be accomplished with an adjustment of the embouchure.",
  39: "An exceptionally hard attack and release creates the effect of \"slap-tonguing.\" Not all saxophonists can execute this effectively.",
  42: "The saxophone is capable of a large array of multiphonics, although the results can be unpredictable. Here are two contrasting examples.",
  47: "The saxophone is capable of a large array of multiphonics, although the results can be unpredictable. Here are two contrasting examples.",
}

const morePages = [["/altoSaxRR","Range & Registers"],
["/altoSaxRC","Register Colors"],
["/altoSaxTT","Trills & Tremolos"],
["/altoSaxP","Passage"],
["/altoSaxAC","Articulation Colors"]]

const gridHeights = [138, 120, 130, 130]
const gridWidths = [[25, 425, 425],
                    [25, 450],
                    [25, 75, 75, 120, 80, 70],
                    [25, 180, 180]]
const gridTimes = [[0, 3], [7], [13, 16, 19, 24, 31], [39, 42, 47]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Alto Saxophone"
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
