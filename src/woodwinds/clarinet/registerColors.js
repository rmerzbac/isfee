import React from 'react';
import Instrument from "./../../instrument";
import vid from './registerColors.mp4';
import score from './registerColors.png';

const instrumentText = {
  0: "The lowest range of the clarinet features a control of color, dynamics, and articulation that surpasses by far the lowest range of other woodwinds. Articulation responds readily at all dynamic levels.",
  3: "The lowest range of the clarinet features a control of color, dynamics, and articulation that surpasses by far the lowest range of other woodwinds. Articulation responds readily at all dynamic levels.",
  5: "The lowest range of the clarinet features a control of color, dynamics, and articulation that surpasses by far the lowest range of other woodwinds. Articulation responds readily at all dynamic levels.",
  7: "The lowest range of the clarinet features a control of color, dynamics, and articulation that surpasses by far the lowest range of other woodwinds. Articulation responds readily at all dynamic levels.",
  10: "The high chalumeau and throat tones have less color and projection than other regions of the clarinet, but this area responds well to articulation and dynamic variations.",
  12: "The high chalumeau and throat tones have less color and projection than other regions of the clarinet, but this area responds well to articulation and dynamic variations.",
  14: "The high chalumeau and throat tones have less color and projection than other regions of the clarinet, but this area responds well to articulation and dynamic variations.",
  16: "The high chalumeau and throat tones have less color and projection than other regions of the clarinet, but this area responds well to articulation and dynamic variations.",
  19: "The clarion register is bright and clear, and very responsive to articulation and dynamic variations.",
  21: "The clarion register is bright and clear, and very responsive to articulation and dynamic variations.",
  23: "The clarion register is bright and clear, and very responsive to articulation and dynamic variations.",
  25: "The clarion register is bright and clear, and very responsive to articulation and dynamic variations.",
  27: "Notes written above the staff are more difficult to conrol, but still may be played at very soft and very loud dynamic levels.",
  29: "Notes written above the staff are more difficult to conrol, but still may be played at very soft and very loud dynamic levels.",
  31: "Notes written above the staff are more difficult to conrol, but still may be played at very soft and very loud dynamic levels.",
  33: "Notes written above the staff are more difficult to conrol, but still may be played at very soft and very loud dynamic levels.",
}

const gridHeights = [155, 112, 120, 135]
const gridWidths = [[35, 100, 100, 100, 100],
                    [35, 100, 100, 100, 100],
                    [35, 100, 100, 100, 100],
                    [35, 100, 100, 100, 100]]
const gridTimes = [[0, 3, 5, 7],
                  [10, 12, 14, 16],
                  [19, 21, 23, 25],
                  [27, 29, 31, 33]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Clarinet"
        title="Register Colors"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
