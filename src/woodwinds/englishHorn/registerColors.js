import React from 'react';
import Instrument from "./../../instrument";
import vid from './registerColors.mp4';
import score from './registerColors.png';

const instrumentText = {
  0: "The lowest register of the English Horn is somewhat more flexible than the lowest range of the oboe. It is dark and rich, but not quite as reedy as the oboe's lowest register.",
  8: "The lowest register of the English Horn is somewhat more flexible than the lowest range of the oboe. It is dark and rich, but not quite as reedy as the oboe's lowest register.",
  14: "The lowest register of the English Horn is somewhat more flexible than the lowest range of the oboe. It is dark and rich, but not quite as reedy as the oboe's lowest register.",
  21: "The lowest register of the English Horn is somewhat more flexible than the lowest range of the oboe. It is dark and rich, but not quite as reedy as the oboe's lowest register.",
  28: "This middle-low range of the English Horn projects the most characteristic color of the instrument. In this region, dynamic and articulation shadings are most effective.",
  35: "This middle-low range of the English Horn projects the most characteristic color of the instrument. In this region, dynamic and articulation shadings are most effective.",
  42: "This middle-low range of the English Horn projects the most characteristic color of the instrument. In this region, dynamic and articulation shadings are most effective.",
  49: "This middle-low range of the English Horn projects the most characteristic color of the instrument. In this region, dynamic and articulation shadings are most effective.",
  56: "This middle-high range of the English Horn has great expressive and dramatic potential. Although the concert pitches suggest a rather bland region, on this instrument this register is intense and distinctive.",
  64: "This middle-high range of the English Horn has great expressive and dramatic potential. Although the concert pitches suggest a rather bland region, on this instrument this register is intense and distinctive.",
  69: "This middle-high range of the English Horn has great expressive and dramatic potential. Although the concert pitches suggest a rather bland region, on this instrument this register is intense and distinctive.",
  76: "This middle-high range of the English Horn has great expressive and dramatic potential. Although the concert pitches suggest a rather bland region, on this instrument this register is intense and distinctive.",
  82: "This high register of the English Horn is rarely exploited, but it provides a color that is clearly distinguishable from the oboe and other woodwind instruments sounding in the same concert-pitch range.",
  89: "This high register of the English Horn is rarely exploited, but it provides a color that is clearly distinguishable from the oboe and other woodwind instruments sounding in the same concert-pitch range.",
  94: "This high register of the English Horn is rarely exploited, but it provides a color that is clearly distinguishable from the oboe and other woodwind instruments sounding in the same concert-pitch range.",
  100: "This high register of the English Horn is rarely exploited, but it provides a color that is clearly distinguishable from the oboe and other woodwind instruments sounding in the same concert-pitch range.",

}

const gridHeights = [150, 114, 120, 130]
const gridWidths = [[35, 100, 100, 100, 100],
                    [35, 100, 100, 100, 100],
                    [35, 100, 100, 100, 100],
                    [35, 100, 100, 100, 100]]
const gridTimes = [[0, 8, 14, 21],
                  [28, 35, 42, 49],
                  [56, 64, 69, 76],
                  [82, 89, 94, 100]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="English Horn"
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
