import React from 'react';
import Instrument from "./../../instrument";
import vid from './articulationColorsVa.mp4';
import score from './articulationColorsVa.png';

const instrumentText = {
  0: "Please note: For an extended demonstration of bow direction, speed and pressure, see the section on the cello.\n\n" +
"Staccato implies a clear articulation of each note while keeping the bow on (or very close to) the string. Staccato may be played by stopping the bow, then continuing in the same bow direction, as indicated by these 4-note slurs.",
  3: "Please note: For an extended demonstration of bow direction, speed and pressure, see the section on the cello.\n\n" +
"Staccato implies a clear articulation of each note while keeping the bow on (or very close to) the string. Here staccato is performed in separate strokes.",
  6: "Please note: For an extended demonstration of bow direction, speed and pressure, see the section on the cello.\n\n" +
"Spiccato implies that each note is attacked from off the string and left with the natural bounce away from the string in response to this attack.",
  11: "Please note: For an extended demonstration of bow direction, speed and pressure, see the section on the cello.\n\n" +
"Staccato implies a clear articulation of each note while keeping the bow on (or very close to) the string.\n\n" +
"Staccato may be played by stopping the bow, then continuing in the same bow direction, as indicated by these 4-note slurs.",
  14: "Please note: For an extended demonstration of bow direction, speed and pressure, see the section on the cello.\n\n" +
"Staccato implies a clear articulation of each note while keeping the bow on (or very close to) the string.\n\n" +
"Here staccato is performed in separate strokes.",
  18: "Please note: For an extended demonstration of bow direction, speed and pressure, see the section on the cello.\n\n" +
"Spiccato implies that each note is attacked from off the string and left with the natural bounce away from the string in response to this attack.",
  22: "Saltando (also called ricochet) is a throwing of the bow and allowing it to rebound two or more times. It is most effectively applied as a down-bow stroke.",
  29: "Unmeasured tremolo is notated in string writing by three strokes on the note stem, regardless of the rhythmic value of the note. It is played as fast as possible with no regard for the number of alternations on each note; the effect is a color, not a rhythm.",
  39: "Three- note and four-note multiple stop chords can be articulated by the bow by rolling across adjacent strings.",
  45: "This arpeggio pattern uses all four strings and repeated notes. ",
  48: "These tremolos are played as bow-tremolos, double stops articulated by rocking the bow over the two strings. The Roman numerals are another way of indicating \"sul G\" (III) and \"sul D\" (II).",

  }

const gridHeights = [80, 80, 80,80, 80, 100]
const gridWidths = [[40, 140, 140, 140],
                    [40, 140, 140, 140],
                    [40, 420],
                    [40, 420],
                    [40, 420],
                    [40, 250, 170]]
const gridTimes = [[0, 3, 6],
                  [11, 14, 18],
                  [22],
                  [29],
                  [39],
                  [45, 48]]
export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Viola"
        title="Articulation & Bow Colors"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
