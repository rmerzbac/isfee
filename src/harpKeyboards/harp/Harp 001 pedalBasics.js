import React from 'react';
import Instrument from "./../../instrument";
import vid from './Harp 001 pedalBasics.mp4';
import score from './Harp 001 pedalBasics.png';

const instrumentText = {
  0: "Performer: Kristie Withers\n\n" +
    "The modern harp has 47 strings, covering 6 and a half octaves. Every octave has 7 strings tuned to a diatonic C-flat major scale. Each of the 7 pedals makes possible three different tunings for all the strings bearing the same pitch letter-name. The inside left pedal controls all the B strings globally; the lower the pedal notch, the higher the pitch. This example is shown twice, once showing the pedal action and once showing the rotating tuning discs.",
  9: "Performer: Kristie Withers\n\n" +
    "The modern harp has 47 strings, covering 6 and a half octaves. Every octave has 7 strings tuned to a diatonic C-flat major scale. Each of the 7 pedals makes possible three different tunings for all the strings bearing the same pitch letter name. The middle left pedal controls all the C strings (colored red) globally; the lower the pedal notch, the higher the pitch. This example is shown twice, once showing the pedal action and once showing the rotating tuning discs.",
  17: "Performer: Kristie Withers\n\n" +
    "The modern harp has 47 strings, covering 6 and a half octaves. Every octave has 7 strings tuned to a diatonic C-flat major scale. Each of the 7 pedals makes possible three different tunings for all the strings bearing the same pitch letter name. The outside left pedal controls all the D strings globally; the lower the pedal notch, the higher the pitch. This example is shown twice, once showing the pedal action and once showing the rotating tuning discs.",
  28: "The right pedals control the pitches of all the E, F, G, and A strings, in that order from inside to outside.\n\n" +
    "In this example all these pedals are locked in their lowest notch, creating all sharps.",
  33: "The right pedals control the pitches of all the E, F, G, and A strings, in that order from inside to outside.\n\n" +
    "The pedals must be changed one at a time from the lowest notch to the middle notch to make this change to all naturals.",
  37: "The right pedals control the pitches of all the E, F, G, and A strings, in that order from inside to outside.\n\n" +
    "The pedals must be changed one at a time from the middle notch to the highest notch to make this change to all flats.",
  48: "The pedal diagram indicates the pedal setting for the D-major scale. Pedals are shown in this order: DCB/EFGA. For D major, all pedals are in natural position (on the line) except for C-sharp and F-sharp (below the line).",
  63: "To change the pedal setting from D major to A-flat major, all the pedals except G have to be raised a notch. Harpists can change only one pedal per foot at a time, but can make individual right and left foot pedal changes simultaneously.\n\n" +
    "The pedal diagram indicates the pedal setting for the A-flat-major scale. D, B / E and A are flat (above the line) and C / F and G are natural (on the line)."
}

const gridHeights = [160, 120, 130, 150];
const gridWidths = [[55, 200, 180, 200], [40, 140, 130, 150], [40, 435], [40, 435]];
const gridTimes = [[0, 9, 17], [28, 33, 37], [48], [63]];


export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Harp"
        title="Pedal Basics"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
