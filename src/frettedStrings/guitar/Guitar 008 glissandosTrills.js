import React from 'react';
import Instrument from "./../../instrument";
import vid from './Guitar 008 glissandosTrills.mp4';
import score from './Guitar 008 glissandosTrills.png';

const instrumentText = {
  0: "Glissandos are effective both ascending and descending.",
  5: "Glissandos are effective both ascending and descending.\n\n" +
    "In slower glissandos it is possible to hear the intervening pitches as the finger crosses the frets.",
  11: "Left hand trills can be quite strong and extend the sustaining time of the plucked string.",
  16: "Left hand trills can be quite strong and extend the sustaining time of the plucked string.\n\n" +
    "Right hand trills and tremolos must use two different strings."
}

const morePages = [["/GuitarTF","Tuning, Fretboard"],
["/GuitarLHS","L. H. Shapes"],
["/GuitarLHSSC","L. H. Shapes, String Colors"],
["/GuitarRHFSS","R. H. Finger-Strokes, Slurs"],
["/GuitarRHFP","R. H. Finger Patterns"],
["/GuitarMRHT","More R. H. Techniques"],
["/GuitarH","Harmonics"],
["/GuitarCE","Color Extensions"]]

const gridHeights = [200, 170];
const gridWidths = [[35, 180, 255], [35, 150, 285]];
const gridTimes = [[0, 5], [11, 16]];

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Guitar"
        title="Glissandos, Trills"
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
