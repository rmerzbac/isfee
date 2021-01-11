import React from 'react';
import Instrument from "./../../instrument.js";
import vid from './moreArticulationColorsVibrato.mp4';
import score from './moreArticulationColorsVibrato.png';

const instrumentText = {
  0: "This staccato articulation speaks crisply, even in the lowest range of the alto flute.",
  3: "This staccato articulation speaks crisply, even in the lowest range of the alto flute.",
  6: "Triple-tonguing is particularly effective on members of the flute family, where the tonguing is unencumbered by the reeds employed by all the other woodwinds.",
  10: "Flutter-tonguing is effective on members of the flute family, where the tonguing is unencumbered by the reeds employed by all the other woodwinds. Players may choose to use the front of the tongue (better for high passages) or the back of the tongue (better for low passages), but not all players can execute either equally well.",
  14: "Some vibrato is almost always used on members of the flute family, applied according to the taste and discretion of the performer. Composers may specify varying amounts of vibrato, and can expect a significant change of color.",
  21: "Some vibrato is almost always used on members of the flute family, applied according to the taste and discretion of the performer. Composers may specify varying amounts of vibrato, and can expect a significant change of color.",
  27: "Some vibrato is almost always used on members of the flute family, applied according to the taste and discretion of the performer. Composers may specify varying amounts of vibrato, and can expect a significant change of color.",
  32: "On members of the flute family, downward pitch-bend is accomplished by rolling the tone-hole slightly towards the embouchure, as well as reducing the air speed.",
  38: "On members of the flute family, downward pitch-bend is accomplished by rolling the tone-hole slightly towards the embouchure, as well as reducing the air speed.",
}

const gridHeights = [105, 100, 140, 120]
const gridWidths = [[15, 225, 210],
                    [15, 445],
                    [15, 445],
                    [15, 80, 85, 105, 75, 80]]
const gridTimes = [[0, 3],
                   [6],
                   [10],
                   [14, 21, 27, 32, 38]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Alto Flute"
        title="More Articulation Colors & Vibrato"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
