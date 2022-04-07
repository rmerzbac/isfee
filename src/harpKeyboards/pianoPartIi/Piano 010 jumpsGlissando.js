import React from 'react';
import Instrument from "./../../instrument";
import vid from './Piano 010 jumpsGlissando.mp4';
import score from './Piano 010 jumpsGlissando.png';

const instrumentText = {
  0: "With a little practice, pianists can play large skips quickly.",
  10: "With a little practice, pianists can play large skips quickly. Since the eyes are needed to ensure accuracy, passages like this one need to be memorized.",
  27: "Ascending right hand glissandos (and descending left glissandos -- not shown) are played with the nails of the 3rd and 4th fingers. Almost all piano glissandos are on the white keys.",
  30: "Ascending right hand glissandos (and descending left hand glissandos -- not shown) are played with the nails of the 3rd and 4th fingers. Almost all piano glissandos are on the white keys.",
  34: "Beginning and ending notes to glissandos can be added by the alternate hand.",
  38: "Beginning and ending notes to glissandos can be added by the alternate hand.",
  42: "Descending right hand glissandos (and ascending left hand glissandos -- not shown) are played with the nail of the thumb.\n\n" +
    "Glissandos can be modulated by variations in dynamics and pedaling.",
  46: "Descending right hand glissandos (and ascending left hand glissandos -- not shown) are played with the nail of the thumb.\n\n" +
    "Glissandos can be modulated by variations in dynamics and pedaling."
}

const morePages = [["/PianoBC","Basic Construction"],
["/PianoDP","Damper Pedal"],
["/PianoPH","Pedalling, Harmonics"],
["/PianoUCS","Una Corda, Sostenuto"],
["/PianoSP","Sostenuto Pedal"],
["/PianoPE","Piano Ergonomics"],
["/PianoHCS","Hand Combination, Span"],
["/PianoSAD","Scale Articulation, Dynamics"],
["/PianoA","Arpeggios"],
["/PianoOP","Orchestral Piano"],
["/PianoPB","Passages - Bach"],
["/PianoPB1","Passages - Beethoven, I"],
["/PianoPB2","Passages - Beethoven, II"],
["/PianoPD","Passages - Debussy"]]

const gridHeights = [150, 180, 120];
const gridWidths = [[35, 440], [35, 440], [35, 50, 80, 60, 95, 55, 70]];
const gridTimes = [[0], [10], [27, 30, 34, 38, 42, 46]];

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Piano"
        title="Jumps, Glissando"
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
