import React from 'react';
import Instrument from "./../../instrument";
import vid from './tonguingVibrato.mp4';
import score from './tonguingVibrato.png';

const instrumentText = {
  0: "Staccato articulation speaks clearly in all registers of single-reed instruments, though not as precisely and edgy as in double-reed instruments.",
  3: "Staccato articulation speaks clearly in all registers of single-reed instruments, though not as precisely and edgy as in double-reed instruments.",
  6: "Double-tonguing and triple-tonguing are not as common on the clarinet as on the flute, but is becoming more prevalent. ",
  11: "Flutter-tonguing can be produced with a roll of the tongue towards the tip. Those who have difficulty rolling the tongue can simulate the effect with a growl from the back of the throat.",
  17: "Most concert music clarinetists avoid vibrato. Composers may specify varying amounts of vibrato, and can expect a significant change of color.",
  21: "Most concert music clarinetists avoid vibrato. Composers may specify varying amounts of vibrato, and can expect a significant change of color.",
  25: "Most concert music clarinetists avoid vibrato. Composers may specify varying amounts of vibrato, and can expect a significant change of color.",
  30: "Downward pitch-bend of no more than a half-step can be accomplished with an adjustment of the embouchure.",
  35: "Downward pitch-bend of no more than a half-step can be accomplished with an adjustment of the embouchure.",
}

const morePages = [["/clarinetRS","Range & Skips"],
["/clarinetTT","Trills & Tremolos"],
["/clarinetRC","Register Colors"],
["/clarinetAC","Articulation Colors"],
["/clarinetP","Passage"],
["/clarinetAP","Another Passage"]]

const gridHeights = [140, 135, 130, 130]
const gridWidths = [[35, 210, 215],
                    [35, 435],
                    [35, 435],
                    [35, 70, 70, 105, 80, 80]]
const gridTimes = [[0, 3], [6], [11], [17, 21, 25, 30, 35]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Clarinet"
        title="Tonguing & Vibrato"
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
