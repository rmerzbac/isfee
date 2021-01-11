import React from 'react';
import Instrument from "./../../instrument";
import vid from './moreBowColorsVa.mp4';
import score from './moreBowColorsVa.png';

const instrumentText = {
  0: "The placement of the bow on the string in relationship to the bridge and the fingerboard affects which harmonics in the sound-complex of the string's timbre are strengthened and suppressed. \n\n" +
  "The normal placement of the bow is about a third of the way from the end of the fingerboard to the bridge.",
13: "The placement of the bow on the string in relationship to the bridge and the fingerboard affects which harmonics in the sound-complex of the string's timbre are strengthened and suppressed. \n\n" +
"The normal placement of the bow is about a third of the way from the end of the fingerboard to the bridge.",
24: "Sul ponticello literally means \"on the bridge,\" but in practice it means placing the bow close to bridge.\n\n" +
"This accentuates the high partials of the string's timbre.",
37: "Sul ponticello literally means \"on the bridge,\" but in practice it means placing the bow close to bridge.\n\n" +
"This accentuates the high partials of the string's timbre.",
49: "Sul tasto literally means \"over the fingerboard.\"\n\n" +
"This suppresses the high partials of the string's timbre, creating a muted sound.",
62: "Sul tasto literally means \"over the fingerboard.\"\n\n" +
"This suppresses the high partials of the string's timbre, creating a muted sound.",

  }

const gridHeights = [90, 90, 90, 90, 70, 90]
const gridWidths = [[40, 400],
                    [40, 400],
                    [40, 400],
                    [40, 400],
                    [40, 400],
                    [40, 400],
                    [40, 400],
                    [40, 400]]
const gridTimes = [[0],
                  [13],
                  [24],
                  [37],
                  [49],
                  [62]]
export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Viola"
        title="More Bow Colors"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
