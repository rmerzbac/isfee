import React from 'react';
import Instrument from "./../../instrument";
import vid from './Piano 005 sostenutoPedal.mp4';
import score from './Piano 005 sostenutoPedal.png';

const instrumentText = {
  0: "The middle pedal, best identified as the \"sostenuto pedal,\" is reliably present on most grand pianos. The sostenuto pedal controls a lever that grabs and holds in a raised position only those dampers that are raised from the strings at the time the sostenuto pedal is depressed.\n\n" +
    "From this view, it is possible to see the slight extra-lifting of the already raised dampers when the sostenuto pedal is engaged. After the sostenuto is engaged the damper pedal may be used independently. When the damper pedal is released the dampers held by the sostenuto remain raised.",
  7: "The middle pedal, best identified as the \"sostenuto pedal,\" is reliably present on most grand pianos. The sostenuto pedal controls a lever that grabs and holds in a raised position only those dampers that are raised from the strings at the time the sostenuto pedal is depressed.\n\n" +
    "From this view, it is possible to see the slight extra-lifting of the already raised dampers when the sostenuto pedal is engaged.",
  12: "The middle pedal, best identified as the \"sostenuto pedal,\" is reliably present on most grand pianos. The sostenuto pedal controls a lever that grabs and holds in a raised position only those dampers that are raised from the strings at the time the sostenuto pedal is depressed.\n\n" +
    "From this view, it is possible to see the slight extra-lifting of the already raised dampers when the sostenuto pedal is engaged.\n\n" +
    "Although the sostenuto pedal is often used to sustain bass notes and chords, it can also be effectively used to sustain treble notes.",
  20: "Depressing the sostenuto pedal while the damper pedal is already depressed, simply duplicates the raising of ALL the dampers. Such an indication is pointless.",
  31: "Here the damper pedal is released prior to engaging the sostenuto pedal, so the bass notes in the second measure can be truly staccato."
}

const gridHeights = [170, 165, 150, 40];
const gridWidths = [[30, 445], [35, 235, 200], [35, 440], [10, 465]];
const gridTimes = [[0], [7, 12], [20], [31]];

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Piano"
        title="Sostenuto Pedal"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
