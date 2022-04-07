import React from 'react';
import Instrument from "./../../instrument";
import vid from './registerColors.mp4';
import score from './registerColors.png';

const instrumentText = {
  0: "The lowest range of the bass clarinet has tremendous resources of color and flexibility.",
  4: "The lowest range of the bass clarinet has tremendous resources of color and flexibility.",
  7: "The lowest range of the bass clarinet has tremendous resources of color and flexibility.",
  10: "The lowest range of the bass clarinet has tremendous resources of color and flexibility.",
  12: "The high chalumeau and throat tones retain most of the distinctive color of the bass clarinet.",
  15: "The high chalumeau and throat tones retain most of the distinctive color of the bass clarinet.",
  18: "The high chalumeau and throat tones retain most of the distinctive color of the bass clarinet.",
  20: "The high chalumeau and throat tones retain most of the distinctive color of the bass clarinet.",
  23: "The middle and high clarion registers of the bass clarinet are less convincing in their projection of articulation and dynamic color than the lower regions of the instrument.",
  26: "The middle and high clarion registers of the bass clarinet are less convincing in their projection of articulation and dynamic color than the lower regions of the instrument.",
  28: "The middle and high clarion registers of the bass clarinet are less convincing in their projection of articulation and dynamic color than the lower regions of the instrument.",
  31: "The middle and high clarion registers of the bass clarinet are less convincing in their projection of articulation and dynamic color than the lower regions of the instrument.",
  34: "The middle and high clarion registers of the bass clarinet are less convincing in their projection of articulation and dynamic color than the lower regions of the instrument.",
  37: "The middle and high clarion registers of the bass clarinet are less convincing in their projection of articulation and dynamic color than the lower regions of the instrument.",
  40: "The middle and high clarion registers of the bass clarinet are less convincing in their projection of articulation and dynamic color than the lower regions of the instrument.",
  43: "The middle and high clarion registers of the bass clarinet are less convincing in their projection of articulation and dynamic color than the lower regions of the instrument.",
}

const morePages = [["/bassClarinetR","Range"],
["/bassClarinetAC","Articulation Colors"],
["/bassClarinetP","Passages"]]

const gridHeights = [155, 112, 112, 135]
const gridWidths = [[35, 100, 100, 100, 100],
                    [35, 100, 100, 100, 100],
                    [35, 100, 100, 100, 100],
                    [35, 100, 100, 100, 100]]
const gridTimes = [[0, 4, 7, 10],
                  [12, 15, 18, 20],
                  [23, 26, 28, 31],
                  [34, 37, 40, 43]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Bass Clarinet"
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
