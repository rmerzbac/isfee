import React from 'react';
import Instrument from "./../../instrument";
import vid from './trillsTremolos.mp4';
import score from './trillsTremolos.png';

const instrumentText = {
  0: "As these trills become tremolos, and as the tremolos get wider, note how more fingers are involved in motion. Notice also how the sound wave becomes more resistant to change as the interval grows. ",
  2: "As these trills become tremolos, and as the tremolos get wider, note how more fingers are involved in motion. Notice also how the sound wave becomes more resistant to change as the interval grows.",
  4: "As these trills become tremolos, and as the tremolos get wider, note how more fingers are involved in motion. Notice also how the sound wave becomes more resistant to change as the interval grows. ",
  6: "As these trills become tremolos, and as the tremolos get wider, note how more fingers are involved in motion. Notice also how the sound wave becomes more resistant to change as the interval grows. ",
  8: "As these trills become tremolos, and as the tremolos get wider, note how more fingers are involved in motion. Notice also how the sound wave becomes more resistant to change as the interval grows. ",
  9: "As these trills become tremolos, and as the tremolos get wider, note how more fingers are involved in motion. Notice also how the sound wave becomes more resistant to change as the interval grows. ",
  11: "As these trills become tremolos, and as the tremolos get wider, note how more fingers are involved in motion. Notice also how the sound wave becomes more resistant to change as the interval grows. ",
  13: "As these trills become tremolos, and as the tremolos get wider, note how more fingers are involved in motion. Notice also how the sound wave becomes more resistant to change as the interval grows. ",
  15: "As these trills become tremolos, and as the tremolos get wider, note how more fingers are involved in motion. Notice also how the sound wave becomes more resistant to change as the interval grows. ",
  17: "As these trills become tremolos, and as the tremolos get wider, note how more fingers are involved in motion. Notice also how the sound wave becomes more resistant to change as the interval grows. ",
  19: "As these trills become tremolos, and as the tremolos get wider, note how more fingers are involved in motion. Notice also how the sound wave becomes more resistant to change as the interval grows.",
  21: "This passage exhibits motion in the \"throat tones\" region of the clarinet. This is considered the least colorful portion of the clarinet's range. ",
  23: "This passage exhibits motion in the \"throat tones\" region of the clarinet. This is considered the least colorful portion of the clarinet's range.",
  25: "This passage exhibits motion in the \"throat tones\" region of the clarinet. This is considered the least colorful portion of the clarinet's range. ",
  26: "This passage exhibits motion in the \"throat tones\" region of the clarinet. This is considered the least colorful portion of the clarinet's range. ",
  27: "This passage exhibits motion in the \"throat tones\" region of the clarinet. This is considered the least colorful portion of the clarinet's range.",
  28: "This passage exhibits motion in the \"throat tones\" region of the clarinet. This is considered the least colorful portion of the clarinet's range. ",
  29: "This passage exhibits motion in the \"throat tones\" region of the clarinet. This is considered the least colorful portion of the clarinet's range. ",
  30: "This passage exhibits motion in the \"throat tones\" region of the clarinet. This is considered the least colorful portion of the clarinet's range. ",
  31: "This passage exhibits motion in the \"throat tones\" region of the clarinet. This is considered the least colorful portion of the clarinet's range. ",
}

const gridHeights = [170, 150, 160]
const gridWidths = [[35, 35, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
                    [35, 105, 105, 105, 105],
                    [35, 105, 105, 105, 105]]
const gridTimes = [[0, 2, 4, 6, 8, 9, 11, 13, 15, 17, 19, 21], [23, 25, 26, 27], [28, 29, 30, 31]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Clarinet"
        title="Trills & Tremolos"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
