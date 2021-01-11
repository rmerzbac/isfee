import React from 'react';
import Instrument from "./../../instrument";
import vid from './Harp 003 scales.mp4';
import score from './Harp 003 scales.png';

const instrumentText = {
  0: "Note that unlike the position of the hands on the piano, both hands are placed so that the thumb plays the highest note in any position. The little finger is not used in standard harp technique. Scales may be played by stacking 4-note patterns.",
  14: "Note that unlike the position of the hands on the piano, both hands are placed so that the thumb plays the highest note in any position. The little finger is not used in standard harp technique. Scales may be played by stacking 4-note patterns.",
  25: "\"Hand-over-hand\" playing is particularly effective on the harp; unlike the piano or keyboard percussion, the hands are completely out of each other's way.\n\n" +
    "The last pitch here, G, (or more precisely, its sibling G-sharp if the pedal were so set) is the highest note on the harp, a 4th lower than the piano keyboard's top note.",
  31: "The left hand's last note is the lowest string found on the harp. This string is independent from the C-pedal; the harpist may be instructed to tune this string to a different pitch. There is also no tuning disc for the low D, making it similarly disassociated from pedal changes.\n\n" +
    "Notice how far the harpist's right hand must reach around the harp (and how the whole instrument must be tilted forward) in order for the right hand to play below the bass clef.",
}


const gridHeights = [145, 130, 110, 150];
const gridWidths = [[40, 435], [40, 435], [40, 435], [40, 435]];
const gridTimes = [[0], [14], [25], [31]];


export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Harp"
        title="Scales"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
