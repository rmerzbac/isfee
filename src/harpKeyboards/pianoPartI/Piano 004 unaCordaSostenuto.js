import React from 'react';
import Instrument from "./../../instrument";
import vid from './Piano 004 unaCordaSostenuto.mp4';
import score from './Piano 004 unaCordaSostenuto.png';

const instrumentText = {
  0: "On all grand pianos, the leftmost pedal, called the una corda pedal (Italian for \"one string,\" which is essentially inaccurate), slightly shifts the keyboard and hammers to the right, so that only two of the triple-strung strings are struck, while the double-strung and wound strings are struck a bit off-center; the result is a slight but perceptible change in color, and softens the sounds as much as one dynamic level. The use of the una corda (this term is recommended as more direct than \"the soft pedal\") is indicated by writing u.c. below the bottom staff, and it is cancelled by writing t.c. (\"tre corde\" = three strings, also somewhat inaccurate).",
  10: "On all grand pianos, the leftmost pedal, called the una corda pedal (Italian for \"one string,\" which is essentially inaccurate), slightly shifts the keyboard and hammers to the right, so that only two of the triple-strung strings are struck, while the double-strung and wound strings are struck a bit off-center; the result is a slight but perceptible change in color, and softens the sounds as much as one dynamic level. The use of the una corda (this term is recommended as more direct than \"the soft pedal\") is indicated by writing u.c. below the bottom staff, and it is cancelled by writing t.c. (\"tre corde\" = three strings, also somewhat inaccurate).",
  20: "On all grand pianos, the leftmost pedal, called the una corda pedal (Italian for \"one string,\" which is essentially inaccurate), slightly shifts the keyboard and hammers to the right, so that only two of the triple-strung strings are struck, while the double-strung and wound strings are struck a bit off-center; the result is a slight but perceptible change in color, and softens the sounds as much as one dynamic level. The use of the una corda (this term is recommended as more direct than \"the soft pedal\") is indicated by writing u.c. below the bottom staff, and it is cancelled by writing t.c. (\"tre corde\" = three strings, also somewhat inaccurate).",
  34: "The middle pedal, best identified as the \"sostenuto pedal,\" is reliably present on most grand pianos. The sostenuto pedal controls a lever that grabs and holds in a raised position only those dampers that are raised from the strings at the time the sostenuto pedal is depressed."
}

const morePages = [["/PianoBC","Basic Construction"],
["/PianoDP","Damper Pedal"],
["/PianoPH","Pedalling, Harmonics"],
["/PianoSP","Sostenuto Pedal"],
["/PianoPE","Piano Ergonomics"],
["/PianoHCS","Hand Combination, Span"],
["/PianoSAD","Scale Articulation, Dynamics"],
["/PianoA","Arpeggios"],
["/PianoJG","Jumps, Glissandos"],
["/PianoOP","Orchestral Piano"],
["/PianoPB","Passages - Bach"],
["/PianoPB1","Passages - Beethoven, I"],
["/PianoPB2","Passages - Beethoven, II"],
["/PianoPD","Passages - Debussy"]]

const gridHeights = [130, 110, 200];
const gridWidths = [[35, 255, 180], [35, 440], [35, 440]];
const gridTimes = [[0, 10], [20], [34]];

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Piano"
        title="Una Corda, Sostenuto"
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
