import React from 'react';
import Instrument from "./../../instrument";
import vid from './moreArticulationVibratoColors.mp4';
import score from './moreArticulationVibratoColors.png';

const instrumentText = {
  0: "Please remember when looking at these scores that the piccolo sounds an octave higher than written.\n\n" +
    "This staccato articulation speaks crisply, even in the lowest range of the piccolo.\n\n",
  4: "Please remember when looking at these scores that the piccolo sounds an octave higher than written.\n\n" +
    "This staccato articulation speaks crisply, even in the lowest range of the piccolo.\n\n",
  7: "Please remember when looking at these scores that the piccolo sounds an octave higher than written.\n\n" +
    "Triple-tonguing is particularly effective on members of the flute family, where the tonguing is unencumbered by the reeds employed by all the other woodwinds.\n\n",
  11: "Please remember when looking at these scores that the piccolo sounds an octave higher than written.\n\n" +
    "Flutter-tonguing is effective on members of the flute family, where the tonguing is unencumbered by the reeds employed by all the other woodwinds. Players may choose to use the front of the tongue (better for high passages) or the back of the tongue (better for low passages), but not all players can execute either equally well.\n\n",
  15: "Please remember when looking at these scores that the piccolo sounds an octave higher than written.\n\n" +
    "Some vibrato is almost always used on members of the flute family, applied according to the taste and discretion of the performer. Composers may specify varying amounts of vibrato, and can expect a significant change of color.\n\n",
  23: "Please remember when looking at these scores that the piccolo sounds an octave higher than written.\n\n" +
    "Some vibrato is almost always used on members of the flute family, applied according to the taste and discretion of the performer. Composers may specify varying amounts of vibrato, and can expect a significant change of color.\n\n",
  29: "Please remember when looking at these scores that the piccolo sounds an octave higher than written.\n\n" +
    "Some vibrato is almost always used on members of the flute family, applied according to the taste and discretion of the performer. Composers may specify varying amounts of vibrato, and can expect a significant change of color.\n\n",
  34: "Please remember when looking at these scores that the piccolo sounds an octave higher than written.Please remember when looking at these scores that the piccolo sounds an octave higher than written.\n\n" +
    "On members of the flute family, downward pitch-bend is accomplished by rolling the tone-hole slightly towards the embouchure, as well as reducing the air speed.\n\n",
  41: "Please remember when looking at these scores that the piccolo sounds an octave higher than written.\n\n" +
    "On members of the flute family, downward pitch-bend is accomplished by rolling the tone-hole slightly towards the embouchure, as well as reducing the air speed.\n\n",
}

const morePages = [["/piccoloRRC", "Range, Registers, & Colors"],
["/piccoloPAC", "Passages & Articulation Colors"]]

const gridHeights = [100, 90, 100, 100, 90]
const gridWidths = [[25, 400],
                    [25, 400],
                    [25, 400],
                    [25, 400],
                    [25, 70, 90, 100, 80, 70]]
const gridTimes = [[0],
                  [4],
                  [7],
                  [11],
                  [15, 23, 29, 34, 41]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Piccolo"
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
