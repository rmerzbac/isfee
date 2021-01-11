import React from 'react';
import Instrument from "./../../instrument.js";
import vid from './registerColors.mp4';
import score from './registerColors.png';

const instrumentText = {
  0: "The lowest range of the alto flute has a full rich color. This color is exotic and mysterious, but can be heard only in very transparent textures. Articulation in this register is not as responsive or crisp as in higher registers. Note that the right hand position is further from the shoulder, making the little finger notes less facile.",
  6: "The lowest range of the alto flute has a full rich color. This color is exotic and mysterious, but can be heard only in very transparent textures. Articulation in this register is not as responsive or crisp as in higher registers. Note that the right hand position is further from the shoulder, making the little finger notes less facile.",
  11: "The lowest range of the alto flute has a full rich color. This color is exotic and mysterious, but can be heard only in very transparent textures. Articulation in this register is not as responsive or crisp as in higher registers. Note that the right hand position is further from the shoulder, making the little finger notes less facile.",
  16: "The lowest range of the alto flute has a full rich color. This color is exotic and mysterious, but can be heard only in very transparent textures. Articulation in this register is not as responsive or crisp as in higher registers. Note that the right hand position is further from the shoulder, making the little finger notes less facile.",
  22: "Notes in the lower midrange of the alto flute have more power and clarity than notes sounding the concert pitch on the flute.",
  27: "Notes in the lower midrange of the alto flute have more power and clarity than notes sounding the concert pitch on the flute.",
  32: "Notes in the lower midrange of the alto flute have more power and clarity than notes sounding the concert pitch on the flute.",
  37: "Notes in the lower midrange of the alto flute have more power and clarity than notes sounding the concert pitch on the flute.",
  42: "The middle-high register of the alto flute has greater clarity and strength than the same concert pitch register of the flute, although the distinctive dark, rich color of the alto flute is less prominent.",
  47: "The middle-high register of the alto flute has greater clarity and strength than the same concert pitch register of the flute, although the distinctive dark, rich color of the alto flute is less prominent.",
  52: "The middle-high register of the alto flute has greater clarity and strength than the same concert pitch register of the flute, although the distinctive dark, rich color of the alto flute is less prominent.",
  56: "The middle-high register of the alto flute has greater clarity and strength than the same concert pitch register of the flute, although the distinctive dark, rich color of the alto flute is less prominent.",
  62: "Notes written above the staff for the alto flute have little distinctive color and may be better assigned to the flute. ",
  68: "Notes written above the staff for the alto flute have little distinctive color and may be better assigned to the flute. ",
  73: "Notes written above the staff for the alto flute have little distinctive color and may be better assigned to the flute. ",
  77: "Notes written above the staff for the alto flute have little distinctive color and may be better assigned to the flute. ",
}

const gridHeights = [150, 125, 125, 125]
const gridWidths = [[35, 110, 90, 100, 100],
                    [35, 110, 90, 100, 100],
                    [35, 110, 90, 100, 100],
                    [35, 110, 90, 100, 100]]
const gridTimes = [[0, 6, 11, 16],
                   [22, 27, 32, 37],
                   [42, 47, 52, 56],
                   [62, 68, 73, 77]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Alto Flute"
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
