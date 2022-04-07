import React from 'react';
import Instrument from "./../../instrument";
import vid from './Piano 008 scaleArticulationDynamics.mp4';
import score from './Piano 008 scaleArticulationDynamics.png';

const instrumentText = {
  0: "Legato scales are played by moving fingers over the thumb, or the thumb under the fingers.",
  4: "Legato scales are played by moving fingers over the thumb, or the thumb under the fingers.",
  8: "Legato scales are played by moving fingers over the thumb, or the thumb under the fingers.",
  16: "The piano is responsive to a wide variety of dynamics and articulations.",
  20: "The piano is responsive to a wide variety of dynamics and articulations.",
  24: "The piano is responsive to a wide variety of dynamics and articulations.",
  27: "The piano is responsive to a wide variety of dynamics and articulations.",
  31: "The piano is responsive to a wide variety of dynamics and articulations."
}

const morePages = [["/PianoBC","Basic Construction"],
["/PianoDP","Damper Pedal"],
["/PianoPH","Pedalling, Harmonics"],
["/PianoUCS","Una Corda, Sostenuto"],
["/PianoSP","Sostenuto Pedal"],
["/PianoPE","Piano Ergonomics"],
["/PianoHCS","Hand Combination, Span"],
["/PianoA","Arpeggios"],
["/PianoJG","Jumps, Glissandos"],
["/PianoOP","Orchestral Piano"],
["/PianoPB","Passages - Bach"],
["/PianoPB1","Passages - Beethoven, I"],
["/PianoPB2","Passages - Beethoven, II"],
["/PianoPD","Passages - Debussy"]]

const gridHeights = [120, 110, 85, 95, 110];
const gridWidths = [[35, 220, 215], [35, 440], [35, 210, 225], [35, 210, 225], [35, 440]];
const gridTimes = [[0, 4], [8], [16, 20], [24, 27], [31]];

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Piano"
        title="Scale Articulation, Dynamics"
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
