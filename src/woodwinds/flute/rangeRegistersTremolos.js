import React from 'react';
import Instrument from "./../../instrument";
import vid from './rangeRegistersTremolos.mp4';
import score from './rangeRegistersTremolos.png';

const instrumentText = {
  0: "Performer: Qiao Zhang \n\n" +
   "The low range of the flute has the richest colors, but these colors can be heard only in very transparent textures. Producing a tone on the flute, particularly in the low register, requires a great deal more air than is needed for other woodwinds.",
	10: "As the flute ascends about the staff, the tone becomes brighter and stronger.",
	16: "The highest range of the flute is very bright, and can be easily projected over a large orchestral tutti. Generally, the 8ve mark is avoided in notating high flute music, because flutists are unusually adept at reading ledger lines.",
	22: "These pitches below the staff are particularly warm and distinctive. Most American flutists at the advanced high-school level and beyond have instruments with the additional low B3 foot.",
	35: "The extreme high range of the flute becomes shrill. D7 appears in many 20th-century scores, but pitches in this region should be used with an awareness of difficulty since fingering patterns, intonation, and especially dynamic control this high are extremely demanding. The high D-sharp  and E7, when possible, are more dramatically stunning than lucidly musical. ",
	43: "The is no register key for the flute; octave skips such as these involve no change of fingering, and are executed by the embouchure. Slurring large skips upward is more natural and smoother than slurring descending skips.",
	47: "The is no register key for the flute; octave skips such as these involve no change of fingering, and are executed by the embouchure, described as \"overblowing.\" Slurring large skips upward is more natural and smoother than slurring descending skips.",
	51: "The standard fingering for G5 is the fingering for G4, overblowing to create the 2nd partial. It is also possible to produce G5 using the fingering of middle C and invoking the 3rd partial of that harmonic series. The diamond-shaped notehead indicates the fingering. The circle over the note indicates that an alternate fingering and special tone color is desired. Notice how the change of color creates articulation even though the passage is slurred.",
	58: "Here are four different fingerings for C6. The last three are alternate fingerings, creating three non-standard colors for this pitch.",
	69: "Most half-step and whole-step trills require the movement of only one or two fingers, and can be played with great speed and facility.",
	75: "Most half-step and whole-step trills require the movement of only one or two fingers, and can be played with great speed and facility.",
	80: "Notice that the fingering becomes more awkward as the interval of the tremolo increases. It is also more difficult to make the sound wave respond to rapid changes as the interval increases.",
	85: "Notice that the fingering becomes more awkward as the interval of the tremolo increases. It is also more difficult to make the sound wave respond to rapid changes as the interval increases.",
	90: "Notice that the fingering becomes more awkward as the interval of the tremolo increases. It is also more difficult to make the sound wave respond to rapid changes as the interval increases.",
	95: "Notice that the fingering becomes more awkward as the interval of the tremolo increases. It is also more difficult to make the sound wave respond to rapid changes as the interval increases.",
	99: "Notice that the fingering becomes more awkward as the interval of the tremolo increases. It is also more difficult to make the sound wave respond to rapid changes as the interval increases.",
	104: "Notice that the fingering becomes more awkward as the interval of the tremolo increases. It is also more difficult to make the sound wave respond to rapid changes as the interval increases.",
	108: "Notice that the fingering becomes more awkward as the interval of the tremolo increases. It is also more difficult to make the sound wave respond to rapid changes as the interval increases.",
	112: "Notice that the fingering becomes more awkward as the interval of the tremolo increases. It is also more difficult to make the sound wave respond to rapid changes as the interval increases."
}

const morePages = [["/fluteRC","Register Colors"],
["/fluteP", "Passages"],
["/fluteAVC", "Articulation & Vibrato Colors"]]

const gridHeights = [90, 90, 75, 95, 70, 70]
const gridWidths = [[55, 170, 140, 80],
                    [35, 185, 230],
                    [35, 230, 160],
                    [35, 220, 220],
                    [35, 50, 42, 40, 40, 40, 40, 45, 40, 40],
                    [35, 400]]
const gridTimes = [[0, 10, 16],
                  [22, 35],
                  [43, 47],
                  [51, 58],
                  [69, 75, 80, 85, 90, 95, 99, 104, 108],
                  [112]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Flute"
        title="Ranges, Registers, & Tremolos"
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
