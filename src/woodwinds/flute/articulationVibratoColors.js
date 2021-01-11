import React from 'react';
import Instrument from "./../../instrument";
import vid from './articulationVibratoColors.mp4';
import score from './articulationVibratoColors.png';

const instrumentText = {
  0: "The flute is very responsive to fast passagework throughout its range.\n\n" +
    "Even when slurred, each note speaks very clearly.",
	5: "The flute is very responsive to fast passagework throughout its range.\n\n" +
    "The slur-two-tongue-two articulation is the most common fast articulation in all wind music.",
	10: "The flute is very responsive to fast passagework throughout its range.\n\n" +
    "Single tonguing is generally slower than the other articulation options demonstrated here, but is also the most deliberate and forceful.",
	15: "The flute is very responsive to fast passagework throughout its range.\n\n" +
    "Double-tonguing is particularly effective on members of the flute family, where the tonguing is unencumbered by the reeds employed by all the other woodwinds.",
	20: "This staccato articulation speaks crisply, even in the lowest range of the flute.",
	24: "This staccato articulation speaks crisply, even in the lowest range of the flute.",
	28:	"Triple-tonguing is particularly effective on members of the flute family, where the tonguing is unencumbered by the reeds employed by all the other woodwinds.",
	32: "Flutter-tonguing is effective on members of the flute family, where the tonguing is unencumbered by the reeds employed by all the other woodwinds. Players may choose to use the front of the tongue (better for high passages) or the back of the tongue (better for low passages), but not all players can execute either equally well.",
	37: "Some vibrato is almost always used on members of the flute family, applied according to the taste and discretion of the performer. Composers may specify varying amounts of vibrato, and can expect a significant change of color.",
	45: "Some vibrato is almost always used on members of the flute family, applied according to the taste and discretion of the performer. Composers may specify varying amounts of vibrato, and can expect a significant change of color.",
	52: "Some vibrato is almost always used on members of the flute family, applied according to the taste and discretion of the performer. Composers may specify varying amounts of vibrato, and can expect a significant change of color.",
	58: "On members of the flute family, downward pitch-bend is accomplished by rolling the tone-hole slightly towards the embouchure, as well as reducing the air speed.",
	62: "On members of the flute family, downward pitch-bend is accomplished by rolling the tone-hole slightly towards the embouchure, as well as reducing the air speed.",
}

const gridHeights = [65, 60, 60, 65, 55, 60, 75, 65]
const gridWidths = [[25, 425],
                    [25, 425],
                    [25, 425],
                    [25, 425],
                    [25, 225, 200],
                    [25, 425],
                    [25, 425],
                    [25, 70, 100, 80, 80, 80]]
const gridTimes = [[0],
                  [5],
                  [10],
                  [15],
                  [20, 24],
                  [28],
                  [32],
                  [37, 45, 52, 58, 62]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Flute"
        title="Articulation & Vibrato Colors"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
