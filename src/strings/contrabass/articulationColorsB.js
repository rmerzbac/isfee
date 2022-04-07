import React from 'react';
import Instrument from "./../../instrument";
import vid from './articulationColorsB.mp4';
import score from './articulationColorsB.png';

const instrumentText = {
  0: "Please note: For an extended demonstration of bow direction, speed and pressure, see the section on the cello.\n\n" +
"Staccato implies a clear articulation of each note while keeping the bow on (or very close to) the string.",
		5: "Please note: For an extended demonstration of bow direction, speed and pressure, see the section on the cello.\n\n" +
"Spiccato implies that each note is attacked from off the string and left with the natural bounce away from the string in response to this attack.",
		9: "Please note: For an extended demonstration of bow direction, speed and pressure, see the section on the cello.\n\n" +
"The contrast between staccato and spiccato is especially pronounced in the low register.",
		12: "Please note: For an extended demonstration of bow direction, speed and pressure, see the section on the cello.\n\n" +
"The contrast between staccato and spiccato is especially pronounced in the low register.",
		16: "Saltando (also called ricochet) is a throwing of the bow and allowing it to rebound two or more times. \n\n" +
"It is most effectively applied as a down-bow stroke.",
		22: "Unmeasured tremolo is notated in string writing by three strokes on the note stem, regardless of the rhythmic value of the note. \n\n" +
"It is played as fast as possible with no regard for the number of alternations on each note; the effect is a color, not a rhythm.",
}

const morePages = [["/leftHandFingeringB","Left Hand Fingering"],
["/registerStringColorsB","Register & String Colors"],
["/moreBowColorsB","More Bow Colors"],
["/pizzicatoB","Pizzicato"],
["/excerptB","Excerpt"]]

const gridHeights = [120, 120, 120, 120, 120]
const gridWidths = [[40, 210, 210],
                    [40, 210, 210],
                    [40, 420],
                    [40, 480],
                    [40, 420],
                    [40, 250, 170]]
const gridTimes = [[0, 5],
                  [9, 12],
                  [16],
                  [22]]
export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Contrabass"
        title="Articulation & Bow Colors"
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
