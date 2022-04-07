import React from 'react';
import Instrument from "./../../instrument";
import vid from './rightHandInflections.mp4';
import score from './rightHandInflections.png';

const instrumentText = {
  0: "Staccato implies a clear articulation of each note while keeping the bow on (or very close to) the string.",
		7: "Spiccato implies that each note is attacked from off the string and left with the natural bounce away from the string in response to this attack.",
		11: "The contrast between staccato and spiccato is especially pronounced in the low register.",
		15: "The contrast between staccato and spiccato is especially pronounced in the low register.",
		20: "Saltando (also called ricochet) is a throwing of the bow and allowing it to rebound two or more times. It is most effectively applied as a down-bow stroke.",
		27: "Unmeasured tremolo is notated in string writing by three strokes on the note stem, regardless of the rhythmic value of the note. It is played as fast as possible with no regard for the number of alternations on each note; the effect is a color, not a rhythm. ",
		41: "Three- note and four-note multiple stop chords can be articulated by the bow by rolling across adjacent strings.",
		45: "Bow changes may be added to arpeggio patterns to create repeated notes at the top and/or bottom.",
		48: "This arpeggio pattern uses all four strings and repeated notes. ",
		51: "These tremolos are played as bow-tremolos, double stops articulated by rocking the bow over the two strings. ",
}

const morePages = [["/celloSF","Scale Fingering"],
["/celloNH","Natural Harmonics"],
["/celloAH","Artificial Harmonics"],
["/celloMS","Multiple Stops"],
["/celloLHI","Left Hand Inflections"],
["/bowDirectionsSpeedPressure","Bow Directions, Speed and Pressure"],
["/moreBowColors","More Bow Colors"],
["/pizzicato","Pizzicato"]]


const gridHeights = [100, 70, 80, 80, 80, 80]
const gridWidths = [[40, 200, 180],
                    [40, 200, 180],
                    [40, 420],
                    [40, 420],
                    [40, 200, 200],
                    [40, 270, 150]]
const gridTimes = [[0, 7],
                  [11, 15],
                  [20],
                  [27],
                  [41, 45],
                  [48, 51]]
export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Cello"
        title="Right Hand Inflections"
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
