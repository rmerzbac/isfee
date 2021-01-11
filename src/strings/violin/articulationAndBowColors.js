import React from 'react';
import Instrument from "./../../instrument";
import vid from './articulationAndBowColors.mp4';
import score from './articulationAndBowColors.png';

const instrumentText = {
  0:  "Please note: For an extended demonstration of bow direction, speed and pressure, see the section on the cello.\n\n" +
  "Staccato implies a clear articulation of each note while keeping the bow on (or very close to) the string.",
		 3:  "Please note: For an extended demonstration of bow direction, speed and pressure, see the section on the cello.\n\n" +
  "Spiccato implies that each note is attacked from off the string and left with the natural bounce away from the string in response to this attack.",
		 6:  "Please note: For an extended demonstration of bow direction, speed and pressure, see the section on the cello.\n\n" +
  "The contrast between staccato and spiccato is especially pronounced in the low register.",
		 10:  "Please note: For an extended demonstration of bow direction, speed and pressure, see the section on the cello.\n\n" +
  "The contrast between staccato and spiccato is especially pronounced in the low register.",
		 13: "Saltando (also called ricochet) is a throwing of the bow and allowing it to rebound two or more times. It is most effectively applied as a down-bow stroke",
		 19:  "Unmeasured tremolo is notated in string writing by three strokes on the note stem, regardless of the rhythmic value of the note. It is played as fast as possible with no regard for the number of alternations on each note; the effect is a color, not a rhythm.",
		 26:  "Three- note and four-note multiple stop chords can be articulated by the bow by rolling across adjacent strings.",
		 32:  "This arpeggio pattern uses all four strings and repeated notes. The tremolos are played as bow-tremolos, double stops articulated by rocking the bow over the two strings. The Roman numerals are another way of indicating \"sul D\" (III) and \"sul A\" (II).",

  }

const gridHeights = [100, 60, 80,80, 80, 100]
const gridWidths = [[40, 200, 180],
                    [40, 200, 180],
                    [40, 420],
                    [40, 420],
                    [40, 420],
                    [40, 420]]
const gridTimes = [[0, 3],
                  [6, 10],
                  [13],
                  [19],
                  [26],
                  [32]]
export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Violin"
        title="Aticulation & Bow Colors"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
