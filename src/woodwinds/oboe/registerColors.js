import React from 'react';
import Instrument from "./../../instrument";
import vid from './registerColors.mp4';
import score from './registerColors.png';

const instrumentText = {
  0: "The lowest register of the oboe is heavy and dark in color. It is difficult to play very delicately in this range. Staccato articulation may sound somewhat labored, but it is very distinct.",
  6: "The lowest register of the oboe is heavy and dark in color. It is difficult to play very delicately in this range. Staccato articulation may sound somewhat labored, but it is very distinct.",
  11: "The lowest register of the oboe is heavy and dark in color. It is difficult to play very delicately in this range. Staccato articulation may sound somewhat labored, but it is very distinct.",
  18: "The lowest register of the oboe is heavy and dark in color. It is difficult to play very delicately in this range. Staccato articulation may sound somewhat labored, but it is very distinct.",
  24: "In this middle-low register, the oboe can create its greatest dynamic contrast, and the articulation is very clear.",
  30: "In this middle-low register, the oboe can create its greatest dynamic contrast, and the articulation is very clear.",
  36: "In this middle-low register, the oboe can create its greatest dynamic contrast, and the articulation is very clear.",
  42: "In this middle-low register, the oboe can create its greatest dynamic contrast, and the articulation is very clear.",
  49: "In this middle-high range the oboe sounds most agile and articulate.",
  55: "In this middle-high range the oboe sounds most agile and articulate.",
  60: "In this middle-high range the oboe sounds most agile and articulate.",
  66: "In this middle-high range the oboe sounds most agile and articulate.",
  72: "Above the staff the oboe has less capacity for dynamic contrast, and its distinctive reedy color all but disappears. The color in this region tends to be more poignant and sinuous, while still exhibiting the instrument's directness and clarity of articulation.",
  77: "Above the staff the oboe has less capacity for dynamic contrast, and its distinctive reedy color all but disappears. The color in this region tends to be more poignant and sinuous, while still exhibiting the instrument's directness and clarity of articulation.",
  83: "Above the staff the oboe has less capacity for dynamic contrast, and its distinctive reedy color all but disappears. The color in this region tends to be more poignant and sinuous, while still exhibiting the instrument's directness and clarity of articulation.",
  99: "Above the staff the oboe has less capacity for dynamic contrast, and its distinctive reedy color all but disappears. The color in this region tends to be more poignant and sinuous, while still exhibiting the instrument's directness and clarity of articulation.",
}

const morePages = [["/oboeRRT","Range, Registers, & Tremolos"],
["/oboeP","Passages"],
["/oboeAP","Another Passage"],
["/oboeAVC","Articulation & Vibrato Colors"]]

const gridHeights = [100, 100, 100, 105]
const gridWidths = [[35, 100, 100, 100, 100],
                    [35, 100, 100, 100, 100],
                    [35, 100, 100, 100, 100],
                    [35, 100, 100, 100, 100]]
const gridTimes = [[0, 6, 11, 18],
                  [24, 30, 36, 42],
                  [49, 55, 60, 66],
                  [72, 77, 83, 99]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Oboe"
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
