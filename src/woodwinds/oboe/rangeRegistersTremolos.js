import React from 'react';
import Instrument from "./../../instrument";
import vid from './rangeRegistersTremolos.mp4';
import score from './rangeRegistersTremolos.png';

const instrumentText = {
  0: "Performer: Crystal Barrett\n\n" +
    "Notice that a relatively small amount of air is needed to produce tone on the oboe, so that this entire scale can be played comfortably in one breath.\n\n" +
    "This middle-low range of the oboe has its most distinctive color: warm, rich, and penetrating.",
  9: "Performer: Crystal Barrett\n\n" +
    "Notice that a relatively small amount of air is needed to produce tone on the oboe, so that this entire scale can be played comfortably in one breath.\n\n" +
    "This middle-high range of the oboe is brighter, becoming lighter and less rich in color as the pitches get higher.",
  21: "The lowest perfect fourth of the oboe's range is thick and reedy. This register is rich in color, but can be difficult to control.",
  39: "Above the staff, the color becomes thinner and purer, with a laser-like clarity replacing the heavier reediness of the middle register. As the pitches approach G6 the sound becomes pinched. Playing above A6 is only possible if the player bites the reed, and should be avoided for orchestral writing.",
  50: "The left-hand thumb operates the 1st octave key. The pitches E5 through G-sharp5 have the same fingering as those as octave lower, with the addition of the 1st octave key.\n\n" +
    "Note how these upward slurs flow with little resistance as the octave changes.",
  58: "The left-hand thumb operates the 1st octave key. The pitches E5 through G-sharp5 have the same fingering as those as octave lower, with the addition of the 1st octave key.\n\n" +
    "Note how these downward slurs encounter slightly more resistance as the octave breaks downward.",
  66: "This example illustrates one use of \"harmonics\" on the oboe. Alternate fingerings are available for the pitch A5. The diamond D suggests the fingering of D4 in combination with the side octave key; the diamond A suggests the standard fingering, which produces A5 by combing the fingering of A4 with the side octave key.",
  78: "As these trills become tremolos, and as the tremolos get wider, note how more fingers are involved in motion. Notice also how the sound wave becomes more resistant to change as the interval grows.",
  100: "The little finger of the right hand operates special keys for low D-sharp (E-flat), C-sharp (D-flat) and low C. The little finger of the left hand operates special keys for low D-sharp (E-flat), B and B-flat. This fingering complication along with the heavy timbral inertia of these low notes makes very fast playing in the extreme low range unidiomatic for the oboe.",
}

const gridHeights = [75, 85, 110, 100, 80]
const gridWidths = [[50, 190, 220],
                    [30, 220, 150],
                    [30, 107, 63, 260],
                    [30, 440],
                    [30, 440]]
const gridTimes = [[0, 9],
                  [21, 39],
                  [50, 58, 66],
                  [78],
                  [100]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Oboe"
        title="Ranges, Registers, & Tremolos"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
