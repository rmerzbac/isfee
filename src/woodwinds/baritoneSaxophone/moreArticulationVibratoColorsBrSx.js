import React from 'react';
import Instrument from "./../../instrument";
import vid from './moreArticulationVibratoColorsBrSx.mp4'
import score from './moreArticulationVibratoColorsBrSx.png'

const instrumentText = {
  0: "Performer: Stacy Wilson\n\n" +
    "Staccato articulation speaks clearly in all registers of single-reed instruments, though not as precisely and edgy as in double-reed instruments. (Compare this with the corresponding bassoon example.)",
  3: "Performer: Stacy Wilson\n\n" +
    "Staccato articulation speaks clearly in all registers of single-reed instruments, though not as precisely and edgy as in double-reed instruments. (Compare this with the corresponding bassoon example.)",
  7: "Performer: Stacy Wilson\n\n" +
    "Players may choose to use the front of the tongue or the back of the tongue, but not all players can execute either equally well. This performance uses the front of the tongue.",
  14: "Performer: Stacy Wilson\n\n" +
    "Composers may specify varying amounts of vibrato, and can expect a significant change of color.",
  18: "Performer: Stacy Wilson\n\n" +
    "Composers may specify varying amounts of vibrato, and can expect a significant change of color.",
  21: "Performer: Stacy Wilson\n\n" +
    "Composers may specify varying amounts of vibrato, and can expect a significant change of color.",
  27: "Performer: Stacy Wilson\n\n" +
    "Downward pitch-bend of no more than a half-step can be accomplished with an adjustment of the embouchure.",
  36: "Performer: Stacy Wilson\n\n" +
    "Downward pitch-bend of no more than a half-step can be accomplished with an adjustment of the embouchure.",
  43: "Performer: Stacy Wilson\n\n" +
    "An exceptionally hard attack and release creates the effect of \"slap-tonguing.\" Not all saxophonists can execute this effectively.",
  46: "Performer: Stacy Wilson\n\n" +
    "The saxophone is capable of a large array of multiphonics, although the results can be unpredictable."
}

const morePages = [["/BaritoneSaxophoneRR","Range & Registers"],
["/BaritoneSaxophoneRC","Register Colors"],
["/BaritoneSaxophoneAC","Articulation Colors"],
["/BaritoneSaxophoneP","Excerpts"]]

const gridHeights = [130, 120, 140, 140]
const gridWidths = [[40, 240, 240], [40, 480], [40, 80, 90, 108, 96, 106], [40, 190, 290]]
const gridTimes = [[0, 3], [7], [14, 18, 21, 27, 36], [43, 46]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Baritone Saxophone"
        title="More Articulations & Vibrato Colors"
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
