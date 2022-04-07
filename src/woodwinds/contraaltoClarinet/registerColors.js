import React from 'react';
import Instrument from "./../../instrument";
import vid from './registerColors.mp4';
import score from './registerColors.png';

const instrumentText = {
  0: "The lowest range of the contra-alto clarinet has tremendous resources of color and flexibility.",
  3: "The lowest range of the contra-alto clarinet has tremendous resources of color and flexibility.",
  5: "The lowest range of the contra-alto clarinet has tremendous resources of color and flexibility.",
  8: "The lowest range of the contra-alto clarinet has tremendous resources of color and flexibility.",
  10: "The high chalumeau and throat tones retain most of the distinctive color of the contra-alto clarinet.",
  12: "The high chalumeau and throat tones retain most of the distinctive color of the contra-alto clarinet.",
  15: "The high chalumeau and throat tones retain most of the distinctive color of the contra-alto clarinet.",
  17: "The high chalumeau and throat tones retain most of the distinctive color of the contra-alto clarinet.",
  20: "The clarion register of the contra-alto clarinet is usable up to written A above the staff, but not particularly effective.",
  22: "The clarion register of the contra-alto clarinet is usable up to written A above the staff, but not particularly effective.",
  24: "The clarion register of the contra-alto clarinet is usable up to written A above the staff, but not particularly effective.",
  27: "The clarion register of the ontra-alto clarinet is usable up to written A above the staff, but not particularly effective.",
}

const morePages = [["/contraaltoClarinetR","Range"],
["/contraaltoClarinetAP","Articulations & Passage"]]

const gridHeights = [170, 150, 160]
const gridWidths = [[35, 100, 100, 100, 100],
                    [35, 100, 100, 100, 100],
                    [35, 100, 100, 100, 100]]
const gridTimes = [[0, 3, 5, 8],
                  [10, 12, 15, 17],
                  [20, 22, 24, 27]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Contra-alto Clarinet"
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
