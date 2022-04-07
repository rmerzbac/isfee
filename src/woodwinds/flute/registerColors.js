import React from 'react';
import Instrument from "./../../instrument";
import vid from './registerColors.mp4';
import score from './registerColors.png';

const instrumentText = {
  0: "The fingering for the lowest perfect 4th of the flute require the right hand little finger to play four different keys. This can make fast passagework problematic in this region.",
	4: "The fingering for the lowest perfect 4th of the flute require the right hand little finger to play four different keys.",
	8: "The fingering for the lowest perfect 4th of the flute require the right hand little finger to play four different keys.",
	11: "The fingering for the lowest perfect 4th of the flute require the right hand little finger to play four different keys.",
	15: "The fingering for the lowest perfect 4th of the flute require the right hand little finger to play four different keys.",
	18: "The fingering for the lowest perfect 4th of the flute require the right hand little finger to play four different keys.",
	22: "The fingering for the lowest perfect 4th of the flute require the right hand little finger to play four different keys.\n\n" +
    "Here, the little finger must pass over the C key which is between the D-flat and B keys. D-flat to B cannot be slurred without the C being heard.",
	25: "The fingering for the lowest perfect 4th of the flute require the right hand little finger to play four different keys.",
	32: "The fingering for the lowest perfect 4th of the flute require the right hand little finger to play four different keys.\n\n" +
    "An articulation with separation between the notes requiring a slide of the little finger eliminates the blurring. ",
	46: "The low range of the flute has a dark, rich color. ",
	51: "The low range of the flute has a dark, rich color. ",
	55: "The low range of the flute has a dark, rich color. Articulation in this register is not as responsive or crisp as in higher registers. ",
	59: "The low range of the flute has a dark, rich color. Articulation in this register is not as responsive or crisp as in higher registers. ",
	64: "Although this range looks high in the treble clef, it is actually the lower midrange of the flute. This range has a natural sweetness and directness.",
	68: "Although this range looks high in the treble clef, it is actually the lower midrange of the flute. This range has a natural sweetness and directness.",
	72: "Although this range looks high in the treble clef, it is actually the lower midrange of the flute. This range has a natural sweetness and directness.",
  76: "Although this range looks high in the treble clef, it is actually the lower midrange of the flute. This range has a natural sweetness and directness.",
	80: "This range is the clearest and most flexible region of the flute. ",
	84: "This range is the clearest and most flexible region of the flute. ",
	88:	"This range is the clearest and most flexible region of the flute. ",
	91: "This range is the clearest and most flexible region of the flute. ",
	96: "This range is the most brilliant and powerful region of the flute. It is more difficult to control dynamically, and fast passages make more technical demands on the performer.",
	101: "This range is the most brilliant and powerful region of the flute. It is more difficult to control dynamically, and fast passages make more technical demands on the performer.",
	104: "This range is the most brilliant and powerful region of the flute. It is more difficult to control dynamically, and fast passages make more technical demands on the performer.",
	108: "This range is the most brilliant and powerful region of the flute. It is more difficult to control dynamically, and fast passages make more technical demands on the performer.",

}

const morePages = [["/fluteRRT","Range, Registers, & Tremolos"],
["/fluteP", "Passages"],
["/fluteAVC", "Articulation & Vibrato Colors"]]

const gridHeights = [90, 70, 80, 80, 87, 100]
const gridWidths = [[35, 50, 47, 47, 53, 48, 48, 45, 47],
                    [35, 400],
                    [35, 105, 100, 95, 100],
                    [35, 105, 100, 95, 100],
                    [35, 105, 100, 95, 100],
                    [35, 105, 100, 95, 100],
                    [35, 105, 100, 95, 100]]
const gridTimes = [[0, 4, 8, 11, 15, 18, 22, 25],
                  [32],
                  [46, 51, 55, 59],
                  [64, 68, 72, 76],
                  [80, 84, 88, 91],
                  [96, 101, 104, 108]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Flute"
        title="Register Colors"
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
