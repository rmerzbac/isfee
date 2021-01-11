import React from 'react';
import Instrument from "./../../instrument";
import vid from './registerColors.mp4';
import score from './registerColors.png';

const instrumentText = {
  0: "The lowest range of the E-flat clarinet has the same control of color, dynamics, and articulation found in the clarinet, but lacks the rich color. Articulation responds readily at all dynamic levels.",
  4: "The lowest range of the E-flat clarinet has the same control of color, dynamics, and articulation found in the clarinet, but lacks the rich color. Articulation responds readily at all dynamic levels.",
  6: "The lowest range of the E-flat clarinet has the same control of color, dynamics, and articulation found in the clarinet, but lacks the rich color. Articulation responds readily at all dynamic levels.",
  8: "The lowest range of the E-flat clarinet has the same control of color, dynamics, and articulation found in the clarinet, but lacks the rich color. Articulation responds readily at all dynamic levels.",
  11: "The high chalumeau and throat tones of the E-flat clarinet have less color and projection than other regions, but this area responds well to articulation and dynamic variations.",
  13: "The high chalumeau and throat tones of the E-flat clarinet have less color and projection than other regions, but this area responds well to articulation and dynamic variations.",
  15: "The high chalumeau and throat tones of the E-flat clarinet have less color and projection than other regions, but this area responds well to articulation and dynamic variations.",
  18: "The high chalumeau and throat tones of the E-flat clarinet have less color and projection than other regions, but this area responds well to articulation and dynamic variations.",
  20: "The clarion register of the E-flat clarinet is bright and clear, and very responsive to articulation and dynamic variations.",
  22: "The clarion register of the E-flat clarinet is bright and clear, and very responsive to articulation and dynamic variations.",
  24: "The clarion register of the E-flat clarinet is bright and clear, and very responsive to articulation and dynamic variations.",
  26: "The clarion register of the E-flat clarinet is bright and clear, and very responsive to articulation and dynamic variations.",
  29: "Notes written above the staff display the most distinctive color of the E-flat clarinet, and may be played at very soft and very loud dynamic levels.",
  31: "Notes written above the staff display the most distinctive color of the E-flat clarinet, and may be played at very soft and very loud dynamic levels.",
  33: "Notes written above the staff display the most distinctive color of the E-flat clarinet, and may be played at very soft and very loud dynamic levels.",
  35: "Notes written above the staff display the most distinctive color of the E-flat clarinet, and may be played at very soft and very loud dynamic levels.",
}

const gridHeights = [155, 112, 112, 135]
const gridWidths = [[35, 100, 100, 100, 100],
                    [35, 100, 100, 100, 100],
                    [35, 100, 100, 100, 100],
                    [35, 100, 100, 100, 100]]
const gridTimes = [[0, 4, 6, 8],
                  [11, 13, 15, 18],
                  [20, 22, 24, 26],
                  [29, 31, 33, 35]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="E-flat Clarinet"
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
