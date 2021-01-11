import React from 'react';
import Instrument from "./../../instrument";
import vid from './moreArticulationVibratoColorsTSx.mp4'
import score from './moreArticulationVibratoColorsTSx.png'

const instrumentText = {
  0: "Performer: Stacy Wilson\n\n" + 
  "Staccato articulation speaks clearly in all registers of single-reed instruments, though not as precisely and edgy as in double-reed instruments. (Compare this with the corresponding bassoon example.)",
  8: "Performer: Stacy Wilson\n\n" + 
  "Players may choose to use the front of the tongue or the back of the tongue, but not all players can execute either equally well. This performance uses the front of the tongue.",
  15: "Performer: Stacy Wilson\n\n" + 
  "Composers may specify varying amounts of vibrato, and can expect a significant change of color.",
  18: "Performer: Stacy Wilson\n\n" + 
  "Composers may specify varying amounts of vibrato, and can expect a significant change of color.",
  21: "Performer: Stacy Wilson\n\n" + 
  "Composers may specify varying amounts of vibrato, and can expect a significant change of color.",
  25: "Performer: Stacy Wilson\n\n" + 
  "Downward pitch-bend of no more than a half-step can be accomplished with an adjustment of the embouchure.",
  33: "Performer: Stacy Wilson\n\n" + 
  "Downward pitch-bend of no more than a half-step can be accomplished with an adjustment of the embouchure.",
  40: "Performer: Stacy Wilson\n\n" + 
  "An exceptionally hard attack and release creates the effect of \"slap-tonguing.\" Not all saxophonists can execute this effectively.",
  43: "Performer: Stacy Wilson\n\n" + 
  "The saxophone is capable of a large array of multiphonics, although the results can be unpredictable."
}

const gridHeights = [130, 130, 130, 140]
const gridWidths = [[40, 480], [40, 480], [40, 60, 80, 106, 88, 96], [40, 190, 290]]
const gridTimes = [[0], [8], [15, 18, 21, 25, 33], [40, 43]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Tenor Saxophone"
        title="More Articulation & Vibrato Colors"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


